import React from "react";

const Skills = () => {
  return (
    <section class="skills" id="skills">
      <div class="content">
        <div class="title">
          <span>My Skills</span>
        </div>
        <div class="skill-details">
          <div class="left">
            <div class="topic">Skills Reflects Our Knowledge</div>
            <p></p>
            <div class="experience">
              <div class="num">2</div>
              <div class="exp">
                Years
                <br />
                Of Experience{" "}
              </div>
            </div>
          </div>
          <div class="boxes">
            <div class="box">
              <div class="topic">PHP</div>
              <div class="num">70%</div>
            </div>
            <div class="box">
              <div class="topic">REACTJS</div>
              <div class="num">80%</div>
            </div>
            <div class="box">
              <div class="topic">MYSQL</div>
              <div class="num">70%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
