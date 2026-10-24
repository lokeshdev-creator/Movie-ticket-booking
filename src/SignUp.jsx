import React from "react";
import { useState } from "react";
import './login.css';
export default function SignUp(){
    const [Email,setEmail]=useState("");
    const [password,setpassword]=useState("");
    return (
        <div className="menu show position-static login">
  <form className="d-flex flex-column gap-3 p-3 login-form">
    <h1 className="p-3">Welcome to IMovie</h1>
    <h3 className="p-3">Register your account</h3>
    <div>
      <label htmlfor="exampleMenuFormEmail1" className="form-label">Email address</label>
      <input type="email" className="form-control" id="exampleMenuFormEmail1" placeholder="email@example.com"/>
    </div>
    <div>
      <label htmlfor="exampleMenuFormPassword1" className="form-label">Password</label>
      <input type="password" className="form-control" id="exampleMenuFormPassword1" placeholder="Password"/>
    </div>
    <div className="vstack gap-2">
      <button type="submit" className="btn-solid theme-primary">Register</button>
      <a className="theme-secondary" href="/login">you have an acount? Sign In</a>
    </div>
  </form>
</div>
    )
}