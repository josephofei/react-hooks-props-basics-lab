import React from "react";
import Links from "./Links"


function About(props) {

  // const isbio = function () {
  //   if (props.bio === "" && props.bio === undefined) {
  //     return;
  //   } else {
  //     return props.bio
  //   }
  // }




  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && props.bio.length > 1 ? <p>{props.bio}</p> : null}
      {/* <p>{isbio()}</p> */}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin} />




    </div>
  );
}

{/* <Links URL="https://github.com/liza" /> */ }
export default About;
