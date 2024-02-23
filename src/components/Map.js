import React from 'react';

import '../assets/styles/Map.css';
function Map() {

  return (
        <div className="map">
            <gmp-map center="-22.99152183532715,-47.00523376464844" zoom="16" map-id="DEMO_MAP_ID">
            <gmp-advanced-marker position="-22.99152183532715,-47.00523376464844" title="My location"></gmp-advanced-marker>
            </gmp-map>
        </div>
  )
}

export default Map;