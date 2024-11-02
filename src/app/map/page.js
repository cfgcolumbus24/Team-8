"use client";

import "./App.css";
import React, { useState } from "react";
import { Map, Marker, APIProvider} from "@vis.gl/react-google-maps";

const CustomMap = () => {
  // shows marker on London by default

  const [center, setCenter] = useState({
    lat: 40.72625,
    lng: -74.000222,
  });

  require('dotenv').config();

  let apiKey = process.env.NEXT_PUBLIC_MAP_API_KEY

  return (
    <div className="app">
      <APIProvider apiKey={apiKey}>
        <div className="map-container">
          <Map
            style={{ borderRadius: "20px" }}
            defaultZoom={13}
            defaultCenter={center}
            gestureHandling={"greedy"}
            disableDefaultUI
          >
          </Map>
        </div>
      </APIProvider>
    </div>
  );
}

export default CustomMap;