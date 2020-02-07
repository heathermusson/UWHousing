import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const mapStyles = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 43.473565,
  lng: -80.539364,
}

const Map = ({ height, width, lat, lng, zoom }) => (
  <LoadScript
    id="script-loader"
    googleMapsApiKey="AIzaSyDab_sLiaBIu7GyZttjzMnNk7ewW57XR38"
  >
    <GoogleMap
      id='property-map'
      mapContainerStyle={{
        width: {width},
        height: {height},

      }}
      zoom={zoom}
      center={center}
    >
    </GoogleMap>
  </LoadScript>
);

export default Map;
