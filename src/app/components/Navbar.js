"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdSearch, MdClose } from "react-icons/md";
import { FaAngleRight, FaAngleDown, FaFaceFrown } from "react-icons/fa6";
import { RiQuestionFill } from "react-icons/ri";
import userData from "@/app/UserData";
import { motion } from "framer-motion";
import { useClickOutside } from "@mantine/hooks";

const Navbar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useClickOutside(() => setIsFocused(false));
  const [searchValue, setSearchValue] = useState("");
  const [ProfileMenu, setProfileMenu] = useState(false);
  const [searchedUser, setSearchedUser] = useState(userData);
  const [searchPanel, setSearchPanel] = useState(false);
  const [firstName, setFirstNames] = useState();
  const [lastName, setLastNames] = useState();

  const searchUsers = (value) => {
    const filteredUsers = userData.filter((user) =>
      firstName.toLowerCase().includes(value.toLowerCase())
    );
    setSearchedUser(
      filteredUsers.length === 0 ? [{ error: "User Not Found" }] : filteredUsers
    );
  };

  useEffect(() => {
    window.addEventListener("click", (e) => {
      if (!e.target.closest(".userProfile")) {
        setProfileMenu(false);
      }

      const storedUsername = sessionStorage.getItem("username");
      const storedFirstName = sessionStorage.getItem("firstName");
      const storedLastName = sessionStorage.getItem("lastName");
      if (storedUsername) {
        setUsername(storedUsername); // Set the username in state
      }
      if (storedFirstName && storedLastName) {
        setFirstName(storedFirstName);
        setLastName(storedLastName);
      }
    });
  }, []);

  const [username, setUsername] = useState("");


  return (
    <>
      <div
        className="inNavbar"
        style={{
          backgroundImage: 'url("https://plus.unsplash.com/premium_photo-1694475411899-ebbce0efaf75?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          height: '200px',
          width: '100%',
        }}
      >
        <Link
          href="/"
          className="inLogo"
          style={{
            display: 'inline-block',
            padding: '10px 20px',
            backgroundColor: 'white',
            borderRadius: '12px',
            color: '#333',
            textDecoration: 'none',
            fontWeight: 'bold',
          }}
        >
          Lower Manhattan Cultural Council
        </Link>
        <div ref={ref} className={`inSearch ${isFocused ? "inSearchFocused" : ""}`}>
          <div className="inSearchWrapper">
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
            <div
              className={`inSearchCloseBtn ${
                searchValue.length >= 1 ? "inSearchCloseBtnActive" : ""
              }`}
            >
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

          <motion.div
            className="searchResult"
            initial={{ y: 30, opacity: 0, pointerEvents: "none" }}
            animate={{
              y: isFocused ? 0 : 30,
              opacity: isFocused ? 1 : 0,
              pointerEvents: isFocused ? "auto" : "none",
            }}
          >
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
                      onClick={() => setSearchValue(firstName)}
                    >
                      <div className="userImage">
                        <img src={`${user.profilePic}`} alt="" />
                      </div>
                      <h3>{username}</h3>
                    </div>
                  );
                }
              })}
          </motion.div>
        </div>
        <div className="inNavRightOptions">
          <div className="mobileSearchBtn" onClick={() => setSearchPanel(true)}>
            <MdSearch style={{ color: '#fff' }} />
          </div>
          <div className="userProfile" style={{ marginRight: '10px' }}>
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
                src="https://t4.ftcdn.net/jpg/01/87/75/15/360_F_187751502_TrPkDYFA1MzKcJO9CWoDi2NgcCWqOCUi.jpg"
                alt="User Profile Pic"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>
            <motion.div
              className="userProfileDropdown"
              initial={{ y: 40, opacity: 0, pointerEvents: "none" }}
              animate={{
                y: ProfileMenu ? 0 : -30,
                opacity: ProfileMenu ? 1 : 0,
                pointerEvents: ProfileMenu ? "auto" : "none",
                zIndex: 999999,
              }}
              transition={{ duration: 0.48 }}
            >
              <div className="profileWrapper">
                <img
                  src="https://t4.ftcdn.net/jpg/01/87/75/15/360_F_187751502_TrPkDYFA1MzKcJO9CWoDi2NgcCWqOCUi.jpg"
                  alt="User Profile Pic"
                />
                <div className="profileData">
                  <div className="name">{username}</div>
                  <Link href={`/profile/${username}`} className="seeProfile">See Profile</Link>
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
        <div className="closeBtn" onClick={() => setSearchPanel(false)}>
          <FaAngleDown style={{ color: '#fff' }} />
        </div>

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
                    setSearchValue(firstName);
                    setSearchPanel(false);
                  }}
                >
                  <div className="profileImage">
                    <img src={`${user.profilePic}`} alt="" />
                  </div>
                  <h3 style={{ color: '#fff' }}>{username}</h3>
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

