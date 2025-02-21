import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navbar from "../components/navbar"; 
import '../styles/codingwork.module.css'


export default function codingWork(){

  return (
    <>
      <Head>
        <title>Lottie Judge - Coding Work</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script 
          src="https://code.jquery.com/jquery-3.2.1.min.js"
          integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
          crossOrigin="anonymous"
          defer
        ></script>
      </Head>

      <div className="container mt-5">
        <h1 className="text-center">Coding Work</h1>

        <div className="row mt-4">
          <div className="col-md-6">
            <div className="box">
              <h2>This Website</h2>
              <p>
                I coded this entire website from scratch. In the CV section, I even designed that font. Take a look at my coding files{" "}
                <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noopener noreferrer">here</a>.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="box">Image</div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <div className="box">
              <h2>Anvil Design and Fabrication</h2>
              <p>
                Anvil Design and Fabrication is a seriously slick outfit that needed a brand new website,{" "}
                <a href="https://anvildesign.com" target="_blank" rel="noopener noreferrer">it's here</a>. And here are the{" "}
                <a href="https://github.com/cactusballs/Anvil" target="_blank" rel="noopener noreferrer">code files</a>.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="box">Image</div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <div className="box">
              <h2>Village</h2>
              <p>
                An SMS service I designed for people who want to quit smoking. Don't Smoke, It's Bad, will send you a daily SMS with a message to remind you why you're quitting!{" "}
                <a href="https://github.com/YOUR_GITHUB" target="_blank" rel="noopener noreferrer">Here</a> are the coding files.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="box">Image</div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12">
            <div className="box text-center">
              <h2>Small Projects, Big Gains</h2>
              <p>Small things I've worked on to learn. I learned tonnes, they were fun and I'm proud of them.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}


body{
  font-size: 18px;
  font-family: 'Spartan', 'Montserrat', 'Futura', sans-serif;
  background-color: rgba(255, 255, 245, 0.9);
}

body{
  margin: 40px;
}
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  color: rgb(26, 65, 87); 
}

.box {
  background-color: rgba(208, 220, 232, 0.5);
  color: rgb(26, 65, 87);
  border-radius: 5px;
  padding: 20px;
  font-size: 0.75rem
}