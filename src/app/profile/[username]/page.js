'use client'

import { useParams } from 'next/navigation'
import userData from '../../UserData'

const UserProfile = () => {
  const params = useParams()
  const username = params.username
  
  // Find the matching user from UserData array
  const currentUser = userData.find(user => 
    user.username.replace('@', '') === username
  ) || {
    name: 'User Not Found',
    username: username,
    profilePic: "/assets/image/avatar_default.jpg",
    status: "inactive",
    bio: "Profile not available",
    tags: [],
    aboutMe: "",
    favoriteArtwork: []
  }

  const getStatusBadge = (status) => {
    const statusStyles = {
      active: "w-3 h-3 rounded-full bg-green-500",
      inactive: "w-3 h-3 rounded-full bg-red-500",
      disabled: "w-3 h-3 rounded-full bg-gray-400 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gray-600 after:top-1/2 after:-rotate-45"
    }
    return <div className={statusStyles[status]}></div>
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
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
      {/* Rest of the component remains the same */}
    </div>
  )
}

export default UserProfile
