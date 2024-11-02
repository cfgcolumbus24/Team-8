"use client";
import React, { useState } from "react";
import { MdSettings, MdInsertPhoto, MdEmojiEmotions } from "react-icons/md";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { useClickOutside } from "@mantine/hooks";
import userData from "@/app/UserData";
import Post from "@/app/components/Post";
import Sidebar from "@/app/components/Sidebar";

import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter()

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="max-w-sm mx-auto p-6 border" style={{ borderColor: 'rgb(0, 0, 0)', borderRadius: '0.375rem' }}>
      <h2 className="text-2xl font-bold mb-4" style={{ color: 'rgb(0 , 0, 0)' }}>Login</h2>
      <form onSubmit={handleSubmitLogin}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1" style={{ color: 'rgb(0, 0, 0)' }}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            style={{ borderColor: 'rgb(0, 0, 0)' }}
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-1" style={{ color: 'rgb(0, 0, 0)' }}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            style={{ borderColor: 'rgb(0, 0, 0)' }}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full py-3 px-3"
          style={{ backgroundColor: 'rgb(225, 29, 72)', color: 'white', borderRadius: '0.375rem' }}
          onMouseDown={(e) => e.target.style.backgroundColor = 'rgb(200, 0, 50)'}
          onMouseUp={(e) => e.target.style.backgroundColor = 'rgb(225, 29, 72)'}
        >
          Login
        </button>
        <button
          type="button"
          className="w-full py-3 mt-2"
          style={{ backgroundColor: 'rgb(225, 29, 72)', color: 'white', borderRadius: '0.375rem' }}
          onMouseDown={(e) => e.target.style.backgroundColor = 'rgb(200, 0, 50)'}
          onMouseUp={(e) => e.target.style.backgroundColor = 'rgb(225, 29, 72)'}
          onClick={() => router.push('/create-account')}
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Login;
