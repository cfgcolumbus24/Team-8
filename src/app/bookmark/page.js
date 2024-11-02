"use client"; 

import React from "react";
import { useBookmarks } from "../contexts/BookmarkContext";
import Post from "@/app/components/Post"; 
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";

const BookmarkPage = () => {
  const { bookmarkedPosts } = useBookmarks();

  return (
    <>
      <Navbar />
      <div className="mainContainer" style={{ position: 'relative' }}>
        <Sidebar />
        <div className="mainSection">
          <h1 style={{ textAlign: 'center', fontWeight: 'bold', margin: '20px 0' }}>
            Bookmarked Posts
          </h1>
          {bookmarkedPosts.length > 0 ? (
            bookmarkedPosts.map((post) => <Post key={post.id} userData={post} />)
          ) : (
            <p style={{ textAlign: 'center' }}>No bookmarks yet.</p>
          )}
        </div>
      </div>
    </>
  );
};

export default BookmarkPage;