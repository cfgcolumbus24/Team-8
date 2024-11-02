"use client";
// Essential imports for Next.js routing, React hooks, and UI components
import Link from "next/link";
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from "react";
import { MdSearch, MdClose, MdSettings } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleDown, FaFaceFrown } from "react-icons/fa6";
import { RiQuestionFill } from "react-icons/ri";
import userData from "@/app/UserData";
import { motion } from "framer-motion";
import { useClickOutside } from "@mantine/hooks";

const Navbar = () => {
  // Initialize router and state management
  const router = useRouter();
  const [isFocused, setIsFocused] = useState(false);
  const ref = useClickOutside(() => setIsFocused(false));
  const [searchValue, setSearchValue] = useState("");
  const [ProfileMenu, setProfileMenu] = useState(false);
  const [searchedUser, setSearchedUser] = useState(userData);
  const [searchPanel, setSearchPanel] = useState(false);

  // Function to filter users based on search input
  const searchUsers = (value) => {
    let searchedUser = userData.filter((user) => {
      return user.name.toLowerCase().includes(value.toLowerCase());
    });
    setSearchedUser(
      searchedUser.length === 0 ? [{ error: "User Not Found" }] : searchedUser
    );
  };

  // Event listener to close profile menu when clicking outside
  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!e.target.closest(".userProfile")) {
        setProfileMenu(false);
      }
    });
  }, []);

  return (
    <>
      {/* Main navbar container with background image */}
      <div className="inNavbar" style={{
        backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1694475411899-ebbce0efaf75?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '200px',
        width: '100%',
      }}>
        {/* Logo/Brand section */}
        <Link href="/" className="inLogo" style={{
          display: 'inline-block',
          padding: '10px 20px',
          backgroundColor: 'white',
          borderRadius: '12px',
          color: '#333',
          textDecoration: 'none',
          fontWeight: 'bold',
        }}>
          Lower Manhattan Cultural Council
        </Link>
        
        {/* Desktop Search Section with animation and results */}
        <div ref={ref} className={`inSearch ${isFocused ? "inSearchFocused" : ""}`}>
          {/* Search input wrapper */}
          <div className="inSearchWrapper">
            {/* Search input field with icons */}
            <div className="inSearchIcon">
              <MdSearch className="inIcon" />
            </div>
            <input
              type="text"
              onClick={() => setIsFocused(true)}
              placeholder="Search"
              value={searchValue}
              onFocus={() => setIsFocused(true)}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyUp={(e) => searchUsers(e.target.value)}
              style={{
                background: 'transparent',
                color: '#fff',
              }}
            />
            {/* Clear search input button */}
            <div className={`inSearchCloseBtn ${searchValue.length >= 1 ? "inSearchCloseBtnActive" : ""}`}>
              <MdClose
                className="inIcon"
                onClick={() => {
                  setSearchValue("");
                  setIsFocused(false);
                  setTimeout(() => {
                    setSearchedUser(userData);
                  }, 300);
                }}
                style={{ color: '#fff' }}
              />
            </div>
          </div>

          {/* Animated search results dropdown */}
          <motion.div
            className="searchResult"
            initial={{ y: 30, opacity: 0, pointerEvents: "none" }}
            animate={{
              y: isFocused ? 0 : 30,
              opacity: isFocused ? 1 : 0,
              pointerEvents: isFocused ? "auto" : "none",
            }}
          >
            {/* Map through search results or show error */}
            {isFocused &&
              searchedUser.map((user, index) => {
                if (user.error) {
                  return (
                    <div className="noUserFound" key={index}>
                      <FaFaceFrown style={{ color: '#fff' }} />
                      <h3>Sorry {user.error}</h3>
                    </div>
                  );
                } else {
                  return (
                    <div
                      key={index}
                      className="searchResultItem"
                      onClick={() => {
                        router.push(`/profile/${user.username.replace('@','')}`);
                        setSearchValue("");
                        setIsFocused(false);
                      }}
                    >
                      <div className="userImage">
                        <img src={`${user.profilePic}`} alt="" />
                      </div>
                      <h3>{user.name}</h3>
                    </div>
                  );
                }
              })}
          </motion.div>
        </div>

        {/* Right side navigation options */}
        <div className="inNavRightOptions">
          {/* Mobile search button */}
          <div className="mobileSearchBtn" onClick={() => setSearchPanel(true)}>
            <MdSearch style={{ color: '#fff' }} />
          </div>
          {/* User profile section with dropdown */}
          <div className="userProfile" style={{ marginRight: '10px' }}>
            {/* Profile image */}
            <div
              className="userImage"
              onClick={() => setProfileMenu(!ProfileMenu)}
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src={"/assets/image/avatar_default.jpg"}
                alt="User Profile Pic"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            
            {/* Animated profile dropdown menu */}
            <motion.div
              className="userProfileDropdown"
              initial={{ y: 40, opacity: 0, pointerEvents: "none" }}
              animate={{
                y: !ProfileMenu ? -30 : [0, 30, 10],
                opacity: ProfileMenu ? 1 : 0,
                pointerEvents: ProfileMenu ? "auto" : "none",
                zIndex: 999999,
              }}
              transition={{ duration: 0.48 }}
            >
              {/* Profile information and links */}
              <div className="profileWrapper">
                <img
                  src={"/assets/image/avatar_default.jpg"}
                  alt="User Profile Pic"
                />
                <div className="profileData">
                  <div className="name">Cece Clementine</div>
                  <Link href="/profile/johndoe" className="seeProfile">See Profile</Link>
                </div>
              </div>
              <div className="linksWrapper">
                <div className="link" onClick={() => window.location.href = '/help'}>
                  <div className="leftSide">
                    <span className="icon">
                      <RiQuestionFill />
                    </span>
                    <span className="name">Help & Support</span>
                  </div>
                  <span className="actionIcon">
                    <FaAngleRight />
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mobile search panel with animation */}
      <motion.div
        className="mobileSearchPanel"
        initial={{ y: "100vh", pointerEvents: "none", display: "none" }}
        animate={{
          display: searchPanel ? "block" : "none",
          y: searchPanel ? 0 : "100vh",
          pointerEvents: searchPanel ? "auto" : "none",
          transition: {
            bounce: 0.23,
            type: "spring",
          },
        }}
      >
        {/* Mobile search panel content */}
        <div className="closeBtn" onClick={() => setSearchPanel(false)}>
          <FaAngleDown style={{ color: '#fff' }} />
        </div>

        {/* Mobile search input */}
        <div className="inMobileSearch">
          <div className="mobileSearchIcon">
            <MdSearch className="inIcon" style={{ color: '#fff' }} />
          </div>
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onKeyUp={(e) => searchUsers(e.target.value)}
            onChange={(e) => setSearchValue(e.target.value)}
            style={{ background: 'transparent', color: '#fff' }}
          />
          {searchValue.length >= 1 && (
            <MdClose
              className="inIcon cursor-pointer"
              onClick={() => {
                setSearchValue("");
                setSearchedUser(userData);
              }}
              style={{ color: '#fff' }}
            />
          )}
        </div>

        {/* Mobile search results */}
        <div className="mobileSearchResult">
          {searchedUser.map((user, index) => {
            if (user.error) {
              return (
                <div className="noUserFound" key={index}>
                  <FaFaceFrown style={{ color: '#fff' }} />
                  <h3 style={{ color: '#fff' }}>Sorry {user.error}</h3>
                </div>
              );
            } else {
              return (
                <div
                  className="mobileSearchItem"
                  key={index}
                  onClick={() => {
                    router.push(`/profile/${user.username}`);
                    setSearchValue("");
                    setSearchPanel(false);
                  }}
                >
                  <div className="profileImage">
                    <img src={`${user.profilePic}`} alt="" />
                  </div>
                  <h3 style={{ color: '#fff' }}>{user.name}</h3>
                </div>
              );
            }
          })}
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
