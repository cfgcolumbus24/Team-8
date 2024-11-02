"use client";
import React, { useState } from "react";
import MultiSelectDropdown from "../components/MultiSelectDropdown";
import { collection, getFirestore, addDoc } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";
import { useRouter } from "next/navigation";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
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


const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAlumni, setAlumni] = useState(false);
  const [openToWork, setOpenToWork] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedMediums, setSelectedMediums] = useState([]);
  const [selectedPronouns, setSelectedPronouns] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");


  const router = useRouter();
  async function makeUser() {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
        username: username,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  const art_options = [
    { value: "Painting", label: "Painting" },
    { value: "Drawing", label: "Drawing" },
    { value: "Sculpture", label: "Sculpture" },
    { value: "Photography", label: "Photography" },
    { value: "Printmaking", label: "Printmaking" },
    { value: "Ceramics", label: "Ceramics" },
    { value: "Glass Art", label: "Glass Art" },
    { value: "Textile Art", label: "Textile Art" },
    { value: "Digital Art", label: "Digital Art" },
    { value: "Mixed Media", label: "Mixed Media" },
    { value: "Collage", label: "Collage" },
    { value: "Installation Art", label: "Installation Art" },
    { value: "Performance Art", label: "Performance Art" },
    { value: "Mosaic", label: "Mosaic" },
    { value: "Street Art", label: "Street Art" },
    { value: "Calligraphy", label: "Calligraphy" },
    { value: "Graffiti", label: "Graffiti" },
    { value: "Land Art", label: "Land Art" },
    { value: "Encaustic", label: "Encaustic" },
    { value: "Woodworking", label: "Woodworking" },
    { value: "Metalworking", label: "Metalworking" },
    { value: "Fiber Art", label: "Fiber Art" },
    { value: "Tattoo Art", label: "Tattoo Art" },
    { value: "Origami", label: "Origami" },
    { value: "Animation", label: "Animation" },
    { value: "Virtual Reality Art", label: "Virtual Reality Art" },
  ];

  const pronoun_options = [
    { value: "He/Him", label: "He/Him" },
    { value: "She/Her", label: "She/Her" },
    { value: "They/Them", label: "They/Them" },
    { value: "Ask Me!", label: "Ask Me!" },
  ];


  const handleInterestsChange = (selectedOptions) => {
    setSelectedInterests(selectedOptions);
  };

  const handleMediumsChange = (selectedOptions) => {
    setSelectedMediums(selectedOptions);
  };

  const handlePronounsChange = (selectedOptions) => {
    setSelectedPronouns(selectedOptions);
  };

  const handleCreateAccount = (e) => {
    // this is where we will send the data to the server
    e.preventDefault();
    console.log("Username:", username);
    console.log("Pronouns:", selectedPronouns);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Is Alumni:", isAlumni);
    console.log("Mediums:", selectedMediums);
    console.log("Open to Work:", openToWork);
    console.log("Interests:", selectedInterests);
    sessionStorage.setItem("firstName", firstName); // Store the first name in sessionStorage
    sessionStorage.setItem("lastName", lastName); // Store the last name in sessionStorage
    sessionStorage.setItem("username", username); // Store the username in sessionStorage
    makeUser();
    router.push("/Home");
  };

  return (
    <>
    <div className="flex">
      <div className="w-384">
        <button className="bg-primary w-full hover:bg-blue-700 text-white font-bold py-2 px-4"><a href="/welcome">Back</a></button>
        <div className="p-6 border">
          <h2 className="text-2xl font-bold mb-4 create-account-title">Create Account</h2>
          <form onSubmit={handleCreateAccount}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 create-account-label">Username:{" "}</label>
              <input
                type="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-3 py-2 border rounded-md create-account-input"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 create-account-label">First Name:{" "}</label>
              <input
                type="firstname"
                id="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md create-account-input"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1 create-account-label">Last Name:{" "}</label>
              <input
                type="lastname"
                id="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-3 py-2 border rounded-md create-account-input"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium mb-1 create-account-label"
              >
                Email:
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md create-account-input"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-1 create-account-label"
              >
                Password:
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-md create-account-input"
                required
              />
            </div>
            <div className="mb-4 flex items-center">
              <label
                htmlFor="isAlumni"
                className="text-sm font-medium mr-2 create-account-label"
              >
                Are you an Alumni?
              </label>
              <input
                type="checkbox"
                id="isAlumni"
                checked={isAlumni}
                onChange={(e) => setAlumni(e.target.checked)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="selectInterests"
                className="text-sm font-medium mr-2 create-account-label"
              >
                Interests
              </label>
              <MultiSelectDropdown
                options={art_options}
                onChange={handleInterestsChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="selectMediums"
                className="text-sm font-medium mr-2 create-account-label"
              >
                Mediums you work in
              </label>
              <MultiSelectDropdown
                options={art_options}
                onChange={handleMediumsChange}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="selectPronouns"
                className="text-sm font-medium mr-2 create-account-label"
              >
                Pronouns
              </label>
              <MultiSelectDropdown
                options={pronoun_options}
                onChange={handlePronounsChange}
              />
            </div>
            <div className="mb-4 flex items-center">
              <label
                htmlFor="openToWork"
                className="text-sm font-medium mr-2 create-account-label"
              >
                Open to Work?
              </label>
              <input
                type="checkbox"
                id="openToWork"
                checked={openToWork}
                onChange={(e) => setOpenToWork(e.target.checked)}
              />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: "rgb(29, 188, 238)",
                color: "white",
                borderRadius: "0.375rem",
              }}
              onMouseDown={(e) => {
                e.target.classList.add("active");
                e.target.style.backgroundColor = "rgb(28, 123, 237)";
              }}
              onMouseUp={(e) => {
                e.target.classList.remove("active");
                e.target.style.backgroundColor = "rgb(29, 188, 238";
              }}
              className="w-full py-3 mt-2 rounded-sm"
            >
              {/* <a href="/Home"> */}
              
               <a>
                Create Account
              </a>
            </button>
          </form>
        </div>
      </div>
      <div className="flex flex-col gap-8 flex-1 justify-center items-center bg-[url('/assets/image/create-account-bg.jpg')] bg-cover bg-center bg-gray-700/75 bg-blend-overlay w-screen h-screen overflow-hidden p-48">
        <img src="assets/image/lmcc-50-years-logo.png" className="h-36 auto" />
        <p className="text-white">Founded as Lower Manhattan Cultural Council, LMCC serves, connects, and makes space for artists and community. Since 1973, LMCC has been the champion for independent artists in New York City and the cultural life force of Lower Manhattan.</p>
        <div className="flex">
          <a href="https://www.facebook.com/LMCCNYC/" target="_blank"><img src="assets/image/facebook.svg" /></a>
          <a href="https://x.com/LMCC?mx=2" target="_blank"><img src="assets/image/twitter.svg" /></a>
          <a href="https://www.instagram.com/lmcc_nyc/" target="_blank"><img src="assets/image/instagram.svg" /></a>
          <a href="https://www.linkedin.com/company/lower-manhattan-cultural-council/" target="_blank"><img src="assets/image/linkedin.svg" /></a>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex gap-4">
            <div className="flex gap-2 items-center">
              <img src="assets/image/phone.png" />
              <p className="text-white">(212) 219-9401</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src="assets/image/email.png" />
              <p className="text-white">info@lmcc.net</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <img src="assets/image/map.png" />
            <p className="text-white">125 Maiden Lane, 2nd Floor, New York, NY 10038</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default CreateAccount;
