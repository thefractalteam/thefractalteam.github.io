import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useEffect } from "react";
import Navbar from "../pages/comps/nav";
import Link from 'next/link';
import Script from 'next/script';

// Signup

const Signup: NextPage = () => {
  useEffect(() => {
   const isMobileDevice = () => {
  // Check if ignoremobile is set to true in localStorage
  const ignoreMobile = localStorage.getItem("ignoremobile") === "true";

  // If ignoremobile is true, return false regardless of device type
  if (ignoreMobile) {
    return false;
  }

  // Otherwise, check if it's a mobile device
  return (
    typeof window !== "undefined" &&
    (
      typeof window.orientation !== "undefined" ||
      navigator.userAgent.indexOf("IEMobile") !== -1
    )
  );
};

// Function to redirect to /mobile if it's a mobile device
const redirectIfMobile = () => {
  if (isMobileDevice()) {
    window.location.href = "/nine/mobile";
  }
};

// Call redirectIfMobile function when the component mounts
redirectIfMobile();

  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className={styles.container}>
      <Head>
        <title>Nine - Signup</title>
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
       <script src="https://cdn.tailwindcss.com/" async ></script>
      <main>
        <Navbar
          username="ninedev"
          profilePicture="data:image/svg+xml,%3Csvg viewBox=&apos;0 0 36 36&apos; fill=&apos;none&apos; role=&apos;img&apos; xmlns=&apos;http://www.w3.org/2000/svg&apos; width=&apos;128&apos; height=&apos;128&apos;%3E%3Cmask id=&apos;:rmd:&apos; maskUnits=&apos;userSpaceOnUse&apos; x=&apos;0&apos; y=&apos;0&apos; width=&apos;36&apos; height=&apos;36&apos;%3E%3Crect width=&apos;36&apos; height=&apos;36&apos; fill=&apos;%23FFFFFF&apos;%3E%3C/rect%3E%3C/mask%3E%3Cg mask=&apos;url(%23:rmd:)&apos;%3E%3Crect width=&apos;36&apos; height=&apos;36&apos; fill=&apos;%23442432&apos;%3E%3C/rect%3E%3Crect x=&apos;0&apos; y=&apos;0&apos; width=&apos;36&apos; height=&apos;36&apos; transform=&apos;translate(8 -4) rotate(198 18 18) scale(1)&apos; fill=&apos;%23d95b45&apos; rx=&apos;6&apos;%3E%3C/rect%3E%3Cg transform=&apos;translate(4 -1) rotate(-8 18 18)&apos;%3E%3Cpath d=&apos;M15 19c2 1 4 1 6 0&apos; stroke=&apos;%23FFFFFF&apos; fill=&apos;none&apos; stroke-linecap=&apos;round&apos;%3E%3C/path%3E%3Crect x=&apos;11&apos; y=&apos;14&apos; width=&apos;1.5&apos; height=&apos;2&apos; rx=&apos;1&apos; stroke=&apos;none&apos; fill=&apos;%23FFFFFF&apos;%3E%3C/rect%3E%3Crect x=&apos;23&apos; y=&apos;14&apos; width=&apos;1.5&apos; height=&apos;2&apos; rx=&apos;1&apos; stroke=&apos;none&apos; fill=&apos;%23FFFFFF&apos;%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
        />

        <span className="text-6xl font-black m-2 flex items-center">
          {" "}
          sign up
        </span>

        <h2 className="text-4xl font-black m-2">new here?</h2>
        <h3 className="text-2xl font-bold m-2 mb-4">
          already part of the club?{" "}
          <Link
            href="/login"
            style={{ color: "#00BF8F", textDecoration: "underline" }}
          >
            log in!
          </Link>
        </h3>
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
            <input type="text" className="grow" placeholder="username" />
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
              placeholder="password"
              maxLength={20}
            />
          </label>
        </div>
        <button
          className="btn btn-accent m-2"
          style={{ backgroundColor: "#00BF8F" }}
        >
          sign up
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">session error</h3>
            <p className="py-4">
              your session has expired or you have logged out from another
              window
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">back to login</button>
              </form>
            </div>
          </div>
        </dialog>
      </main>
    </div>
  );
};

export default Signup;
