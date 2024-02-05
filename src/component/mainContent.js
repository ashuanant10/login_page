import React from "react";
import LoginBox from "../component/loginBox";
import AnimationBox from "../component/animationBox";

export default function mainContent() {
  return (
    <div>
      <section className="main_content_box">
        <AnimationBox />
        <LoginBox />
      </section>
    </div>
  );
}
