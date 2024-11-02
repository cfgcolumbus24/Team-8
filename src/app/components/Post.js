import React, { useState } from "react";
import { FaEllipsisH } from "react-icons/fa";
import {
  HiOutlineHeart,
  HiHeart,
  HiOutlineChatBubbleOvalLeftEllipsis,
  HiOutlineBookmark,
  HiBookmark,
} from "react-icons/hi2";
import { HiOutlineShare } from "react-icons/hi";
import { motion } from "framer-motion";

const Post = ({ userData }) => {
  const [open, setOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
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
        user: "Jhon Doe",
        avatar: "/assets/image/avatar_default.jpg",
        content: newComment,
        timestamp: new Date().toISOString()
      };
      setComments([...comments, comment]);
      setNewComment("");
    }
  };

  return (
    <>
      <div className="postWrapper">
        <div className="header">
          <div className="left">
            <img src={userData.profilePic} alt="" className="profileImg" />
            <div className="userDetails">
              <div className="name">{userData.name}</div>
              <div className="username">{userData.username}</div>
            </div>
          </div>
          <div className="right">
            <div className="option">
              <FaEllipsisH />
            </div>
          </div>
        </div>
        <div className="mainPostContent" style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {userData.content && (
            <div style={{ padding: '12px 16px', fontSize: '14px' }}>
              {userData.content}
            </div>
          )}
          {userData.postImg && (
            <motion.img
              src={userData.postImg}
              alt=""
              className="postImage"
              onClick={() => setOpen(!open)}
              animate={{ scale: open ? 2 : 1 }}
            />
          )}
        </div>
        <div className="postFooter">
          <div className="postActions">
            <div className="left">
              <div className="likeBtn" onClick={handleLike} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                {isLiked ? <HiHeart style={{ color: "red" }} /> : <HiOutlineHeart />}
                <span>{likeCount > 0 ? likeCount : ''}</span>
              </div>
              <div className="commentBtn" onClick={() => setShowComments(true)} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                <HiOutlineChatBubbleOvalLeftEllipsis />
                <span>{comments.length > 0 ? comments.length : ''}</span>
              </div>
              <div className="shareBtn">
                <HiOutlineShare />
              </div>
            </div>
            <div className="right">
              <div className="saveBtn" onClick={() => setIsSaved(!isSaved)}>
                {isSaved ? <HiBookmark /> : <HiOutlineBookmark />}
              </div>
            </div>
          </div>
        </div>
      </div>

      {showComments && (
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
            onClick={() => setShowComments(false)}
          />
          <div 
            style={{
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              backgroundColor: 'white',
              borderRadius: '8px',
              width: '900px',
              height: '600px',
              maxWidth: '90vw',
              maxHeight: '90vh',
              zIndex: 1001,
              display: 'flex'
            }}
          >
            <div style={{ flex: '1', borderRight: '1px solid #e4e6eb', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '16px', borderBottom: '1px solid #e4e6eb' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img src={userData.profilePic} alt="" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
                  <div>
                    <div style={{ fontWeight: '500' }}>{userData.name}</div>
                    <div style={{ fontSize: '12px', color: '#65676b' }}>{userData.username}</div>
                  </div>
                </div>
              </div>
              {userData.content && (
                <div style={{ padding: '16px' }}>
                  {userData.content}
                </div>
              )}
              {userData.postImg && (
                <div style={{ flex: 1, overflow: 'hidden' }}>
                  <img src={userData.postImg} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              )}
            </div>
            
            <div style={{ width: '360px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ flex: 1, overflowY: 'auto', padding: '16px' }}>
                {comments.map(comment => (
                  <div key={comment.id} style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <img src={comment.avatar} alt="" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
                      <div style={{ backgroundColor: '#f0f2f5', padding: '8px 12px', borderRadius: '18px', flex: 1 }}>
                        <div style={{ fontWeight: '500' }}>{comment.user}</div>
                        <div>{comment.content}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ padding: '16px', borderTop: '1px solid #e4e6eb' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <img src="/assets/image/avatar_default.jpg" alt="" style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAddComment()}
                    placeholder="Add a comment..."
                    style={{
                      flex: 1,
                      border: 'none',
                      backgroundColor: '#f0f2f5',
                      borderRadius: '20px',
                      padding: '8px 16px'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Post;
