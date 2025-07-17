import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image
              src="/man-svgrepo-com.svg"
              alt="man-svgrepo"
            />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Saad Athar</strong>. I'm originally from Pakistan and a graduate of FAST (National University of Computer and Emerging Sciences). Over time, I've cultivated a deep interest in backend development, building scalable and efficient systems. My early experiences in various entry-level roles helped shape a strong work ethic, adaptability, and effective communication.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              My journey into the world of technology began with a passion for solving complex problems, which led me to pursue a degree in Computer Science at FAST. Throughout the program, I explored core computing concepts and developed backend solutions using modern technologies and frameworks. These projects not only deepened my technical knowledge but also strengthened my collaborative and analytical skills.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              Working with teams to bring real-world ideas to life has been incredibly rewarding. As a backend developer, I'm excited to continue growing and contributing to impactful web-based solutions, especially those that demand thoughtful architecture, data management, and performance optimization.

              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>


            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
