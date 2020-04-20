import React from "react";
function ScrollUp() {
  return (
    <a role="button" href="#start" data-scroll>
      <img
        src={require("../img/up-arrow-b.svg")}
        alt="Go Up"
        className="scroll-up"
      />
    </a>
  );
}

export default ScrollUp;
