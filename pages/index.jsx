import React, { useState } from 'react';
import Navbar from '../components/navbar';  

function HomePage() {
  return (
    <>
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
                Skilled in Full-Stack Development.
                <br />
                Proficient in: JavaScript, Python, SQL, Version Control, HTML & CSS.
                <br />
                I love building things for the internet and interpreting people's real-life businesses into effective and easy-to-use websites. 
                <br />
                Have a look at my previous work <a href="codingwork/codingwork.html">here</a>
                <br />
                If you have any questions or ideas or fancy a chat, get in touch <a href="contact">below</a>.
                <br />
                Thanks for visiting.
              </p>
            </div>
            <div className="boxPhoto">
              <img src="/images/profile.jpeg" alt="Profile" />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomePage;
