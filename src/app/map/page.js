"use client";

import "./App.css";
import React, { useState, useEffect } from "react";
import { Map, APIProvider, Marker, InfoWindow } from "@vis.gl/react-google-maps";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

const CustomMap = () => {
  const center = {
    lat: 40.72625,
    lng: -74.000222,
  };

  const apiKey = process.env.NEXT_PUBLIC_MAP_API_KEY;
  
  // State for markers, active marker, and loading status
  const [markers, setMarkers] = useState([]);
  const [activeMarker, setActiveMarker] = useState(null);

  // Sample addresses for geocoding
  const addressList = [
    { address: "11 W 53rd St, New York, NY 10019", name: "Museum of Modern Art (MoMA)", description: "Renowned Museum with a Vast Collection of Modern Art" },
    { address: "1000 5th Ave, New York, NY 10028", name: "The Metropolitan Museum of Art", description: "One of the Largest and Most Prestigious Art Museums in the World" },
    { address: "1071 5th Ave, New York, NY 10128", name: "Solomon R. Guggenheim Museum", description: "Iconic Frank Lloyd Wright-designed Museum for Modern Art" },
    { address: "107 Suffolk St, New York, NY 10002", name: "The Tenement Museum", description: "Museum Preserving the History of Immigrants in the U.S." },
    { address: "18 Bleecker St, New York, NY 10012", name: "The New Museum", description: "Contemporary Art Museum Focused on New Art and Ideas" },
  ];
  

  // Function to geocode addresses
  const geocodeAddress = async (address) => {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`
    );
    const data = await response.json();
    if (data.status === "OK") {
      const { lat, lng } = data.results[0].geometry.location;
      return { lat, lng };
    } else {
      console.error("Geocoding failed:", data.status);
      return null;
    }
  };

  // Load markers on component mount
  useEffect(() => {
    const loadMarkers = async () => {
      const loadedMarkers = await Promise.all(
        addressList.map(async (marker) => {
          const coords = await geocodeAddress(marker.address);
          return { ...marker, ...(coords || { lat: null, lng: null }) };
        })
      );
      setMarkers(loadedMarkers);
    };

    loadMarkers();
  }, [apiKey]);

  return (
    <>
    <Navbar />
    <div className="mainContainer">
      <Sidebar />
      <div className="app">
        <APIProvider apiKey={apiKey}>
          <div className="map-container">
            <Map
              defaultZoom={13}
              defaultCenter={center}
              gestureHandling={"greedy"}
              disableDefaultUI
            >
              {markers.map((marker, index) => (
                marker.lat && marker.lng ? (
                  <Marker
                    key={index}
                    position={{ lat: marker.lat, lng: marker.lng }}
                    onClick={() => setActiveMarker(marker)}
                  />
                ) : null
              ))}
              {activeMarker && (
                <InfoWindow
                  position={{ lat: activeMarker.lat, lng: activeMarker.lng }}
                  onCloseClick={() => setActiveMarker(null)}
                >
                  <div>
                    <h2 className="font-bold text-lg">{activeMarker.name}</h2>
                    <p className="text-md">{activeMarker.description}</p>
                    <div className="flex items-center gap-2">
                      <img src="assets/image/location-marker.png" className="w-4" />
                      <p className="text-sm">{activeMarker.address}</p>
                    </div>
                  </div>
                </InfoWindow>
              )}
            </Map>
          </div>
        </APIProvider>
      </div>
    </div>
    
    </>
  );
}

export default CustomMap;
