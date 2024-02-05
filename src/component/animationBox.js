import React from "react";
import { useRive } from "rive-react";

export default function AnimationBox() {
  const { rive, RiveComponent } = useRive({
    src: "new4.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });
  return (
    <div className="riveart">
      <RiveComponent />
    </div>
  );
}
