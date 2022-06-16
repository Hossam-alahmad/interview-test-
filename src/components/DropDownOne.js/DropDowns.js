import React, { useEffect, useState } from "react";
import { useCountriesReducer } from "../../reducers/countriesReducer";
import DropDown from "./DropDown";

const DropDowns = ({ data }) => {
    const [countriesDetails, dispatch] = useCountriesReducer(); // custom hook for get states
    const countries = data.map(country => country.country); // get countries list
    const [cities, setCities] = useState([]); // for cities list
    const [neighborhoods, setNeighborhoods] = useState([]); // for neighborhoods list
    useEffect(() => {
        // this for every change when user select country or city for filter in current details
        setCities(
            data
                .filter(obj => obj.country === countriesDetails.country)
                .map(obj => obj.cities.map(state => state.city))
                .flat(1)
        );
        setNeighborhoods(
            data
                .map(obj =>
                    obj.cities
                        .filter(state => state.city === countriesDetails.city)
                        .map(state => state.neighborhood)
                        .flat(1)
                )
                .flat(1)
        );
    }, [countriesDetails, data]);
    return (
        <div className="dropdown-container grid md:grid-cols-3 gap-4">
            <DropDown
                placeholder="اختر الدولة"
                data={countries}
                dropDownValue={countriesDetails.country}
                actionType="SET_COUNTRY"
                dispatch={dispatch}
            />
            <DropDown
                placeholder="اختر المحافظة"
                data={cities}
                dropDownValue={countriesDetails.city}
                actionType="SET_CITY"
                dispatch={dispatch}
                status={countriesDetails.country !== "" ? true : false}
            />
            <DropDown
                placeholder="اختر الحي"
                data={neighborhoods}
                dropDownValue={countriesDetails.neighborhood}
                actionType="SET_NEIGHBORHOOD"
                dispatch={dispatch}
                status={countriesDetails.city !== "" ? true : false}
            />
        </div>
    );
};

export default React.memo(DropDowns);
