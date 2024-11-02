"use client";
import React, { useState, useEffect } from "react";
import { MdSettings } from "react-icons/md";
import {
  FaBell,
  FaBookmark,
  FaBrush,
  FaCompass,
  FaEnvelope,
  FaHome,
} from "react-icons/fa";
import Link from "next/link";

const links = [
  { name: "Forum", icon: <FaHome />, path: "/" },
  { name: "Explore", icon: <FaCompass />, path: "/map" },
  { name: "Connect", icon: <FaBell />, path: "/connections" },
  { name: "Listings", icon: <FaEnvelope />, path: "/listings" },
  { name: "Bookmarks", icon: <FaBookmark />, path: "/bookmark" },
  { name: "Theme", icon: <FaBrush />, path: "/theme" },
];

const Sidebar = ({ onCreatePost }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState("");


  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#000" : "#fff";
    document.body.style.color = isDarkMode ? "#fff" : "#000";

    const storedUsername = sessionStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername); // Set the username in state
    }
  }, [isDarkMode]);

  const toggleTheme = (theme) => {
    setIsDarkMode(theme === "dark");
    setIsModalOpen(false);
  };

  return (
    <div className="leftSection">
      <Link href="/profile/john michael" className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-lg">
        <img src="https://t4.ftcdn.net/jpg/01/87/75/15/360_F_187751502_TrPkDYFA1MzKcJO9CWoDi2NgcCWqOCUi.jpg" alt="User Avatar" className="w-8 h-8 rounded-full" />
        <div>
          <div className="font-medium">{username}</div>
          <div className="text-xs text-gray-500">@{username}</div>
        </div>
      </Link>
        <div className="userDetails">
          <Link href="/Profile" className="name">
            {username}
          </Link>
          <div className="username">@{username}</div>
        </div>
      </div>
      <nav className="inSidebar">
        {links.map((link, index) => (
          link.name === "Theme" ? (
            <div
              className="link"
              key={index}
              onClick={() => setIsModalOpen(true)}
              style={{ cursor: "pointer" }}
            >
              <span className="icon">{link.icon}</span>
              <h3>{link.name}</h3>
            </div>
          ) : (
            <Link href={link.path} key={index}>
              <div className="link">
                <div className="icon">{link.icon}</div>
                <h3>{link.name}</h3>
              </div>
            </Link>
          )
        ))}
      </nav>

      <label
        className="inBtn sidebarCreateBtn"
        onClick={onCreatePost}
        style={{ cursor: 'pointer' }}
      >
        Create Post
      </label>

      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.3)",
            }}
          >
            <h3>Select Theme</h3>
            <button
              onClick={() => toggleTheme("light")}
              style={{
                margin: "10px",
                padding: "10px 20px",
                backgroundColor: "#f0f0f0",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Light Mode
            </button>
            <button
              onClick={() => toggleTheme("dark")}
              style={{
                margin: "10px",
                padding: "10px 20px",
                backgroundColor: "#333",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Dark Mode
            </button>
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                display: "block",
                marginTop: "10px",
                padding: "10px",
                backgroundColor: "#ddd",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
