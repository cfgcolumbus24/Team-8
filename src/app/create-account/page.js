"use client";
import React, { useState } from "react";
import MultiSelectDropdown from "../components/MultiSelectDropdown";

const CreateAccount = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAlumni, setAlumni] = useState(false);
  const [openToWork, setOpenToWork] = useState(false);
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedMediums, setSelectedMediums] = useState([]);
  const [selectedPronouns, setSelectedPronouns] = useState([]);

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
    // this is wehre we will send the data to the server
    e.preventDefault();
    console.log("Username:", username);
    console.log("Pronouns:", selectedPronouns);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Is Alumni:", isAlumni);
    console.log("Mediums:", selectedMediums);
    console.log("Open to Work:", openToWork);
    console.log("Interests:", selectedInterests);
  };

  return (
    <>
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"><a href="/welcome">Go to Welcome</a></button>
    <div className="max-w-sm mx-auto p-6 border create-account-container">
      <h2 className="text-2xl font-bold mb-4 create-account-title">
        Create Account
      </h2>
      <form onSubmit={handleCreateAccount}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1 create-account-label">
            Username:{" "}
          </label>
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
            backgroundColor: "rgb(225, 29, 72)",
            color: "white",
            borderRadius: "0.375rem",
          }}
          className="w-full py-3 mt-2 create-account-button"
          onMouseDown={(e) => {
            e.target.classList.add("active");
            e.target.style.backgroundColor = "rgb(200, 0, 50)";
          }}
          onMouseUp={(e) => {
            e.target.classList.remove("active");
            e.target.style.backgroundColor = "rgb(225, 29, 72)";
          }}
        >
          <a href="/Home">
            Create Account
          </a>
        </button>
      </form>
    </div>
    </>
  );
};

export default CreateAccount;
