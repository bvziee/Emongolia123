import "./App.css";
import React from "react";
import { IoMdMoon } from "react-icons/io";
import { useState } from "react";
import Profile from "./assets/pro.png";
import pic from "./assets/reg.jpeg";
import emon from "./assets/emo.png";
import hey from "./assets/hey.png";
import car from "./assets/redcar.png";
import Build from "./assets/build.png";
import UlHudluh from "./assets/ulhudluh.png";
import myregno from "./assets/myregno.jpeg";
import duplix from "./assets/dublix.jpeg";
import { MdOutlineMenu } from "react-icons/md";
import { IoAccessibility } from "react-icons/io5";
import { GrPowerReset } from "react-icons/gr";
import { PiWarningCircle } from "react-icons/pi";
function App() {
  const [selected, setSelected] = useState(null);
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };
  console.log(modal);

  const handleClick = (option) => {
    setSelected(option);
  };

  const myArray = [
    {
      text: "Ургийн овог",
      value: "Боржигон",
    },
    {
      text: "Нэр",
      value: "Долгорсүрэн",
    },
    {
      text: "Хүйс",
      value: "Эмэгтэй",
    },
    {
      text: "Регистрийн дугаар",
      value: "УО03232180",
    },
    {
      text: "Яс үндэс ",
      value: "Халх",
    },
  ];

  return (
    <div className="bg-slate-50 h-screen relative ">
      <div className="fixed bottom-[200px] right-3 flex flex-col gap-3">
        <div className="p-3 bg-[#2b8fec] rounded-full">
          <MdOutlineMenu size={30} color="white" />
        </div>
        <div className="p-3 bg-[#2b8fec] rounded-full">
          <IoAccessibility size={30} color="white" />
        </div>
      </div>
      <div className="flex justify-between p-2 px-4 bg-[#0068CC]">
        <div className="flex gap-4 items-center text-white">
          <div
            className={`cursor-pointer ${
              selected === "Иргэн" ? "font-bold" : "text-slate-200"
            }`}
            onClick={() => handleClick("Иргэн")}
          >
            Иргэн
          </div>
          <div
            className={`cursor-pointer ${
              selected === "Хуулийн этгээд" ? "font-bold" : "text-slate-200"
            }`}
            onClick={() => handleClick("Хуулийн этгээд")}
          >
            Хуулийн этгээд
          </div>
          <div
            className={`cursor-pointer ${
              selected === "Foreigner" ? "font-bold" : "text-slate-200"
            }`}
            onClick={() => handleClick("Foreigner")}
          >
            Foreigner
          </div>
        </div>
        <div className="bg-[#A8C9E9] px-2 py-1 rounded-md">
          <IoMdMoon size={20} color="black" />
        </div>
      </div>
      <div className="py-4 flex justify-between items-center px-2">
        <img src={emon} alt="pro" />
        <MdOutlineMenu size={35} />
      </div>
      <div className="flex flex-col items-center -mr-2">
        <img src={Profile} alt="pro" />
        <div className="w-[100px] h-[100px] border-4 border-[#0068CC] overflow-hidden rounded-full px-2 flex items-center justify-center mt-8  ">
          <img src={pic} alt="pro" className="w-[70px]" />
        </div>
      </div>
      <div className="p-4 -mt-20">
        <div className="p-4 bg-white pt-16">
          <h1 className="text-[20px] mb-4 font-medium">Үндсэн мэдээлэл</h1>
          <div>
            {myArray.map((item, index) => {
              return (
                <div key={index} className="flex flex-col text-[18px]">
                  <div className="text-[#012468]">{item.text}:</div>
                  <div className=" font-medium text-[#012468] py-2">
                    {item.value}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-col gap-4 mt-4 text-[18px]">
            <p className="text-[23px]">Иргэний үнэмлэхийн хаяг</p>
            <p className="text-[#012468] font-medium">
              Улаанбаатар, Баянгол,6р хороо, 35р байр, 25 тоот
            </p>
            <p className="text-[23px]">Оршин суугаа хаяг</p>
          </div>
        </div>
      </div>
      <div className="" onClick={handleModal}>
        <div className="px-8 flex justify-between">
          <div className="font-bold text-[25px]">Миний үнэмлэх</div>
          <div className="text-[#0068CC] flex items-center gap-2 text-[18px]">
            Шинэчлэх
            <div className="rounded-full border-2 border-[#0068CC] p-1">
              <GrPowerReset />
            </div>
          </div>
        </div>
        <div className="px-4 pt-4 ">
          <img src={myregno} alt="myregno" />
        </div>
      </div>

      <div className="p-4 bg-slate-100">
        <div className="bg-white p-4 rounded-2xl">
          <div className="flex gap-2 items-center">
            <img src={hey} alt="hey" />
            <h1 className="text-[20px]">Өрхийн гишүүдийн мэдээлэл</h1>
          </div>
          <div className="text-[18px]">
            Ам бүлийн тоо: <span className="text-[#2b8fec]">1</span>
          </div>
          <div className="text-[21px]">
            Баярсайхан <span className="text-[#2b8fec]">Догорсүрэн</span>
          </div>
        </div>
      </div>
      <div className="p-4 bg-slate-100">
        <div className="bg-white p-4 rounded-2xl">
          <div className="flex gap-2 items-center">
            <img src={car} alt="hey" />
            <h1 className="text-[20px]">Тээвийн хэрэгсэл</h1>
          </div>
          <div className=" border-l-4 rounded-xl border-[#2b8fec] p-4 bg-[#ECF3FF] mt-2">
            <div className="flex gap-4">
              <PiWarningCircle size={35} className="text-[#2b8fec]" />
              <div>Таны нэр дээр тээвийн хэрэгсэл бүртгэлгүй байна.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-slate-100">
        <div className="bg-white p-4 rounded-2xl">
          <div className="flex gap-2 items-center">
            <img src={Build} alt="hey" />
            <h1 className="text-[20px]">Компаниуд</h1>
          </div>
          <div className=" border-l-4 rounded-xl border-[#2b8fec] p-4 bg-[#ECF3FF] mt-2">
            <div className="flex gap-4">
              <PiWarningCircle size={35} className="text-[#2b8fec]" />
              <div>Таны нэр дээр компани бүртгэлгүй байна.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4 bg-slate-100">
        <div className="bg-white p-4 rounded-2xl">
          <div className="flex gap-2 items-center">
            <img src={UlHudluh} alt="hey" />
            <h1 className="text-[20px]">Үл хөдлөх хөрөнгө</h1>
          </div>
          <div className=" border-[1px] rounded-xl mt-2 p-2 px-4">
            <div className="flex flex-col">
              <h1 className="text-[18px] text-[#0068CC] font-medium">
                Үл хөдлөх (Y1713000180)
              </h1>
              <h1 className="font-medium text-[#012468] text-[15px]">
                Улаанбаатар, Баянгол,6р хороо, 35р байр, 25 тоот
              </h1>
            </div>
          </div>
        </div>
      </div>
      {modal ? (
        <div className="fixed top-0 w-full h-full flex items-center justify-center z-20">
          <div
            onClick={handleModal}
            className="bg-black opacity-50 absolute top-0 left-0 w-full h-full"
          ></div>
          <div className="bg-white z-50 p-5 rounded-md w-[96%] h-[85%]">
            <div className="text-[20px] font-bold text-slate-700">
              Иргэний үнэмлэх
            </div>
            <div className="mt-5">
              <img src={duplix} alt="duplix" />
            </div>
            <div className="mt-5 flex gap-10 self-center ml-4">
              <button className="border-[1px] rounded-2xl p-2 text-blue-500 font-bold">
                Дахин захиалах
              </button>
              <button className="border-[1px] rounded-2xl p-2 text-blue-500 font-bold">
                Лавлагаа авах
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
