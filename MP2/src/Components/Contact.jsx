import React from "react";
import '../App.css';

const ContactPage = () => {
  return (
    <div className="contactPage">
    <div>
      <h2>If you have feedback on our World Clock, or have any questions, please get in touch with us below.</h2>
      <form>
        <label>
          Name:
          <input type="text" name="name" /><br></br>
        </label>
        <label>
          Email Address:
          <input type="text" name="email" /><br></br>
        </label>
        <label>
          Enquiry:
          <input type="text" name="subject" /><br></br>
        </label>
        <button class="button">Submit</button>
      </form>
    </div>
    </div>
  );
};

export default ContactPage;
