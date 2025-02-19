import React from 'react';
import Image from 'next/image';
import Link from 'next/link'

import '../styles/global.css';


const Index = () => {
  return (
    <>
      <head>
        <title>Lottie Judge</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#">LJ</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" href="/who">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/codingwork">Web Development Work</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/cv">Other Professional Work</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/gallery">Gallery</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <main>
        <div className="hero">
          <h4>Hiya, I'm</h4>
          <h1>Lottie Judge</h1>
          <h2>and I love the internet</h2>
          <p>Full-Stack / Python & JavaScript / Web Development / Web Design</p>
        </div>

        <div className="about">
          <h2>About</h2>
          <div className="wrapper">
            <div className="box">
              <p>
                Skilled in Full-Stack Development. <br />
                Proficient in: JavaScript, Python, SQL, Version Control, HTML & CSS. <br />
                I love building things for the internet and interpreting people's IRL businesses into effective and easy-on-the-eyes websites. <br />
                Have a look at my previous work <Link href="/codingwork">here</Link>. <br />
                <br />
                If you have any questions, ideas, or fancy a chat, get in touch <Link href="/contact">below</Link>.
                <br />
                Thanks for visiting.
              </p>
            </div>
            <div className="boxPhoto">
              <Image src="/images/profile.jpeg" alt="Lottie Judge" width={250} height={250} />
            </div>
          </div>
        </div>
      </main>

      <footer>
        <h3 className="contact">
          <a href="mailto:lottiejudge@gmail.com">lottiejudge@gmail.com</a> |{' '}
          <a href="https://www.linkedin.com/feed/">LinkedIn</a> |{' '}
          <a href="https://github.com/cactusballs">GitHub</a>
        </h3>
      </footer>
    </>
  );
};

export default Index;

