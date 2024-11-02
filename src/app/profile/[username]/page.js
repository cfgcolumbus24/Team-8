"use client";

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore"
import { initializeApp } from "firebase/app"
import userData from '@/app/UserData';



const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_KEY,
  authDomain: "lmcc-team-8.firebaseapp.com",
  projectId: "lmcc-team-8",
  storageBucket: "lmcc-team-8.firebasestorage.app",
  messagingSenderId: "142238046334",
  appId: "1:142238046334:web:7b001884ddb9ebc6f2e02f",
  measurementId: "G-G5796BP05S"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const UserProfile = () => {
  const params = useParams()
  const para_username = params.username

  const [currentUser, setCurrentUser] = useState({
    name: 'John Michael',
    username: '@johnmichael',
    profilePic: "https://t4.ftcdn.net/jpg/01/87/75/15/360_F_187751502_TrPkDYFA1MzKcJO9CWoDi2NgcCWqOCUi.jpg",
    status: "active",
    bio: "Contemporary Dancer | Coffee Enthusiast",
    tags: ["They/Them", "Ceramics", "Pottery", "Dance", "Coffee"],
    aboutMe: "Coffee enthusiast. Dancing my way through life. Pottery lover, shaping clay and moments. Finding joy in the simple and the spontaneous. Always chasing creativity and good vibes. Here for the art, movement, and a perfect brew.",
    posts: [],
    favoriteArtwork: [
      {
        title: "Starry Night",
        artist: "Vincent van Gogh",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/640px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
        year: "1889"
      }
    ]
  });

  useEffect(() => {
    const fetchUserData = async () => {
      // First check Firebase
      const usersCollection = collection(db, "users");
      const q = query(usersCollection, where("username", "==", para_username));
      const querySnapshot = await getDocs(q);
  
      // Then check local UserData
      const localUserMatch = userData.find(user => user.username === `@${para_username}`);
  
      if (!querySnapshot.empty) {
        const userDoc = querySnapshot.docs[0].data();
        setCurrentUser(prevUser => ({
          ...prevUser,
          name: `${userDoc.firstName} ${userDoc.lastName}`,
          username: userDoc.username,
        }));
      } else if (localUserMatch) {
        setCurrentUser(localUserMatch);
      }
    };
  
    if (para_username) {
      fetchUserData();
    }
  }, [para_username]);

  const getStatusBadge = (status) => {
    const statusStyles = {
      active: "w-3 h-3 rounded-full bg-green-500",
      inactive: "w-3 h-3 rounded-full bg-red-500",
      disabled: "w-3 h-3 rounded-full bg-gray-400 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gray-600 after:top-1/2 after:-rotate-45"
    }
    return <div className={statusStyles[status || 'inactive']}></div>
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-6">
          <img
            src={currentUser.profilePic}
            alt={currentUser.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-100"
          />
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold">{currentUser.name}</h1>
              {getStatusBadge(currentUser.status)}
            </div>
            <p className="text-gray-600">{currentUser.username}</p>
            <p className="mt-2 text-gray-700">{currentUser.bio}</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-3">Tags</h2>
        <div className="flex flex-wrap gap-2">
          {currentUser.tags && currentUser.tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-3">About Me</h2>
        <p className="text-gray-700">{currentUser.aboutMe}</p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-3">Posts</h2>
        <div className="grid grid-cols-2 gap-4">
          {currentUser.postImg && (
            <div className="rounded-lg overflow-hidden">
              <img src={currentUser.postImg} alt="Post" className="w-full h-64 object-cover"/>
            </div>
          )}
        </div>
      </div>

      {currentUser.favoriteArtwork && currentUser.favoriteArtwork.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-3">Favorite Artwork</h2>
          <div className="grid grid-cols-2 gap-4">
            {currentUser.favoriteArtwork.map((artwork, index) => (
              <div key={index} className="rounded-lg overflow-hidden shadow">
                <img src={artwork.image} alt={artwork.title} className="w-full h-48 object-cover"/>
                <div className="p-4">
                  <h3 className="font-semibold">{artwork.title}</h3>
                  <p className="text-sm text-gray-600">{artwork.artist} ({artwork.year})</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default UserProfile