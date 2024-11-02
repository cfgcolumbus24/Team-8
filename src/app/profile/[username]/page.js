'use client'

import { useParams } from 'next/navigation'

const UserProfile = () => {
  const params = useParams()
  const username = params.username

  const userData = {
    name: "Philip Tonder",
    username: username,
    profilePic: "/assets/image/avatar_default.jpg",
    status: "active",
    bio: "Software Developer | Coffee Enthusiast",
    posts: []
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
    <div className="max-w-2xl mx-auto p-6">
      <div className="flex items-center gap-6">
        <img
          src={userData.profilePic}
          alt={userData.name}
          className="w-32 h-32 rounded-full object-cover"
        />
        <div className="flex-1">
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold">{userData.name}</h1>
            {getStatusBadge(userData.status)}
          </div>
          <p className="text-gray-600">@{userData.username}</p>
          <p className="mt-2">{userData.bio}</p>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
