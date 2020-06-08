import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const center = {
  lat: 43.477680,
  lng: -80.537242,
};

const ListingMap = () => (
  <LoadScript
    id="script-loader"
    googleMapsApiKey=<INSERTAPIKEYHERE>
  >
    <GoogleMap
      id='listing-map'
      mapContainerStyle={{
        width: '100%',
        height: '80vh',
      }}
      zoom={18}
      center={center}
    >
      <Marker
        position={center}
      />
    </GoogleMap>
  </LoadScript>
);

export default ListingMap;
