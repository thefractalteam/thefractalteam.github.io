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
	 <meta name="description" content="we are a team that hope to change how people see the web." />
        <meta name="author" content="fractal team" />
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
  <span>Fractal is under construction.</span>
</div>
 
          <span className="text-6xl font-black m-2 flex items-center">
  
            <span className="inline-block text-rose-600 font-black">fractal</span>
          </span>

        <h2 className="text-4xl font-black m-2">
        we&apos;re a team that hopes to <span className="text-rose-600">change</span> the way people see the internet, even just a little.
         
        </h2>
   
        <footer className="footer bg-base-200 text-base-content p-10">
  <aside>
  <h2 className="text-2xl" style={{
        fontFamily: "'IBMPlexSans', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif",
        fontStyle: 'italic',
        fontWeight: 'bold'
      }}>fractal</h2>
    <p>
     
    Domain provided by Fractal, site built by <a href="mailto:mark@frctl.lol" className="link link-hover">Mark/Poprock.</a>
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Apps</h6>
    <a href="https://nine.frctl.lol" className="link link-hover">Nine</a>
    <a href="https://eclipse.frctl.lol" className="link link-hover">Eclipse</a>
    <a href="https://schlatt.frctl.lol" className="link link-hover">Schluttlash</a>
    <a href="https://misc.frctl.lol" className="link link-hover">FractalHosted</a>
  </nav>
  <nav>
    <h6 className="footer-title">Email</h6>
    <a href="mailto:all@frctl.lol" className="link link-hover">All</a>
    <a href="mailto:mark@frctl.lol" className="link link-hover">Mark (Poprock)</a>
    <a href="mailto:edward@frctl.lol" className="link link-hover">Darwin (Awesomelord)</a>
  
  </nav>
 
</footer>
       
      </main>
    </div>
  );
};

export default Home;
