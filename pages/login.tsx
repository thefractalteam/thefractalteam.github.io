import { useState } from "react";
import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../pages/comps/nav";
import Link from 'next/link';
import Script from 'next/script';


const Login = () => {
  const [username, setUsername] = useState(&apos;&apos;);
  const [password, setPassword] = useState(&apos;&apos;);
  const [error, setError] = useState(&apos;&apos;);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const response = await axios.post(&apos;https://nineteen.loca.lt/api/login&apos;, { username, password });

      console.log(response.data); 
    } catch (err) {

      console.error(&apos;Login failed:&apos;, err.response.data);
      setError(err.response.data.error || &apos;Login failed&apos;);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Nine - Login</title>
        <meta name="description" content="Do it for the Nine." />
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@4.12.2/dist/full.min.css"
          rel="stylesheet"
          type="text/css"
        />
      
        <link
          href="https://cdn.tailwindcss.com/latest.min.css"
          rel="stylesheet"
        />
      </Head>
  <Script src="https://cdn.tailwindcss.com/latest.min.js" strategy="beforeInteractive" />
      <main>
        <Navbar
          username="ninedev"
          profilePicture="data:image/svg+xml,%3Csvg viewBox=&apos;0 0 36 36&apos; fill=&apos;none&apos; role=&apos;img&apos; xmlns=&apos;http://www.w3.org/2000/svg&apos; width=&apos;128&apos; height=&apos;128&apos;%3E%3Cmask id=&apos;:rmd:&apos; maskUnits=&apos;userSpaceOnUse&apos; x=&apos;0&apos; y=&apos;0&apos; width=&apos;36&apos; height=&apos;36&apos;%3E%3Crect width=&apos;36&apos; height=&apos;36&apos; fill=&apos;%23FFFFFF&apos;%3E%3C/rect%3E%3C/mask%3E%3Cg mask=&apos;url(%23:rmd:)&apos;%3E%3Crect width=&apos;36&apos; height=&apos;36&apos; fill=&apos;%23442432&apos;%3E%3C/rect%3E%3Crect x=&apos;0&apos; y=&apos;0&apos; width=&apos;36&apos; height=&apos;36&apos; transform=&apos;translate(8 -4) rotate(198 18 18) scale(1)&apos; fill=&apos;%23d95b45&apos; rx=&apos;6&apos;%3E%3C/rect%3E%3Cg transform=&apos;translate(4 -1) rotate(-8 18 18)&apos;%3E%3Cpath d=&apos;M15 19c2 1 4 1 6 0&apos; stroke=&apos;%23FFFFFF&apos; fill=&apos;none&apos; stroke-linecap=&apos;round&apos;%3E%3C/path%3E%3Crect x=&apos;11&apos; y=&apos;14&apos; width=&apos;1.5&apos; height=&apos;2&apos; rx=&apos;1&apos; stroke=&apos;none&apos; fill=&apos;%23FFFFFF&apos;%3E%3C/rect%3E%3Crect x=&apos;23&apos; y=&apos;14&apos; width=&apos;1.5&apos; height=&apos;2&apos; rx=&apos;1&apos; stroke=&apos;none&apos; fill=&apos;%23FFFFFF&apos;%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
        />

        <span className="text-6xl font-black m-2 flex items-center"> login </span>

        <h2 className="text-4xl font-black m-2">welcome back!</h2>
        <h3 className="text-2xl font-bold m-2 mb-4">
          don&apos;t have an account yet?{&apos; &apos;}
          <Link
            href="/signup"
            style={{ color: &apos;#00BF8F&apos;, textDecoration: &apos;underline&apos; }}
          >
            sign up!
          </Link>
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="w-80">
            <label className="m-2 input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </label>
            <label className="m-2 input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="Password"
                maxLength="20"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </label>
          </div>
          {error && <p className="text-red-500">{error}</p>}
          <button
            type="submit"
            className="btn btn-accent m-2"
            style={{ backgroundColor: &apos;#00BF8F&apos; }}
          >
            Log in
          </button>
        </form>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Session Error</h3>
            <p className="py-4">
              Your session has expired or you have logged out from another
              window
            </p>
            <div className="modal-action">
              <button className="btn">Back to login</button>
            </div>
          </div>
        </dialog>
      </main>
    </div>
  );
};

export default Login;