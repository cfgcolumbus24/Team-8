"use client";

import "./App.css";
import React, { useState, useEffect } from "react";
import { Map, APIProvider, Marker, InfoWindow } from "@vis.gl/react-google-maps";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { collection, getDocs } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "lmcc-team-8.firebaseapp.com",
  projectId: "lmcc-team-8",
  storageBucket: "lmcc-team-8.firebasestorage.app",
  messagingSenderId: "142238046334",
  appId: "1:142238046334:web:7b001884ddb9ebc6f2e02f",
  measurementId: "G-G5796BP05S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const CustomMap = () => {
  const center = {
    lat: 40.72625,
    lng: -74.000222,
  };

  const apiKey = process.env.NEXT_PUBLIC_MAP_API_KEY;
  
  // State for markers, active marker, and loading status
  const [markers, setMarkers] = useState([]);
  const [activeMarker, setActiveMarker] = useState(null);
  const [addressList, setAddressList] = useState([]); // State to hold address data from Firestore


  async function getAllDocuments() {
      const querySnapshot = await getDocs(collection(db, "locations"));
      const documents = [];
      querySnapshot.forEach((doc) => {
          documents.push({ id: doc.id, ...doc.data() });
      });
      console.log("All documents:", documents);
      return documents;
  }


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

  useEffect(() => {
    const loadAddressesAndMarkers = async () => {
      // Step 1: Fetch addresses from Firestore
      const addresses = await getAllDocuments(db);
      setAddressList(addresses);

      // Step 2: Geocode each address and create markers
      const loadedMarkers = await Promise.all(
        addressList.map(async (marker) => {
          const coords = await geocodeAddress(marker.address, apiKey);
          return { ...marker, ...(coords || { lat: null, lng: null }) };
        })
      );

      setMarkers(loadedMarkers); // Update markers with geocoded coordinates
    };

    loadAddressesAndMarkers();
  }, [db, apiKey]);

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
