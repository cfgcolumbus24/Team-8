"use client"; // Ensures this context is a client component

import React, { createContext, useContext, useState } from "react";

const BookmarkContext = createContext();

export const BookmarkProvider = ({ children }) => {
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);

  const addBookmark = (post) => {
    setBookmarkedPosts((prev) => [...prev, post]);
  };

  const removeBookmark = (postId) => {
    setBookmarkedPosts((prev) => prev.filter((post) => post.id !== postId));
  };

  return (
    <BookmarkContext.Provider value={{ bookmarkedPosts, addBookmark, removeBookmark }}>
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarkContext);
  if (!context) {
    throw new Error("useBookmarks must be used within a BookmarkProvider");
  }
  return context;
};
