import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useEffect } from "react";
import Navbar from "../pages/comps/nav";
// Home

const Home: NextPage = () => {
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
        typeof window.orientation !== "undefined" ||
        navigator.userAgent.indexOf("IEMobile") !== -1
      );
    };
    // Function to redirect to /mobile if it's a mobile device
    const redirectIfMobile = () => {
      if (isMobileDevice()) {
        window.location.href = "/mobile";
      }
    };

    // Call redirectIfMobile function when the component mounts
    redirectIfMobile();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  return (
    <div className={styles.container}>
      <Head>
        <title>Nine - Home</title>
        <meta name="description" content="Do it for the Nine." />
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@4.12.2/dist/full.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          href="https://cdn.tailwindcss.com/latest.min.css"
          rel="stylesheet"
        />
      </Head>

      <main>
        <Navbar
          username="ninedev"
          profilePicture="data:image/svg+xml,%3Csvg viewBox='0 0 36 36' fill='none' role='img' xmlns='http://www.w3.org/2000/svg' width='128' height='128'%3E%3Cmask id=':rmd:' maskUnits='userSpaceOnUse' x='0' y='0' width='36' height='36'%3E%3Crect width='36' height='36' fill='%23FFFFFF'%3E%3C/rect%3E%3C/mask%3E%3Cg mask='url(%23:rmd:)'%3E%3Crect width='36' height='36' fill='%23442432'%3E%3C/rect%3E%3Crect x='0' y='0' width='36' height='36' transform='translate(8 -4) rotate(198 18 18) scale(1)' fill='%23d95b45' rx='6'%3E%3C/rect%3E%3Cg transform='translate(4 -1) rotate(-8 18 18)'%3E%3Cpath d='M15 19c2 1 4 1 6 0' stroke='%23FFFFFF' fill='none' stroke-linecap='round'%3E%3C/path%3E%3Crect x='11' y='14' width='1.5' height='2' rx='1' stroke='none' fill='%23FFFFFF'%3E%3C/rect%3E%3Crect x='23' y='14' width='1.5' height='2' rx='1' stroke='none' fill='%23FFFFFF'%3E%3C/rect%3E%3C/g%3E%3C/g%3E%3C/svg%3E"
        />
        <div
          className="tooltip tooltip-right font-bold"
          data-tip='the two emojis displayed on Vine&apos;s now archived site. in the code, the hand is labeled as a "goodbye wave", but we see it a different way. '
        >
          <span className="text-6xl font-black m-2 flex items-center">
            <span className="inline-block">&quot;</span>
            <img
              src="https://twitter.github.io/twemoji/2/72x72/1f44b.png"
              alt="Hello wave"
              className="inline-block mx-2"
            />
            <img
              src="https://twitter.github.io/twemoji/2/72x72/1f331.png"
              alt="Vine"
              className="inline-block"
            />
            <span className="inline-block">&quot;</span>
          </span>
        </div>
        <h2 className="text-4xl font-black m-2">
          the emojis that said goodbye now wave{" "}
          <span style={{ color: "#00BF8F" }}>hello.</span>
        </h2>
        <h3 className="text-2xl font-bold m-2">
          welcome to Nine! a full-fledged remake of Vine, since Elon won't get
          his happy ass to making it himself.
        </h3>

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
                <button
                  onClick={() => (window.location.href = "/login")}
                  className="btn"
                >
                  back to login
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </main>
    </div>
  );
};

export default Home;
