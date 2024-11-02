'use client'

import { useParams } from 'next/navigation';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

const Connections = () => {
  const params = useParams();

  /** dummy data */
  const topUsers = [
    {
      name: "Philip Tonder",
      username: "@philip",
      profilePic: "/assets/image/avatar_default.jpg",
      status: "active",
      bio: "Software Developer | Coffee Enthusiast",
      posts: []
    },
    {
      name: "Alice Johnson",
      username: "@alice",
      profilePic: "/assets/image/avatar_alice.jpg",
      status: "active",
      bio: "Graphic Designer | Art Lover",
      posts: []
    },
    {
      name: "Bob Smith",
      username: "@bob",
      profilePic: "/assets/image/avatar_bob.jpg",
      status: "inactive",
      bio: "Content Creator | Gamer",
      posts: []
    }
  ];

  /** dummy data */
  const allUsers = [
    {
        name: "Philip Tonder",
        username: "@philip",
        profilePic: "/assets/image/avatar_default.jpg",
        status: "active",
        bio: "Software Developer | Coffee Enthusiast",
        posts: []
    },
    {
        name: "Alice Johnson",
        username: "@alice",
        profilePic: "/assets/image/avatar_alice.jpg",
        status: "active",
        bio: "Graphic Designer | Art Lover",
        posts: []
    },
    {
        name: "Bob Smith",
        username: "@bob",
        profilePic: "/assets/image/avatar_bob.jpg",
        status: "inactive",
        bio: "Content Creator | Gamer",
        posts: []
    },
    {
        name: "Charlie Brown",
        username: "@charlie",
        profilePic: "/assets/image/avatar_charlie.jpg",
        status: "active",
        bio: "Web Developer | Coffee Drinker",
        posts: []
    },
    {
        name: "Diana Prince",
        username: "@diana",
        profilePic: "/assets/image/avatar_diana.jpg",
        status: "active",
        bio: "Marketing Specialist | Travel Enthusiast",
        posts: []
    },
    {
        name: "Ethan Hunt",
        username: "@ethan",
        profilePic: "/assets/image/avatar_ethan.jpg",
        status: "inactive",
        bio: "Adventure Seeker | Photographer",
        posts: []
    },
    {
        name: "Fiona Apple",
        username: "@fiona",
        profilePic: "/assets/image/avatar_fiona.jpg",
        status: "active",
        bio: "Singer | Songwriter",
        posts: []
    },
    {
        name: "George Clooney",
        username: "@george",
        profilePic: "/assets/image/avatar_george.jpg",
        status: "active",
        bio: "Actor | Filmmaker",
        posts: []
    },
    {
        name: "Hannah Montana",
        username: "@hannah",
        profilePic: "/assets/image/avatar_hannah.jpg",
        status: "inactive",
        bio: "Pop Star | Actress",
        posts: []
    },
    {
        name: "Ivy League",
        username: "@ivy",
        profilePic: "/assets/image/avatar_ivy.jpg",
        status: "active",
        bio: "Student | Aspiring Author",
        posts: []
    }
    ];

  return (
    <>
      <Navbar />
      <div className='mainContainer'>
        <Sidebar />
        <div>
            <div className='flex flex-col gap-8'>
                <div className='bg-lightBlue mx-16 p-4 rounded-md'>
                    <h1 className='text-lg font-bold'>Recommend Users</h1>
                    <div className='flex flex-wrap justify-start'>
                        {topUsers.map((user, index) => (
                        <div key={index} className="m-4 p-4 rounded-md border w-52" >
                            <img src={user.profilePic} alt={`${user.name}'s profile`} style={{ width: '50px', borderRadius: '50%' }} />
                            <h2>{user.name}</h2>
                            <p>{user.username}</p>
                            <p>Status: {user.status}</p>
                            <p>Bio: {user.bio}</p>
                            {user.posts.length > 0 && (
                            <div>
                                <h3>Posts:</h3>
                                <ul>
                                {user.posts.map((post, postIndex) => (
                                    <li key={postIndex}>{post}</li>
                                ))}
                                </ul>
                            </div>
                            )}
                        </div>
                        ))}
                    </div>
                </div>
                <div className='mx-16 p-4'>
                    <h1 className='text-lg font-bold'>All Users</h1>
                    <div className='flex flex-wrap'>
                        {allUsers.map((user, index) => (
                        <div key={index} className="m-4 p-4 rounded-md border w-52" >
                            <img src={user.profilePic} alt={`${user.name}'s profile`} style={{ width: '50px', borderRadius: '50%' }} />
                            <h2>{user.name}</h2>
                            <p>{user.username}</p>
                            <p>Status: {user.status}</p>
                            <p>Bio: {user.bio}</p>
                            {user.posts.length > 0 && (
                            <div>
                                <h3>Posts:</h3>
                                <ul>
                                {user.posts.map((post, postIndex) => (
                                    <li key={postIndex}>{post}</li>
                                ))}
                                </ul>
                            </div>
                            )}
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
      );
}

export default Connections;
