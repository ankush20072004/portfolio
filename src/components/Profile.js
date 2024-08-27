import React from "react";
import { Link } from "react-router-dom";
import mainImg1 from "../assets/main/main-img-1.png";
import mainImg2 from "../assets/main/main-img-2.png";
import mainImg4 from "../assets/main/main-img-4.png";
const Profile = () => {
  return (
    <div className="w-full min-h-[82vh] flex flex-col md:flex-row">
      <div className="flex flex-col md:flex-row flex-grow">
        <div
          className="hidden md:block md:w-[25vh] h-[20vh] md:h-auto bg-cover"
          style={{ backgroundImage: `url(${mainImg1})` }}
        ></div>

        <div className="w-full md:w-[140vh] h-[7vh] md:h-auto bg-cover flex flex-col justify-between">
          <div
            className="relative bg-cover bg-center w-full h-full flex justify-center items-center text-center"
            style={{ backgroundImage: `url(${mainImg4})` }}
          >
            <ul className="z-10 flex flex-row md:flex-col justify-center items-center space-x-4 md:space-x-0 md:space-y-4">
              <li className="text-lg text-black cursor-pointer">
                <Link to="/profile">Profile</Link>
              </li>
              <li className="text-lg text-black cursor-pointer">
                <Link to="/gallery">Gallery</Link>
              </li>
              <li className="text-lg text-black cursor-pointer">
                <Link to="/booking">Booking</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="w-full h-full md:w-full md:h-auto text-[#333333] p-4 flex justify-center items-center">
  <div className="w-full md:w-auto">
    <h5 className="font-[Nunito] text-[18px] font-bold mt-4 ml-2 md:ml-2">
      1992/5/14生まれ、日本とカナダのハーフ。
    </h5>

    <h5 className="font-[Nunito] text-[18px] font-bold mt-5 ml-2">
      16歳でファッションモデルデビュー
    </h5>

    <h5 className="font-[Nunito] text-[18px] font-bold mt-5 ml-2">
      デビュー1年目にしてフジテレビ“すぽると！”の
    </h5>
    <h5 className="font-[Nunito] text-[18px] font-bold mt-0 ml-2">
      レギュラーに大抜擢される。
    </h5>

    <h5 className="font-[Nunito] text-[18px] font-bold mt-5 ml-2">
      2013年に1st写真集、2015年には2nd写真集と
    </h5>
    <h5 className="font-[Nunito] text-[18px] font-bold mt-0 ml-2">
      スタイルブックを同時発売、2018年に3rd写真集を発売。
    </h5>

    <h5 className="font-[Nunito] text-[18px] font-bold mt-5 ml-2">
      2016年に、ViVi専属モデルを卒業し、“sweet”や
    </h5>
    <h5 className="font-[Nunito] text-[18px] font-bold mt-0 ml-2">
      “BAILA”“SENSE”など多数ファッション誌に出演中。
    </h5>
    <h5 className="font-[Nunito] text-[18px] font-bold mt-0 ml-2">
      2019年、オリジナルプロテインCRASをプロデュース。
    </h5>
    <h5 className="font-[Nunito] text-[17px] font-bold mt-0 ml-2">
      2020年には自身のコスメブランド「LAPERICUM」を設立し、
    </h5>
    <h5 className="font-[Nunito] text-[18px] font-bold mt-0 ml-2">
      クリエイティブな分野でも活躍の場を広げている。
    </h5>

    <h5 className="font-[Nunito] text-[18px] font-bold mt-5 ml-2">
      同年、車好きが高じて公式YouTubeチャンネル
    </h5>
    <h5 className="font-[Nunito] text-[18px] font-bold mt-0 ml-2">
      「MAGGY‘s Beauty and the Speed」を開設し、
    </h5>
    <h5 className="font-[Nunito] text-[18px] font-bold mt-5 ml-2">
      モデルのマギーとは異なった一面を見せている。
    </h5>
  </div>
</div>




        <div
          // className="hidden md:block md:w-[493px] h-[20vh] md:h-auto bg-cover"
          className="hidden md:block md:w-full h-[20vh] md:h-auto bg-cover bg-center"
          style={{ backgroundImage: `url(${mainImg2})` }}
        ></div>
      </div>
    </div>
  );
};

export default Profile;
