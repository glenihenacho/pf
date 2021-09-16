import React from "react";
const loadLogo = "../Assets/home-main.svg";
function Pre(props) {
  return <div id={props.load ? "preloader" : "preloader-none"}>
    <img src={props.logo} alt="home pic" className="img-fluid" />
  </div>;
}

export default Pre;
