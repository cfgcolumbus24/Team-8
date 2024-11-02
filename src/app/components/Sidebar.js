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
  {
    name: "Forum",
    icon: <FaHome />,
    path: "/",
  },
  {
    name: "Explore",
    icon: <FaCompass />,
    path: "/map"
  },
  {
    name: "Connect",
    icon: <FaBell />,
    path: "/connections"
  },
  {
    name: "Listings",
    icon: <FaEnvelope />,
    path: "/listings"
  },
  {
    name: "Bookmarks",
    icon: <FaBookmark />,
    path: "/bookmark"
  },
  {
    name: "Theme",
    icon: <FaBrush />,
    path: "/theme"
  },
  {
    name: "Settings",
    icon: <MdSettings />,
    path: "/settings"
  },
];

const Sidebar = ({ onCreatePost }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? "#000" : "#fff";
    document.body.style.color = isDarkMode ? "#fff" : "#000";
  }, [isDarkMode]);

  const toggleTheme = (theme) => {
    setIsDarkMode(theme === "dark");
    setIsModalOpen(false);
  };

  return (
    <div className="leftSection">
      <div className="userProfileWidget">
        <div className="profileImage">
          <img src={"/assets/image/avatar_default.jpg"} alt="" />
        </div>
        <div className="userDetails">
          <Link href="/Profile" className="name">
            John Doe
          </Link>
          <div className="username">@johndoe</div>
        </div>
      </div>

      <nav className="inSidebar">
        {links.map((link, index) => {
          if (link.name === "Theme") {
            return (
              <div
                className="link"
                key={index}
                onClick={() => setIsModalOpen(true)}
                style={{ cursor: "pointer" }}
              >
                <span className="icon">{link.icon}</span>
                <h3>{link.name}</h3>
              </div>
            );
          }
          return (
            <Link href={link.path} key={index}>
              <div className="link">
                <div className="icon">{link.icon}</div>
                <h3>{link.name}</h3>
              </div>
            </Link>
          );
        })}
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
