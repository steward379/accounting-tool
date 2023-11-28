
import React, { useState } from 'react';
import { Auth, User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import firebase from '../utils/firebase'; 
import { LoginMethod } from '../LoginMethod';
import { useAuth } from '../context/authContext';
// import { useDispatch } from 'react-redux';
// import { setUser, setLoginMethod, LoginMethod } from '../src/slices/userSlice';

const EmailLogComponent  = () => {

  const { user, loginWithEmail, signUpWithEmail, logout, setLoginMethod } = useAuth();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showModal, setShowModal] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  const toggleModal = () => {
      setShowModal(!showModal);
  };

  const handleSignUp = async () => {
    try {
      await signUpWithEmail(email, password);
      setShowModal(false);
      setLoginMethod(LoginMethod.Email);
      setErrorMsg('');
      
      console.log("註冊成功，使用者 ID 是：",user.uid);
    } catch (error) {
      console.log("註冊失敗", error);
    }
  };

  const handleSignIn = async () => {
    try {
      await loginWithEmail(email, password);
      setShowModal(false)
      setLoginMethod(LoginMethod.Email);
      setErrorMsg("");

      console.log("登入成功，使用者 ID 是：", user.uid);
    } catch (error) {

      setErrorMsg("帳號或密碼錯誤，或帳號存在其他登入方式");
      console.log("登入失敗", error);
    }
  };

  const handleSignOut = async () => {
    try {

      await logout();
      console.log("登出成功", user.uid);
    } catch (error) {
      console.log("登出失敗", error);
    }
  };

  return (
    <div>
    {user ? (
        <button className= "text-black p-2 rounded" onClick={handleSignOut}>登出</button>
      ) : (
        <button className="text-black p-2 rounded" onClick={toggleModal}>登入 / 註冊</button>
      )}

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/6 relative">
            <button className="text-red-500 absolute top-2 right-5" onClick={toggleModal}> [ ✖️ ]</button>
            <div className="mt-4">
              <input className="border p-2 w-full text-black rounded" type="email" placeholder="電子郵件" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="mt-4">
              <input className="border p-2 w-full text-black rounded" type="password" placeholder="密碼" value={password} onChange={e => setPassword(e.target.value)} />
            </div>
            <div className="mt-4 text-red-500">
              {errorMsg}
            </div>
            <div className="mt-4 flex gap-2">
              <button className="bg-green-500 text-white p-2 rounded" onClick={handleSignUp}>註冊</button>
              <button className="bg-blue-500 text-white p-2 rounded" onClick={handleSignIn}>登入</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmailLogComponent;