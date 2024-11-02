"use client";

import "./App.css";
import React, { useState } from "react";
import { Map, Marker, APIProvider} from "@vis.gl/react-google-maps";
import { config } from 'dotenv';

const CustomMap = () => {
  // shows marker on London by default
  const [markerLocation, setMarkerLocation] = useState({
    lat: 51.509865,
    lng: -0.118092,
  });

  config();

  const apiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY;

  return (
    <div className="app">
      <APIProvider apiKey={apiKey}>
        <div className="map-container">
          <Map
            style={{ borderRadius: "20px" }}
            defaultZoom={13}
            defaultCenter={markerLocation}
            gestureHandling={"greedy"}
            disableDefaultUI
          >
            <Marker position={markerLocation} />
          </Map>
        </div>
      </APIProvider>
    </div>
  );
}

export default CustomMap;