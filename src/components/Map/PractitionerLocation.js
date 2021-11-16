import React from 'react'
import WrappedMap from './GoogleMap'
// import { key } from '../../key'
const places= [
    {
      _id: 1,
      name: 'Chagib Pharmacy',
      lat: '9.1512391',
      lng: '7.3187136'
    },
    {
      _id: 2,
      name: 'Ejimus Pharmacy Ltd',
      lat: '9.1541457',
      lng: '7.3203045'
    },
    {
      _id: 3,
      name: 'Iferika Medicine Shop',
      lat: '9.1510221',
      lng: '7.3187136'
    }
  ]
const PractitionerLocation = () => {
    // console.log(key)
    return (
                    <WrappedMap 
                    googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GoogleMap}&v=3.exp&libraries=geometry,drawing,places`}
                    loadingElement={<div style={{height: '100%'}}></div>}
                    containerElement={<div style={{height: '100%'}}></div>}
                    MarkerLocations ={places}
                    mapElement={<div style={{height: '100%'}}></div>}
                    />
       
    )
}

export default PractitionerLocation
