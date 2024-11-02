'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { getTopMatches } from '../utils/geminiApi'; 

const Connections = () => {
  const params = useParams();

  // Simulated current user's About Me section for matching
  const myAboutMe = "Coffee enthusiast. Dancing my way through life. Pottery lover, shaping clay and moments. Finding joy in the simple and the spontaneous. Always chasing creativity and good vibes. Here for the art, movement, and a perfect brew.";

  // Full user data for matching
  const allUsers = [
    {
      name: "Philip Tonder",
      username: "@philip",
      profilePic: "https://t3.ftcdn.net/jpg/06/99/46/60/360_F_699466075_DaPTBNlNQTOwwjkOiFEoOvzDV0ByXR9E.jpg",
      status: "active",
      bio: "Software Developer | Coffee Enthusiast",
      posts: [],
      tags: ["Software Development", "Coffee", "Tech Enthusiast"]
    },
    {
      name: "Alice Johnson",
      username: "@alice",
      profilePic: "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=",
      status: "active",
      bio: "Graphic Designer | Art Lover",
      posts: [],
      tags: ["Design", "Art", "Creativity"]
    },
    {
      name: "Bob Smith",
      username: "@bob",
      profilePic: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg",
      status: "inactive",
      bio: "Content Creator | Gamer",
      posts: [],
      tags: ["Gaming", "Content Creation"]
    },
    {
      name: "Charlie Brown",
      username: "@charlie",
      profilePic: "https://assets.skool.com/f/789b6be1daaa40a0b4364a2ef53334ba/79f098547e16476d892072e141117ffe2bb3db5bcadf4846a0eda95bdb3df4ad-md.jpg",
      status: "active",
      bio: "Web Developer | Coffee Drinker",
      posts: [],
      tags: ["Web Development", "Coffee", "JavaScript"]
    },
    {
      name: "Diana Prince",
      username: "@diana",
      profilePic: "https://static01.nyt.com/newsgraphics/2020/11/12/fake-people/4b806cf591a8a76adfc88d19e90c8c634345bf3d/fallbacks/mobile-04.jpg",
      status: "active",
      bio: "Marketing Specialist | Travel Enthusiast",
      posts: [],
      tags: ["Marketing", "Travel", "Adventure"]
    },
    {
      name: "Ethan Hunt",
      username: "@ethan",
      profilePic: "https://media.istockphoto.com/id/1347005975/photo/portrait-of-a-serious-muslim-young-man-looking-at-camera.jpg?s=612x612&w=0&k=20&c=mxRUDCuwDD3ML6-vMaUlTY7Ghqlj2R_LOhWWCB5CTXE=",
      status: "inactive",
      bio: "Adventure Seeker | Photographer",
      posts: [],
      tags: ["Photography", "Adventure", "Travel"]
    },
    {
      name: "Fiona Apple",
      username: "@fiona",
      profilePic: "https://st4.depositphotos.com/12852350/41021/i/450/depositphotos_410212674-stock-photo-portrait-shooting-stylish-girl-beige.jpg",
      status: "active",
      bio: "Singer | Songwriter",
      posts: [],
      tags: ["Music", "Songwriting", "Art"]
    },
    {
      name: "George Clooney",
      username: "@george",
      profilePic: "https://www.shutterstock.com/image-photo/happy-mid-aged-older-business-600nw-2322385015.jpg",
      status: "active",
      bio: "Actor | Filmmaker",
      posts: [],
      tags: ["Film", "Acting", "Directing"]
    },
    {
      name: "Hannah Montana",
      username: "@hannah",
      profilePic: "https://t3.ftcdn.net/jpg/03/67/46/48/360_F_367464887_f0w1JrL8PddfuH3P2jSPlIGjKU2BI0rn.jpg",
      status: "inactive",
      bio: "Pop Star | Actress",
      posts: [],
      tags: ["Music", "Acting", "Entertainment"]
    },
    {
      name: "Ivy League",
      username: "@ivy",
      profilePic: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Harvard_University_coat_of_arms.svg/1200px-Harvard_University_coat_of_arms.svg.png",
      status: "active",
      bio: "Student | Aspiring Author",
      posts: [],
      tags: ["Writing", "Literature", "Education"]
    }
  ];

  // Get top 3 active users
  const topUsers = allUsers
    .filter(user => user.status === 'active') // Filter for active users
    .slice(0, 3); // Take the first 3 after filtering

  const tagsSet = new Set(allUsers.flatMap(user => user.tags));
  const tags = Array.from(tagsSet);

  const [selectedTags, setSelectedTags] = useState([]);
  const [topMatches, setTopMatches] = useState([]);
  const API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY; 

  useEffect(() => {
    const fetchTopMatches = async () => {
      const profiles = allUsers.map(user => ({
        name: user.name,
        aboutMe: user.bio
      }));

      const matches = await getTopMatches(myAboutMe, profiles, API_KEY);
      setTopMatches(matches);
    };

    fetchTopMatches();
  }, []);

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
            {/* Top Matches Section */}
            <div className='bg-lightBlue mx-16 p-4 rounded-md'>
              <h1 className='text-lg font-bold'>Top 3 Matches</h1>
              <div className='flex flex-wrap justify-start'>
                {topMatches.map((match, index) => (
                  <Link key={index} href={`/profile/${match.name.toLowerCase()}`} className="m-4 p-4 rounded-md border w-72">
                    <div className='flex gap-2'>
                      <img src={allUsers.find(user => user.name === match.name)?.profilePic} alt={`${match.name}'s profile`} className='w-12 h-12 rounded-full object-cover' />
                      <div>
                        <div className='flex gap-2 items-center justify-center'>
                          <h2>{match.name}</h2> 
                          {getStatusBadge(allUsers.find(user => user.name === match.name)?.status)}
                        </div>
                        <p>{allUsers.find(user => user.name === match.name)?.username}</p>
                      </div>
                    </div>
                    <p className='mt-4'>{match.aboutMe}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recommended Users Section */}
            <div className='bg-lightBlue mx-16 p-4 rounded-md'>
              <h1 className='text-lg font-bold'>Recommended Users</h1>
              <div className='flex flex-wrap justify-start'>
                {topUsers.map((user, index) => (
                  <Link key={index} href={`/profile/${user.username.slice(1)}`} className="m-4 p-4 rounded-md border w-72">
                    <div className='flex gap-2'>
                      <img src={user.profilePic} alt={`${user.name}'s profile`} className='w-12 rounded-full h-12 object-cover' />
                      <div>
                        <div className='flex gap-2 items-center justify-center'>
                          <h2>{user.name}</h2> 
                          {getStatusBadge(user.status)}
                        </div>
                        <p>{user.username}</p>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="flex flex-wrap gap-1">
                        {user.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <p className='mt-4'>{user.bio}</p>
                  </Link>
                ))}
              </div>
            </div>

            {/* All Users Section */}
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
                        ? 'bg-lightBlue text-black'
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
                        <img src={user.profilePic} alt={`${user.name}'s profile`} className='w-12 rounded-full h-12 object-cover' />
                        <div>
                          <div className='flex gap-1 items-center justify-center'>
                            <h2>{user.name}</h2> 
                            {getStatusBadge(user.status)}
                          </div>
                          <p>{user.username}</p>
                        </div>
                      </div>
                      <div className="mt-2">
                        <div className="flex flex-wrap gap-1">
                          {user.tags.map((tag, tagIndex) => (
                            <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">{tag}</span>
                          ))}
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
