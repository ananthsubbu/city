export const changeSelectedCity = (city) => {
    return {
        type: "selectedCity",
        payload: city
    }
}

export const addCity = (city) => {
    return {
        type: "addCity",
        payload: city
    }
}

export const addCityDetails = (details) => {
    return {
        type: "cityDetails",
        payload: details
    }
}