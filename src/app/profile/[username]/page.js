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
    posts: [],
    tags: ["They/Them" , "Software Development", "Web Design", "UI/UX", "Coffee"],
    aboutMe: "I'm a passionate software developer with 5 years of experience building web applications. When I'm not coding, you can find me exploring new coffee shops and experimenting with different brewing methods.",
  }

  const getStatusBadge = (status) => {
    const statusStyles = {
      active: "w-3 h-3 rounded-full bg-green-500",
      inactive: "w-3 h-3 rounded-full bg-red-500",
      disabled: "w-3 h-3 rounded-full bg-gray-400 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gray-600 after:top-1/2 after:-rotate-45"
    }
    return (
      <div className="flex items-center gap-1">
        <div className={statusStyles[status]}></div>
        <span className="text-sm text-gray-600 capitalize">{status}</span>
      </div>
    )
  }

  return (
    <div className="max-w-2xl mx-auto p-6 space-y-6">
      {/* Profile Card */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-6">
          <img
            src={userData.profilePic}
            alt={userData.name}
            className="w-32 h-32 rounded-full object-cover border-4 border-gray-100"
          />
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h1 className="text-2xl font-bold">{userData.name}</h1>
              {getStatusBadge(userData.status)}
            </div>
            <p className="text-gray-600">@{userData.username}</p>
            <p className="mt-2 text-gray-700">{userData.bio}</p>
          </div>
        </div>
      </div>

      {/* Tags and About Me Card */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Tags</h2>
          <div className="flex flex-wrap gap-2">
            {userData.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">About Me</h2>
          <p className="text-gray-700 leading-relaxed">
            {userData.aboutMe}
          </p>
        </div>
      </div>
    </div>
  )
}

export default UserProfile
