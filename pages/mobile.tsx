import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from 'next/link';
import Script from 'next/script';


// MobileBlock

const MobileBlock: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nine - You&apos;re on mobile</title>
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
        <h2 className="text-4xl font-black m-2 mt-4">
          looks like you&apos;re on a{" "}
          <span style={{ color: "#00BF8F" }}>mobile device.</span>
        </h2>
        <h3 className="text-2xl font-bold m-2">
          this site isn&apos;t built for mobile devices, so try out our app! If we&apos;re
          wrong, you can{" "}
          <Link href="#"
            onClick={() => {
              localStorage.setItem("ignoremobile", "true");
              window.location.href = "/";
            }}
            style={{
              color: "#00BF8F",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            use the site anyway.
          </Link>
        </h3>
        <div className="join join-vertical m-2">
          <button className="btn btn-info join-item">App Store</button>
          <button className="btn btn-error join-item">Play Store</button>
          <button className="btn join-item">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
            Download APK
          </button>
        </div>

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

export default MobileBlock;
