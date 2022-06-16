import React from "react";
import logo from "../assets/images/logo.png";
import { AiFillStar } from "react-icons/ai";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaMotorcycle } from "react-icons/fa";
import { TbCurrencyLira } from "react-icons/tb";
const Test2 = () => {
    return (
        <div className="test2">
            <h1 className="text-2xl font-bold mb-4">الإختبار الثاني:</h1>
            <p className="mb-4">تصميم كرت يحوي معلومات معينة</p>
            <div className="card shadow-lg rounded-lg overflow-hidden border grid grid-cols-3 gap-2 px-2 w-full sm:w-8/12 mx-auto">
                <div className="img-box  relative col-span-2 p-2">
                    <div className="overlay absolute top-0 -right-2 w-7/12 h-[40px] -z-10 bg-black/60 shadow-[0_5px_12px_10px_rgba(0,0,0,0.60)]"></div>
                    <h2 className="text-xl text-white font-bold">
                        مطعم حكايتنا
                    </h2>
                    <img
                        src={logo}
                        alt={logo}
                        className="absolute top-0 w-full h-full object-cover -z-40"
                    />
                </div>
                <div className="card-details font-bold flex flex-col justify-center py-6">
                    <div className="rate flex items-center gap-1 mb-2">
                        <span className="text-orange-400 text-xl">
                            <AiFillStar />
                        </span>
                        <span>4.0</span>
                    </div>
                    <div className="rate flex items-center gap-1  mb-2">
                        <span className="text-orange-400 text-xl">
                            <MdOutlineAccessTimeFilled />
                        </span>
                        <span className="block text-sm bg-red-700 py-1 px-2 rounded-full text-white">
                            مغلق
                        </span>
                    </div>
                    <div className="rate flex items-center gap-1  mb-2">
                        <span className="text-orange-400 text-xl">
                            <FaMotorcycle />
                        </span>
                        <span>6.00</span>
                    </div>
                    <div className="rate flex items-center gap-1">
                        <span className="text-orange-400 text-xl">
                            <TbCurrencyLira />
                        </span>
                        <span>الأدنى 50.0</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Test2;
