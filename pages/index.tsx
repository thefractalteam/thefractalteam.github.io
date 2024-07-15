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
	     
      
 
          <span className="text-6xl font-black m-2 flex items-center">
  
            <span className="inline-block text-rose-600">fractal</span>
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
