import React from "react";
import Personal_Details from "./resumes_content/Personal_Details";
import Links from "./resumes_content/Links";
import Education from "./resumes_content/Education";
import Language from "./resumes_content/Language";
import Skill from "./resumes_content/Skill";

function User() {
  return (
    <>
      <Personal_Details />
      <Education />
      <Skill />
      <Language />
      <Links />
    </>
  );
}

export default User;
