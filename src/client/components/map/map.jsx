import React, { Component } from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api'
import '../../styles/index.less';

const mapStyles = {
  width: '100%',
  height: '100%',
};

const center = {
  lat: 43.473565,
  lng: -80.539364,
}


class TestMap extends Component {
  render() {
     return (
      <LoadScript
        id="script-loader"
        googleMapsApiKey="AIzaSyDab_sLiaBIu7GyZttjzMnNk7ewW57XR38"
      >
        <GoogleMap
          id='example-map'
          mapContainerStyle={{
            width: '100%',
            height: '100%',

          }}
          zoom={15}
          center={center}
        >
        </GoogleMap>
      </LoadScript>
     )
  }
}

export default TestMap;
