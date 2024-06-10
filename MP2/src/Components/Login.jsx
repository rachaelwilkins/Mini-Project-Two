import React from "react";
import '../App.css';

const LoginPage = () => {
  return (
    <div className="loginPage">
    <div>
      <h2>Login below to access your World Clock account.</h2>
      <form>
        <label>
          UserName:
          <input type="text" name="name" /><br></br>
        </label>
        <label>
          Password:
          <input type="text" name="email" /><br></br><br></br>
        </label>
        <button class="button">Submit</button><button class="button">Forgot Password?</button><button class="button">Sign Up</button>
      </form>
    </div>
    </div>
  );
};

export default LoginPage;
