"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmitLogin = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="flex h-screen">
      <div className="w-384 h-full flex flex-col relative">
        <button className="bg-primary w-full hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm">
          <a href="/welcome">Back</a>
        </button>
        <div className="flex flex-col justify-center items-center flex-grow">
          <div
            className="p-6 border mt-4"
            style={{ borderColor: "rgb(0, 0, 0)", borderRadius: "0.375rem" }}
          >
            <h2
              className="text-2xl font-bold mb-4"
              style={{ color: "rgb(0, 0, 0)" }}
            >
              Login
            </h2>
            <form onSubmit={handleSubmitLogin}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1 create-account-label"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md create-account-input"
                  style={{ borderColor: "rgb(0, 0, 0)" }}
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-1 create-account-label"
                >
                  Password:
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded-md create-account-input"
                  style={{ borderColor: "rgb(0, 0, 0)" }}
                  required
                />
              </div>
              <button
                type="submit"
                style={{
                  backgroundColor: "rgb(29, 188, 238)",
                  color: "white",
                  borderRadius: "0.375rem",
                }}
                className="w-full py-3 mt-2 create-account-button"
                onMouseDown={(e) => {
                  e.target.classList.add("active");
                  e.target.style.backgroundColor = "rgb(28, 123, 237)";
                }}
                onMouseUp={(e) => {
                  e.target.classList.remove("active");
                  e.target.style.backgroundColor = "rgb(29, 188, 238)";
                }}
              >
                Login
              </button>
              <button
                type="button"
                style={{
                  backgroundColor: "rgb(29, 188, 238)",
                  color: "white",
                  borderRadius: "0.375rem",
                }}
                className="w-full py-3 mt-2 create-account-button"
                onMouseDown={(e) => {
                  e.target.classList.add("active");
                  e.target.style.backgroundColor = "rgb(28, 123, 237)";
                }}
                onMouseUp={(e) => {
                  e.target.classList.remove("active");
                  e.target.style.backgroundColor = "rgb(29, 188, 238)";
                }}
                onClick={() => router.push("/create-account")}
              >
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="w-px h-full bg-black"></div>

      <div className="flex flex-col gap-8 flex-1 justify-center items-center bg-[url('/assets/image/login-bg.jpg')] bg-cover bg-center bg-gray-700/75 bg-blend-overlay w-screen h-screen overflow-hidden p-48">
        <img src="assets/image/lmcc-50-years-logo.png" className="h-36 auto" />
        <p className="text-white text-center">Founded as Lower Manhattan Cultural Council, LMCC serves, connects, and makes space for artists and community. Since 1973, LMCC has been the champion for independent artists in New York City and the cultural life force of Lower Manhattan.</p>
        <div className="flex gap-4">
          <a href="https://www.facebook.com/LMCCNYC/" target="_blank"><img src="assets/image/facebook.svg" /></a>
          <a href="https://x.com/LMCC?mx=2" target="_blank"><img src="assets/image/twitter.svg" /></a>
          <a href="https://www.instagram.com/lmcc_nyc/" target="_blank"><img src="assets/image/instagram.svg" /></a>
          <a href="https://www.linkedin.com/company/lower-manhattan-cultural-council/" target="_blank"><img src="assets/image/linkedin.svg" /></a>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex gap-4">
            <div className="flex gap-2 items-center">
              <img src="assets/image/phone.png" />
              <p className="text-white">(212) 219-9401</p>
            </div>
            <div className="flex gap-2 items-center">
              <img src="assets/image/email.png" />
              <p className="text-white">info@lmcc.net</p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <img src="assets/image/map.png" />
            <p className="text-white text-center">125 Maiden Lane, 2nd Floor, New York, NY 10038</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;