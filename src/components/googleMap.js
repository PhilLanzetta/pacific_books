import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from './locationPin'

const GoogleMap = () => {
  const mapLocation = { lat: 40.69803008051306, lng: -73.97463847116369 }

  return (
    <div className='contact-map-container'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.GATSBY_GOOGLE_MAP_KEY }}
        defaultCenter={mapLocation}
        defaultZoom={17}
      >
        <LocationPin lat={mapLocation.lat} lng={mapLocation.lng}></LocationPin>
      </GoogleMapReact>
    </div>
  )
}

export default GoogleMap
