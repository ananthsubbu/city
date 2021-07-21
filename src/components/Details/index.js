import React from 'react';
import { useSelector } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Details = () => {

    const cityDetails = useSelector(state => state.cityReducer.cityDetails);
    const { latitude, longitude } = cityDetails.places[0]

    return (
        <div>
            Details Page
            <div className="mapContainer">
                <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[latitude, longitude]}>
                        <Popup>
                            place name: {cityDetails['place name']} <br />
                            state: {cityDetails['state']}<br />
                            state abbreviation: {cityDetails['state abbreviation']}<br />
                            country: {cityDetails['country']}<br />
                            country abbreviation: {cityDetails['country abbreviation']}
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default Details