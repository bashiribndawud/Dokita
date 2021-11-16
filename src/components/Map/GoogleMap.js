import React,{useState,useEffect, useContext} from 'react'
import {
    withGoogleMap,
    withScriptjs,
    GoogleMap,
    Marker,
    InfoWindow
  } from "react-google-maps";

export const GMap = ({MarkerLocations}) => {
    
    const [selectedPlace, setselectedPlace] = useState(null)
    const [state, setstate] = useState({
        currentLocation: {
            lat: '',
            lng: ''
          }
    })
    useEffect(() => {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(pos => {
              const coords = pos.coords;
              setstate({
                currentLocation: {
                  lat: coords.latitude,
                  lng: coords.longitude
                }
              });
            });
          }
       
    }, [state.currentLocation])
    const {lat, lng} = state.currentLocation
   
    return (
        <div>
            <GoogleMap
                defaultZoom={15}
                defaultCenter={{lat:Number(MarkerLocations[0].lat),  lng:Number(MarkerLocations[0].lng)}}
            >
                {MarkerLocations.map(place => (
                    <Marker key={place._id} 
                    position={{lat: Number(place.lat), lng: Number(place.lng)}}
                    onClick={() => {
                        setselectedPlace(place);
                      }}
                   
                    />
                ))}
                {selectedPlace && (
                    <InfoWindow
                    position={{lat: Number(selectedPlace.lat), lng: Number(selectedPlace.lng)}}
                    onCloseClick={() => {setselectedPlace(null)}}
                    >
                        <div>
                        <p>{selectedPlace.name}</p>           
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </div>
    )
}
const WrappedMap = withScriptjs(withGoogleMap(GMap))
export default WrappedMap
