import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useEffect } from 'react';
import Navbar from '../pages/comps/nav';
import Script from 'next/script';
import Link from 'next/link';
const Home: NextPage = () => {

const handleScriptLoad = () => {
    document.querySelector('main').classList.add('loaded');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Fractal - Home</title>
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@4.12.2/dist/full.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://cdn.tailwindcss.com/latest.min.css"
          rel="stylesheet"
        />
        <style>{`
          main {
            display: none;
          }

          main.loaded {
            display: block;
          }
        `}</style>
      </Head>
         <Script src="https://cdn.tailwindcss.com/" async onLoad={handleScriptLoad}></Script>
      <main>
	     
      <div role="alert" className="alert alert-warning mt-2">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 shrink-0 stroke-current"
    fill="none"
    viewBox="0 0 24 24">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
  <span>our site is under construction, this design may look a little familiar, but will change soon.</span>
</div>
 
          <span className="text-6xl font-black m-2 flex items-center">
  
            <span className="inline-block text-rose-600 font-black">fractal</span>
          </span>

        <h2 className="text-4xl font-black m-2">
        we&apos;re a team that hopes to <span className="text-rose-600">change</span> the way people see the internet, even just a little.
         
        </h2>
        <h3 className="text-2xl font-bold m-2">
        check out our projects, Nine and Witty!
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
                  onClick={() => (window.location.href = '/nine/login')}
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
