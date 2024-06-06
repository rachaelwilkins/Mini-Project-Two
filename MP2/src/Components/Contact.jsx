import React from "react";

const ContactPage = () => {
  return (
    <div>
      <h1>Contact World Clock</h1>
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
  );
};

export default ContactPage;
