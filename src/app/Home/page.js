"use client";
import React, { useState, useRef } from "react";
import { MdSettings, MdInsertPhoto, MdEmojiEmotions } from "react-icons/md";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { useClickOutside } from "@mantine/hooks";
import { useEffect } from "react";
import userData from "@/app/UserData";
import Post from "@/app/components/Post";
import Sidebar from "@/app/components/Sidebar";
import Navbar from "@/app/components/Navbar";

import { collection, getFirestore, addDoc } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
  apiKey: "",
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

async function makePost() {
  try {
    const docRef = await addDoc(collection(db, "post"), {
      content: content,
      image: image
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [allPosts, setAllPosts] = useState(userData);
  const [postContent, setPostContent] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [username, setUsername] = useState("");

  const fileInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    const storedUsername = sessionStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername); // Set the username in state
    }
    }, []);

  const createNewPost = () => {
    if (!postContent.trim()) return;

    const newPost = {
      id: Date.now(),
      name: "John Michael",
      username: "@johnmichael",
      profilePic: "https://t4.ftcdn.net/jpg/01/87/75/15/360_F_187751502_TrPkDYFA1MzKcJO9CWoDi2NgcCWqOCUi.jpg",
      postImg: selectedImage,
      content: postContent
    };

    setAllPosts(prevPosts => [newPost, ...prevPosts]);
    setPostContent("");
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <>
    <Navbar />
    <div className="mainContainer" style={{ position: 'relative' }}>
      <Sidebar onCreatePost={() => setIsModalOpen(true)} />
      <div className="mainSection">
        {/* Stories section remains the same */}

        <div className="createPostWidget" onClick={() => setIsModalOpen(true)}>
          <div className="createInput" style={{ display: 'flex', alignItems: 'center', gap: '10px', width: '100%', padding: '15px' }}>
            <img 
              src="https://t4.ftcdn.net/jpg/01/87/75/15/360_F_187751502_TrPkDYFA1MzKcJO9CWoDi2NgcCWqOCUi.jpg" 
              alt="" 
              style={{ width: '40px', height: '40px', borderRadius: '50%' }}
            />
            <div style={{ 
              flex: 1, 
              padding: '8px 12px', 
              backgroundColor: '#f0f2f5', 
              borderRadius: '20px',
              cursor: 'pointer' 
            }}>
              Share your ideas!
            </div>
          </div>
        </div>

        {isModalOpen && (
          <>
            <div 
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                zIndex: 1000,
                backdropFilter: 'blur(4px)'
              }}
              onClick={() => setIsModalOpen(false)}
            />
            <div 
              style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                backgroundColor: 'white',
                borderRadius: '8px',
                width: '500px',
                maxWidth: '90vw',
                zIndex: 1001,
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
              }}
            >
              <div style={{ padding: '16px', borderBottom: '1px solid #e4e6eb', textAlign: 'center', fontWeight: 'bold' }}>
                Create Post
              </div>
              
              <div style={{ padding: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <img 
                    src="https://t4.ftcdn.net/jpg/01/87/75/15/360_F_187751502_TrPkDYFA1MzKcJO9CWoDi2NgcCWqOCUi.jpg" 
                    alt="" 
                    style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                  />
                  <div>
                    <div style={{ fontWeight: '500' }}>{username}</div>
                    <div style={{ fontSize: '12px', color: '#65676b' }}>@{username}</div>
                  </div>
                </div>

                <textarea
                  placeholder={`What's on your mind, ${username}?`}
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  style={{ 
                    width: '100%',
                    minHeight: '150px',
                    border: 'none',
                    outline: 'none',
                    resize: 'none',
                    fontSize: '14px'
                  }}
                />

                {selectedImage && (
                  <div style={{ position: 'relative', marginTop: '12px' }}>
                    <img 
                      src={selectedImage} 
                      alt="Preview" 
                      style={{ maxHeight: '200px', width: '100%', objectFit: 'cover', borderRadius: '8px' }}
                    />
                    <button 
                      onClick={() => setSelectedImage(null)}
                      style={{ 
                        position: 'absolute', 
                        top: '8px', 
                        right: '8px',
                        background: 'rgba(0,0,0,0.5)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '50%',
                        width: '24px',
                        height: '24px',
                        cursor: 'pointer'
                      }}
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>

              <div style={{ 
                padding: '16px',
                borderTop: '1px solid #e4e6eb',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleImageUpload}
                  accept="image/*"
                  style={{ display: 'none' }}
                />
                <button 
                  onClick={() => fileInputRef.current.click()}
                  style={{ 
                    border: 'none',
                    background: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#65676b'
                  }}
                >
                  <MdInsertPhoto size={24} />
                  Add Photo
                </button>
                <button 
                  onClick={createNewPost}
                  disabled={!postContent.trim()}
                  style={{
                    padding: '8px 24px',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: '#1877f2',
                    color: 'white',
                    cursor: postContent.trim() ? 'pointer' : 'not-allowed',
                    opacity: postContent.trim() ? 1 : 0.6
                  }}
                >
                  Post
                </button>
              </div>
            </div>
          </>
        )}

        {allPosts.map((post, index) => (
          <Post key={post.id || index} userData={post} />
        ))}
      </div>

      {/* Right section remains the same */}
    </div>
    </>
  );
};

export default Page;