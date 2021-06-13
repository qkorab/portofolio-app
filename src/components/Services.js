import React from "react";

const Services = () => {
  return (
    <section class="services" id="services">
      <div class="content">
        <div class="title">
          <span>My services</span>
        </div>
        <div class="boxes">
          <div class="box">
            <div class="icon">
              <i class="fas fa-desktop"></i>
            </div>
            <div class="topic">Web Design</div>
            <p>
              I approach each project individually and always focus on the
              result{" "}
            </p>
          </div>
          <div class="box">
            <div class="icon">
              <i class="fas fa-desktop"></i>
            </div>
            <div class="topic">Web Development</div>
            <p>Your website will be build with an new proven technologies</p>
          </div>

          <div class="box">
            <div class="icon">
              <i class="fas fa-desktop"></i>
            </div>
            <div class="topic">Google Ads</div>
            <p>
              Your servic or product will appear at the top of the Google Search{" "}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
