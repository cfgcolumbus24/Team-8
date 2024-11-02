"use client";
import React, { useState } from "react";
import { MdSettings, MdInsertPhoto, MdEmojiEmotions } from "react-icons/md";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { useClickOutside } from "@mantine/hooks";
import userData from "@/app/UserData";
import Post from "@/app/components/Post";
import Sidebar from "@/app/components/Sidebar";

import { useRouter } from "next/navigation";
import MultiSelectDropdown from "../components/MultiSelectDropdown";


const CreateAccount = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isAlumni, setAlumni] = useState(false);
    const [openToWork, setOpenToWork] = useState(false);

    const router = useRouter();

    const [selectedInterests, setSelectedInterests] = useState([]);
    const [selectedMediums, setSelectedMediums] = useState([]);

    const handleInterestsChange = (selectedOptions) => {
        setSelectedInterests(selectedOptions);
    };

    const handleMediumsChange = (selectedOptions) => {
        setSelectedMediums(selectedOptions)
    };

    const handleCreateAccount = (e) => {
        e.preventDefault();
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Is Alumni:', isAlumni);
        console.log('Mediums:', selectedMediums);
        console.log('Open to Work:', openToWork);
        console.log('Interests:', selectedInterests);
    };

    return (
        <div className="max-w-sm mx-auto p-6 border create-account-container">
            <h2 className="text-2xl font-bold mb-4 create-account-title">Create Account</h2>
            <form onSubmit={handleCreateAccount}>
                <div className="mb-4">
                    <label className="block text-sm font-medium mb-1 create-account-label">Username: </label>
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
                    <label htmlFor="email" className="block text-sm font-medium mb-1 create-account-label">Email:</label>
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
                    <label htmlFor="password" className="block text-sm font-medium mb-1 create-account-label">Password:</label>
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
                    <label htmlFor="isAlumni" className="text-sm font-medium mr-2 create-account-label">Are you an Alumni?</label>
                    <input
                        type="checkbox"
                        id="isAlumni"
                        checked={isAlumni}
                        onChange={(e) => setAlumni(e.target.checked)}
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="selectInterests" className="text-sm font-medium mr-2 create-account-label">Interests</label>
                    <MultiSelectDropdown onChange={handleInterestsChange} />
                </div>
                <div className="mb-4">
                    <label htmlFor="selectMediums" className="text-sm font-medium mr-2 create-account-label">Mediums you work in</label>
                    <MultiSelectDropdown onChange={handleMediumsChange} />
                </div>
                <div className="mb-4 flex items-center">
                    <label htmlFor="openToWork" className="text-sm font-medium mr-2 create-account-label">Open to Work?</label>
                    <input
                        type="checkbox"
                        id="openToWork"
                        checked={openToWork}
                        onChange={(e) => setOpenToWork(e.target.checked)}
                    />
                </div>
                <button
                    type="submit"
                    style={{ backgroundColor:'rgb(225, 29, 72)', color: 'white', borderRadius: '0.375rem' }}
                    className="w-full py-3 mt-2 create-account-button"
                    onMouseDown={(e) => e.target.classList.add('active')}
                    onMouseUp={(e) => e.target.classList.remove('active')}
                >
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default CreateAccount;
