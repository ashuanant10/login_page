import React from "react";

export default function Header() {
  return (
    <div className="header_div">
      <a href={<Header />} className="header_heading">
        Login Page
      </a>
      <ul className="header_list">
        <a href={<Header />} className="header_li">
          Login
        </a>
        <a href={<Header />} className="header_li">
          Sign Up
        </a>
      </ul>
    </div>
  );
}
