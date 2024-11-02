"use client"; // Ensures this component runs on the client side
import Link from 'next/link';
import React, { useState, useEffect } from "react";
import {
  HiOutlineHeart,
  HiHeart,
  HiOutlineChatBubbleOvalLeftEllipsis,
  HiOutlineBookmark,
  HiBookmark,
} from "react-icons/hi2";
import { useBookmarks } from "../contexts/BookmarkContext"; // Import the context
import { collection, getFirestore, addDoc } from "firebase/firestore"; 
import { initializeApp } from "firebase/app";

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

// PostHeader: Displays user information and post options
const PostHeader = ({ userData }) => (
  <div className="header">
    <div className="left">
      <Link href={`/profile/${userData.username.replace('@','')}`} className="flex items-center gap-2">
        <img src={userData.profilePic} alt="" className="profileImg" />
        <div className="userDetails">
          <div className="name">{userData.name}</div>
          <div className="username">{userData.username}</div>
        </div>
      </Link>
    </div>
  </div>
);

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

// PostContent: Handles both text and image content display
const PostContent = ({ content, postImg, open, setOpen }) => (
  <div className="mainPostContent flex flex-col gap-3">
    {content && (
      <div className="px-4 py-3 text-sm">
        {content}
      </div>
    )}
    {postImg && (
      <img
        src={postImg}
        alt=""
        className="postImage"
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer", transition: "transform 0.3s" }}
      />
    )}
  </div>
);

// PostActions: Interactive buttons section
const PostActions = ({ userData, isLiked, handleLike, likeCount, commentCount, setShowComments }) => {
  const { bookmarkedPosts, addBookmark, removeBookmark } = useBookmarks(); // Use the bookmark context
  const [isSaved, setIsSaved] = useState(false);

  // Check if the post is already bookmarked
  useEffect(() => {
    const isPostBookmarked = bookmarkedPosts.some(post => post.id === userData.id);
    setIsSaved(isPostBookmarked);
  }, [bookmarkedPosts, userData.id]);

  const handleBookmark = () => {
    if (isSaved) {
      removeBookmark(userData.id); // Remove bookmark by post ID
    } else {
      addBookmark(userData); // Add the full post data
    }
    setIsSaved(!isSaved);
  };

  return (
    <div className="postFooter">
      <div className="postActions">
        <div className="left flex items-center gap-4">
          <div className="likeBtn flex items-center gap-1" onClick={handleLike}>
            {isLiked ? <HiHeart className="text-red-500" /> : <HiOutlineHeart />}
            <span>{likeCount > 0 ? likeCount : ''}</span>
          </div>
          <div className="commentBtn flex items-center gap-1" onClick={() => setShowComments(true)}>
            <HiOutlineChatBubbleOvalLeftEllipsis />
            <span>{commentCount > 0 ? commentCount : ''}</span>
          </div>
        </div>
        <div className="right">
          <div className="saveBtn" onClick={handleBookmark}>
            {isSaved ? <HiBookmark className="text-blue-500" /> : <HiOutlineBookmark />}
          </div>
        </div>
      </div>
    </div>
  );
};

// CommentModal: Full-screen comment view with blur overlay
const CommentModal = ({ userData, comments, newComment, setNewComment, handleAddComment, setShowComments }) => (
  <>
    <div 
      className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[1000]"
      onClick={() => setShowComments(false)}
    />
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg w-[900px] h-[600px] max-w-[90vw] max-h-[90vh] z-[1001] flex">
      <PostModalContent userData={userData} />
      <CommentSection 
        comments={comments}
        newComment={newComment}
        setNewComment={setNewComment}
        handleAddComment={handleAddComment}
      />
    </div>
  </>
);

// PostModalContent: Left side of the comment modal
const PostModalContent = ({ userData }) => (
  <div className="flex-1 border-r border-gray-200 flex flex-col">
    <div className="p-4 border-b border-gray-200">
      <div className="flex items-center gap-2.5">
        <img src={userData.profilePic} alt="" className="w-8 h-8 rounded-full" />
        <div>
          <div className="font-medium">{userData.name}</div>
          <div className="text-xs text-gray-500">{userData.username}</div>
        </div>
      </div>
    </div>
    {userData.content && <div className="p-4">{userData.content}</div>}
    {userData.postImg && (
      <div className="flex-1 overflow-hidden">
        <img src={userData.postImg} alt="" className="w-full h-full object-cover" />
      </div>
    )}
  </div>
);

// CommentSection: Right side of the modal for comments
const CommentSection = ({ comments, newComment, setNewComment, handleAddComment }) => (
  <div className="w-[360px] flex flex-col">
    <div className="flex-1 overflow-y-auto p-4">
      {comments.map(comment => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
    <CommentInput 
      newComment={newComment}
      setNewComment={setNewComment}
      handleAddComment={handleAddComment}
    />
  </div>
);

// CommentItem: Individual comment display component
const CommentItem = ({ comment }) => (
  <div className="mb-4">
    <div className="flex gap-2">
      <img src={comment.avatar} alt="" className="w-8 h-8 rounded-full" />
      <div className="bg-gray-100 p-2 px-3 rounded-2xl flex-1">
        <div className="font-medium">{comment.user}</div>
        <div>{comment.content}</div>
      </div>
    </div>
  </div>
);

// CommentInput: New comment input field
const CommentInput = ({ newComment, setNewComment, handleAddComment }) => (
  <div className="p-4 border-t border-gray-200">
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2">
        <img src="https://t4.ftcdn.net/jpg/01/87/75/15/360_F_187751502_TrPkDYFA1MzKcJO9CWoDi2NgcCWqOCUi.jpg" alt="" className="w-8 h-8 rounded-full" />
        <span className="text-sm font-medium">Philip Tonder</span>
      </div>
      <input
        type="text"
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
        placeholder="Add a comment..."
        className="flex-1 border-none bg-gray-100 rounded-[20px] px-4 py-2"
      />
    </div>
  </div>
);


// Main Post Component: Orchestrates all post functionality
const Post = ({ userData }) => {
  const [open, setOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");


  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      const comment = {
        id: Date.now(),
        user: "John Michael",
        avatar: "https://t4.ftcdn.net/jpg/01/87/75/15/360_F_187751502_TrPkDYFA1MzKcJO9CWoDi2NgcCWqOCUi.jpg",
        content: newComment,
        timestamp: new Date().toISOString(),
      };
      setComments([...comments, comment]);
      setNewComment("");
    }
  };

  return (
    <>
      <div className="postWrapper">
        <PostHeader userData={userData} />
        <PostContent 
          content={userData.content}
          postImg={userData.postImg}
          open={open}
          setOpen={setOpen}
        />
        <PostActions 
          userData={userData}
          isLiked={isLiked}
          handleLike={handleLike}
          likeCount={likeCount}
          commentCount={comments.length}
          setShowComments={setShowComments}
        />
      </div>

      {showComments && (
        <CommentModal 
          userData={userData}
          comments={comments}
          newComment={newComment}
          setNewComment={setNewComment}
          handleAddComment={handleAddComment}
          setShowComments={setShowComments}
        />
      )}
    </>
  );
};

export default Post;
