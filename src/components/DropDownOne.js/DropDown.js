import React, { useState } from "react";

const DropDown = ({
    placeholder,
    data,
    dropDownValue,
    status = true,
    actionType,
    dispatch,
}) => {
    const [showDropDown, setShowDropDown] = useState(false); // for show / hide dropdown
    // this function for set the value of dropdown
    const changeDropDownHandler = value => {
        dispatch({ type: actionType, payload: value });
        setShowDropDown(false);
    };
    return (
        <div className="dropdown relative border rounded-lg shadow-md">
            <input
                type="text"
                className="p-2 outline-none w-full cursor-pointer"
                readOnly
                placeholder={placeholder}
                value={dropDownValue}
                onClick={() => status && setShowDropDown(!showDropDown)}
            />
            <div
                className={`absolute z-50  rounded-b-lg bg-white shadow-lg w-full p-2 transition-all ${
                    showDropDown
                        ? "top-full visible opacity-1"
                        : "top-[150%] invisible opacity-0"
                }`}
            >
                <div className="data">
                    {data.map((value, index) => (
                        <div
                            className="p-2 hover:bg-zinc-100 transition-all cursor-pointer rounded"
                            key={index}
                            onClick={() => changeDropDownHandler(value)}
                        >
                            {value}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default React.memo(DropDown);
