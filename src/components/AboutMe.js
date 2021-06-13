import React from "react";
import img1 from "./images/korabi.png";
import cv from "./images/CV--KorabQorri.pdf";

const AboutMe = () => {
  return (
    <section class="about" id="about">
      <div class="content">
        <div class="title">
          <span>About Me</span>
        </div>
        <div class="about-details">
          <div class="right">
            <img src={img1} alt="logo" />
          </div>
          <div class="left">
            <div class="topic">
              Hello! I am Korab. I have been developing websites for over 2
              years. I'm Full-Stack Web Developer. Technologies i use are PHP,
              REACT. I create responsive websites that are displayed on all
              devices desktops and smartphones. Of course, before i begin
              developing any webapp, Landing Page. And i'm ready to do this for
              you, before we start developing your website, we will discuss all
              the details of your niche with you, i will conduct a survey of
              your competitors and make a list of their advantages and
              weaknesses.
            </div>
            <div class="button">
              <button>
                <a href="./images/CV--KorabQorri.pdf" download>
                  Download my CV
                </a>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
