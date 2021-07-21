import React,
{
    useState,
    useEffect
} from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import SelectField from '../SelectField';
import {
    changeSelectedCity,
    addCity,
    addCityDetails
} from '../../redux/action/index'

const HomePage = () => {
    const [newCity, updateNewCity] = useState('')
    const cities = useSelector(state => state.cityReducer.cities);
    const selectedCity = useSelector(state => state.cityReducer.selectedCity);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if (selectedCity) {
            const [city, state] = selectedCity.split(',')
            axios.get(`http://api.zippopotam.us/us/${state.trim()}/${city.trim()}`)
                .then((response) => {
                    dispatch(addCityDetails(response.data))
                    dispatch(changeSelectedCity(''))
                    history.push('/details')
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }, [selectedCity])

    const updateCity = () => {
        if (newCity) {
            dispatch(addCity(newCity))
            updateNewCity('')
        }
    }

    return (
        <div>
            <h1>Select a city to view the details of it</h1>
            <SelectField
                cities={cities}
                selectedCity={selectedCity}
                changeSelectedCity={(city) => dispatch(changeSelectedCity(city))}
            />
            <h1>Type a city name with state to add it in selectfield</h1>
            <input name="newCity" onChange={(e) => updateNewCity(e.target.value)} value={newCity} />
            <button onClick={updateCity}> Update city in redux</button>
        </div>
    );
};

export default HomePage