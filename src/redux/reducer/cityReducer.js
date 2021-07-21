
const initialState = {
    cities: ['Smyrna, GA', 'Belmont, MA'],
    selectedCity: '',
    cityDetails: {}
};

function cityReducer(state = initialState, action) {
    switch (action.type) {
        case "selectedCity":
            return {
                ...state,
                selectedCity: action.payload
            }
        case "addCity":
            return {
                ...state,
                cities: [...state.cities, action.payload]
            }
        case "cityDetails":
            return {
                ...state,
                cityDetails: action.payload
            }

        default:
            return { ...state };
    }
}

export default cityReducer;