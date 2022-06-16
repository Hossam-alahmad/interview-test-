import { useReducer } from "react";

const initialState = {
    country: "",
    city: "",
    neighborhood: "",
};
const reducer = (state, action) => {
    switch (action.type) {
        case "SET_COUNTRY":
            return {
                ...initialState,
                country: action.payload,
            };
        case "SET_CITY":
            return {
                ...state,
                city: action.payload,
                neighborhood: "",
            };
        case "SET_NEIGHBORHOOD":
            return {
                ...state,
                neighborhood: action.payload,
            };
        default:
            return state;
    }
};

export const useCountriesReducer = () => {
    return useReducer(reducer, initialState);
};
