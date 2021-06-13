import React from "react";

const ContactUs = () => {
  return (
    <section class="contact" id="contact">
      <div class="content">
        <div class="title">
          <span>Contact Me</span>
        </div>
        <form class="contact-form" method="post">
          <input
            type="text"
            class="contact-form-text"
            placeholder="Your name"
          ></input>
          <input
            type="email"
            class="contact-form-text"
            placeholder="Your email"
          ></input>

          <textarea
            class="contact-form-text"
            placeholder="Your message"
          ></textarea>
          <input type="submit" class="contact-form-btn" value="send"></input>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
