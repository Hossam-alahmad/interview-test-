import React, { useState } from "react";

const TabMenu = ({tab,setTab}) => {
    return (
        <div className="tab-container ">
            <div className="grid grid-cols-2 gap-2 text-center mb-4">
                <button
                    onClick={() => setTab(0)}
                    className={`${
                        tab === 0 ? "bg-sky-700 text-white" : "border shadow"
                    } p-2 rounded transition-all hover:bg-sky-600 hover:text-white w-full`}
                >
                    الإختبار الأول
                </button>
                <button
                    onClick={() => setTab(1)}
                    className={`${
                        tab === 1 ? "bg-sky-700 text-white" : "border shadow"
                    } p-2 rounded transition-all hover:bg-sky-600 hover:text-white w-full`}
                >
                    الإختبار الثاني
                </button>
            </div>
        </div>
    );
};

export default TabMenu;
