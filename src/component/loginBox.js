import React from "react";

export default function LoginBox() {
  function handleRequest() {
    return alert(`Hello World`);
  }
  return (
    <div className="login_box">
      <div className="login_box_upper_div">
        <h1 className="login_box_welcome">Welcome</h1>
        <p className="login_box_para">Enter Your Phone No</p>
      </div>
      <div className="login_box_lower_div">
        <h2 className="login_box_heading">Login</h2>
        <div>
          <input
            className="login_box_input"
            type="number"
            placeholder="Phone No"
            size={10}
            maxLength={10}
          />
        </div>
        <span>
          <input className="login_box_check" type="checkbox" required />
          <p>I agree to terms and conditions.</p>
        </span>
        <button className="login_box_btn" onClick={handleRequest}>
          Send OTP
        </button>
      </div>
    </div>
  );
}
