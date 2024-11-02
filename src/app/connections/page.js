'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Connections = () => {
  const params = useParams();

  /** Dummy data */
  const topUsers = [
    {
      name: "Philip Tonder",
      username: "@philip",
      profilePic: "/assets/image/avatar_default.jpg",
      status: "active",
      bio: "Software Developer | Coffee Enthusiast",
      posts: [],
      tags: ["Software Development", "Coffee", "Tech Enthusiast"]
    },
    {
      name: "Alice Johnson",
      username: "@alice",
      profilePic: "/assets/image/avatar_alice.jpg",
      status: "active",
      bio: "Graphic Designer | Art Lover",
      posts: [],
      tags: ["Design", "Art", "Creativity"]
    },
    {
      name: "Bob Smith",
      username: "@bob",
      profilePic: "/assets/image/avatar_bob.jpg",
      status: "inactive",
      bio: "Content Creator | Gamer",
      posts: [],
      tags: ["Gaming", "Content Creation"]
    }
  ];

  const allUsers = [
    {
      name: "Philip Tonder",
      username: "@philip",
      profilePic: "/assets/image/avatar_default.jpg",
      status: "active",
      bio: "Software Developer | Coffee Enthusiast",
      posts: [],
      tags: ["Software Development", "Coffee", "Tech Enthusiast"]
    },
    {
      name: "Alice Johnson",
      username: "@alice",
      profilePic: "/assets/image/avatar_alice.jpg",
      status: "active",
      bio: "Graphic Designer | Art Lover",
      posts: [],
      tags: ["Design", "Art", "Creativity"]
    },
    {
      name: "Bob Smith",
      username: "@bob",
      profilePic: "/assets/image/avatar_bob.jpg",
      status: "inactive",
      bio: "Content Creator | Gamer",
      posts: [],
      tags: ["Gaming", "Content Creation"]
    },
    {
      name: "Charlie Brown",
      username: "@charlie",
      profilePic: "/assets/image/avatar_charlie.jpg",
      status: "active",
      bio: "Web Developer | Coffee Drinker",
      posts: [],
      tags: ["Web Development", "Coffee", "JavaScript"]
    },
    {
      name: "Diana Prince",
      username: "@diana",
      profilePic: "/assets/image/avatar_diana.jpg",
      status: "active",
      bio: "Marketing Specialist | Travel Enthusiast",
      posts: [],
      tags: ["Marketing", "Travel", "Adventure"]
    },
    {
      name: "Ethan Hunt",
      username: "@ethan",
      profilePic: "/assets/image/avatar_ethan.jpg",
      status: "inactive",
      bio: "Adventure Seeker | Photographer",
      posts: [],
      tags: ["Photography", "Adventure", "Travel"]
    },
    {
      name: "Fiona Apple",
      username: "@fiona",
      profilePic: "/assets/image/avatar_fiona.jpg",
      status: "active",
      bio: "Singer | Songwriter",
      posts: [],
      tags: ["Music", "Songwriting", "Art"]
    },
    {
      name: "George Clooney",
      username: "@george",
      profilePic: "/assets/image/avatar_george.jpg",
      status: "active",
      bio: "Actor | Filmmaker",
      posts: [],
      tags: ["Film", "Acting", "Directing"]
    },
    {
      name: "Hannah Montana",
      username: "@hannah",
      profilePic: "/assets/image/avatar_hannah.jpg",
      status: "inactive",
      bio: "Pop Star | Actress",
      posts: [],
      tags: ["Music", "Acting", "Entertainment"]
    },
    {
      name: "Ivy League",
      username: "@ivy",
      profilePic: "/assets/image/avatar_ivy.jpg",
      status: "active",
      bio: "Student | Aspiring Author",
      posts: [],
      tags: ["Writing", "Literature", "Education"]
    }
  ];

  const tagsSet = new Set(allUsers.flatMap(user => user.tags));
  const tags = Array.from(tagsSet);

  const [selectedTags, setSelectedTags] = useState([]);

  const getStatusBadge = (status) => {
    const statusStyles = {
      active: "w-3 h-3 rounded-full bg-green-500",
      inactive: "w-3 h-3 rounded-full bg-red-500",
      disabled: "w-3 h-3 rounded-full bg-gray-400 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-gray-600 after:top-1/2 after:-rotate-45"
    };
    return <div className={statusStyles[status]}></div>;
  };

  return (
    <>
      <Navbar />
      <div className='mainContainer'>
        <Sidebar />
        <div>
          <div className='flex flex-col gap-8'>
            <div className='bg-lightBlue mx-16 p-4 rounded-md'>
              <h1 className='text-lg font-bold'>Recommended Users</h1>
              <div className='flex flex-wrap justify-start'>
                {topUsers.map((user, index) => (
                  <Link key={index} href={`/profile/${user.username.slice(1)}`} className="m-4 p-4 rounded-md border w-72">
                    <div className='flex gap-2'>
                      <img src={user.profilePic} alt={`${user.name}'s profile`} className='w-12 rounded-full' />
                      <div>
                        <div className='flex gap-2 items-center justify-center'>
                          <h2>{user.name}</h2> 
                          {getStatusBadge(user.status)}
                        </div>
                        <p>{user.username}</p>
                      </div>
                    </div>
                    <p className='mt-4'>{user.bio}</p>
                  </Link>
                ))}
              </div>
            </div>
            <div className='mx-16 p-4'>
              <h1 className='text-lg font-bold'>All Users</h1>

              <div className='mb-4 flex flex-wrap gap-2 bg-lightBlue p-4 rounded-lg shadow-sm'>
                {tags.map(tag => (
                  <button
                    key={tag}
                    onClick={() => setSelectedTags(prev =>
                      prev.includes(tag)
                        ? prev.filter(t => t !== tag)
                        : [...prev, tag]
                    )}
                    className={`px-3 py-1 rounded-full text-sm transition-colors ${
                      selectedTags.includes(tag)
                        ? 'bg-teal text-black'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <div className='flex flex-wrap'>
                {allUsers
                  .filter(user => 
                    selectedTags.length === 0 || 
                    user.tags.some(tag => selectedTags.includes(tag))
                  )
                  .map((user, index) => (
                    <Link key={index} href={`/profile/${user.username.slice(1)}`} className="m-4 p-4 rounded-md border w-72">
                      <div className='flex gap-2'>
                        <img src={user.profilePic} alt={`${user.name}'s profile`} className='w-12 rounded-full' />
                        <div>
                          <div className='flex gap-1 items-center justify-center'>
                            <h2>{user.name}</h2> 
                            {getStatusBadge(user.status)}
                          </div>
                          <p>{user.username}</p>
                        </div>
                      </div>
                      <p className='mt-4'>{user.bio}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Connections;
