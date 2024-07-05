import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useEffect } from "react";
import Link from 'next/link';
import Script from 'next/script';

// 404

const Fourohfour: NextPage = () => {
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
        <title>Nine - 404</title>
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
      <br></br>
      <main>
        <div className="text-center align-center ">
          <h2 className="text-4xl font-black m-2">
            404!
            <span style={{ color: "#00BF8F" }}>
              {" "}
              we couldn&apos;t find what you were looking for!
            </span>
          </h2>
          <p>
            you can go{" "}
            <Link href="/" className="font-bold underline">
              home
            </Link>{" "}
            or try again later.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Fourohfour;
