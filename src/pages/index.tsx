// pages/landing.tsx
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const LandingPage = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-cover bg-no-repeat bg-center h-screen flex items-center justify-center" style={{ backgroundImage: "url('/images/pexels-tyler-lastovic.jpg')" }}>
        <div className="absolute inset-20 bg-black opacity-20 rounded mt-20 "></div>
        <div className="text-center text-white z-10">
            <Image src="/images/ballon.png" alt="Scene Image" width="500" height="300" 
                objectFit='cover' />
            <h1 className="text-6xl font-bold mb-4">Hidden Gem Spot 旅圓</h1>
            <p className="text-3xl mb-8">紀錄自己的下一趟生活冒險。</p>
            <Link href="/home">
              <button className="bg-red-400 text-red text-xl font-semibold py-3 px-5 rounded hover:bg-red-500 transition duration-300">開始探索</button>
            </Link>
        </div>
      </div>

      {/* Block 1 */}
      <div className="md:flex gap-10 items-center justify-end bg-gray-100 p-16">
        <div className="md:flex-1 md:w-1/2">
          <div className="md:flex items-center justify-end">
            <Image src="/images/pexels-marina-leonova.jpg" alt="Scene Image" width="1000" height="1000" />
          </div>
        </div>
        <div className=" w-full md:w-1/2 text-center md:text-left p-4 text-black">
          <h2 className="text-4xl font-bold mb-3">1️⃣ 創造你的私人景點</h2>
          <p className="mb-5 text-2xl"> 專屬於你的故事藏寶圖，無論是約會聖地、有故事的地方，全都一目瞭然。</p>
          <Link href="/home">
            <button className="text-xl max-w-xs py-3 px-5 bg-red-500 text-white font-semibold rounded hover:bg-red-700 transition duration-300">馬上新增</button>
          </Link>
        </div>
      </div>

      {/* Block 2 */}
      <div className="flex gap-4 flex-wrap-reverse items-center justify-center bg-white p-10">
        <div className="flex-1 md:w-1/2 text-center md:text-right p-8 text-black" >
          <h2 className="text-4xl font-bold mb-3">2️⃣ 收藏更多景點</h2>
          <p className="mb-5 text-2xl"> 追蹤、收藏分享他人的景點，收納到自己的地圖中。</p>
          <Link href="/home">
            <button className="text-xl max-w-xs py-3 px-5 bg-blue-500 text-white font-semibold rounded hover:bg-blue-700 transition duration-300">瀏覽地圖</button>
          </Link>
        </div>
        <div className="flex-1 md:w-1/2" style={{ maxHeight: "600px"}}>
          <Image src="/images/pexels-bhupendra-singh.jpg" alt="Scene Image" width="1000" height="500" 
            objectFit='cover'
          />
        </div>
      </div>

      {/* Block 3 */}
      <div className="md:flex gap-10 items-center justify-end bg-gray-100 p-16">
        <div className="flex-1 md:w-1/2" style={{ maxHeight: "600px", overflow: 'hidden' }}>
          <Image src="/images/pexels-photo-friends.jpeg" alt="Scene Image" width="1000" height="500" 
                objectFit='cover' />
        </div>
        <div className=" w-full md:w-1/2 text-center md:text-left p-4 text-black">
          <h2 className="text-4xl font-bold mb-3">1️⃣ 原來你也在！景點交友</h2>
          <p className="mb-5 text-2xl"> 抓取附近景點，一起去有興趣或去過的景點溜達。</p>
          <Link href="/home">
            <button className="text-xl max-w-xs py-3 px-5 bg-red-500 text-white font-semibold rounded hover:bg-red-700 transition duration-300">看看別人都去哪</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

