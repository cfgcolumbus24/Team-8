"use client";

import "./App.css";
import React, { useState, useEffect } from "react";
import { Map, APIProvider, Marker, InfoWindow } from "@vis.gl/react-google-maps";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "lmcc-team-8.firebaseapp.com",
  projectId: "lmcc-team-8",
  storageBucket: "lmcc-team-8.firebasestorage.app",
  messagingSenderId: "142238046334",
  appId: "1:142238046334:web:7b001884ddb9ebc6f2e02f",
  measurementId: "G-G5796BP05S"// Create a unique set of tags from markers for filtering
};

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

  const addressList = [
    { 
      address: "1000 5th Ave, New York, NY 10028", 
      name: "The Metropolitan Museum of Art", 
      description: "A magnificent cultural treasure trove featuring breathtaking artworks from across the globe",
      tags: ["exquisite", "educational", "diverse", "historic"] 
    },
    { 
      address: "11 W 53rd St, New York, NY 10019", 
      name: "The Museum of Modern Art", 
      description: "A dynamic hub for innovative and contemporary art, showcasing astonishing pieces that challenge perception",
      tags: ["thought-provoking", "inspiring", "interactive", "iconic"] 
    },
    { 
      address: "1071 5th Ave, New York, NY 10128", 
      name: "The Guggenheim Museum", 
      description: "An architecturally stunning venue, renowned for its extraordinary collection of modern masterpieces",
      tags: ["unique", "elegant", "immersive", "timeless"] 
    },
    { 
      address: "99 Gansevoort St, New York, NY 10014", 
      name: "The Whitney Museum of American Art", 
      description: "A vibrant celebration of American art, emphasizing living artists and compelling narratives",
      tags: ["exciting", "inclusive", "culturally rich", "engaging"] 
    },
    { 
      address: "1 E 70th St, New York, NY 10021", 
      name: "The Frick Collection", 
      description: "A charming and intimate museum displaying exquisite Old Master paintings in a refined mansion setting",
      tags: ["elegant", "cozy", "historic", "sophisticated"] 
    },
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

  useEffect(() => {
    const loadAddressesAndMarkers = async () => {
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

  const [selectedTags, setSelectedTags] = useState([]);

  // Create a unique set of tags from markers for filtering
  const tagsSet = new Set(markers.flatMap(marker => marker.tags));
  const tags = Array.from(tagsSet);

  // Filter markers based on selected tags
  const filteredMarkers = markers.filter(marker => 
    selectedTags.length === 0 || 
    marker.tags.some(tag => selectedTags.includes(tag))
  );  

  return (
    <>
    <Navbar />
    <div className="mainContainer">
      <Sidebar />
      <div className="app">
        <div className="mb-4">
          {tags.map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTags(prev => 
                prev.includes(tag) 
                  ? prev.filter(t => t !== tag) // Remove tag if it's already selected
                  : [...prev, tag] // Add tag if not selected
              )}
              className={`px-3 py-1 rounded-full text-sm transition-colors ${
                selectedTags.includes(tag) 
                  ? 'bg-lightBlue text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <APIProvider apiKey={apiKey}>
          <div className="map-container">
            <Map
              defaultZoom={13}
              defaultCenter={center}
              gestureHandling={"greedy"}
              disableDefaultUI
            >
              {/* Render markers on the map */}
              {filteredMarkers.map((marker, index) => (
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
                    <div className="tags mt-2">
                      {activeMarker.tags && activeMarker.tags.map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">{tag}</span>
                      ))}
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
