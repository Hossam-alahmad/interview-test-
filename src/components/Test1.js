import React from "react";
import DropDowns from "./DropDownOne.js/DropDowns";
import countriesDetails from "../utils/dummyData.json";
const Test1 = () => {
    return (
        <div className="test1">
            <h1 className="text-2xl font-bold mb-4">الإختبار الاول:</h1>
            <p className="mb-4">
                انشاء ثلاث DropDowns تحتوي معلومات عن الدولة + المدينة + الحي
            </p>
            <p className="mb-4 text-sm bg-sky-200 p-2 rounded">
                ملاحظة: تم استخدام Custom DropDown وتنسيقها باستخدام Tailwind
                css
            </p>
            <DropDowns data={countriesDetails} />
        </div>
    );
};

export default Test1;
