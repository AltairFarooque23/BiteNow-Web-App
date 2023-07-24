import React from 'react'
import GoogleMapReact  from 'google-map-react';

function TrackingMap() {
  const location = {
    lat: 49.95,
    lng: 30.33,
    address: 'Your address'
  };
  return (
    <div className='w-full h-full transition-transform duration-500 ease-in-out'>
      <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
          defaultCenter={location}
          defaultZoom={18}
        >
        </GoogleMapReact>
    </div>
  )
}

export default TrackingMap;