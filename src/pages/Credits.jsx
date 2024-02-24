// Credits.js
import React from "react";
import styled from "styled-components";

import Jishnu_image from "../images/jishnu.jpeg";
import Tom_image from "../images/tomsabu.jpg";
import Jot_image from "../images/justin.jpg";
const Credits = () => {

  const teamMembers = [
    {
      name: "Jishnu Mohan",
      github: "https://github.com/Jishnumo",
      linkedin: "https://www.linkedin.com/in/jishnu-mohan-b5837a227",
      email: "jishnumohan292@gmail.com",
      description: "Pro Designer",
      image: Jishnu_image, 
    },
    {
      name: "Tom Sabu",
      github: "https://github.com/tomsabu444",
      linkedin: "https://www.linkedin.com/in/tomsabu444/",
      email: "tomsabu0000@gmail.com",
      description: "Developer",
      image: Tom_image, 
    },
    {
      name: "Justin James Elampurayidom",
      github: "https://github.com/Justin-James-Elampurayidom",
      linkedin: "https://www.linkedin.com/in/justin-james-elampurayidom",
      email: "justinjameselampurayidom@gmail.com",
      description: "Developer",
      image: Jot_image, 
    }, 
  ];

  return (
    <Container>
      <h2>Team Vitality</h2>
      <p>Meet the amazing team behind this project</p>
      <ul>
        {teamMembers.map((member, index) => (
          <Member key={index}>
            <img src={member.image} alt={member.name} />
            <div>
              <strong>{member.name}</strong>    <br /> {member.description}
              <br />

              <a href={member.github} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
       

              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin"></i>
              </a>
        
   
              <a href={`mailto:${member.email}`}>
                <i className="far fa-envelope"></i>
              </a>
            </div>
          </Member>
        ))}
      </ul>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh; /* Set minimum height to the full viewport height */
  padding: 20px;
  text-align: center;

  h2 {
    color: #333;
  }

  p {
    margin-bottom: 20px;
  }
`;

const Member = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    margin-right: 20px;
  }

  div {
    flex: 1;
  }

  a {
    text-decoration: none;
    color: #333;
    margin-right: 10px;
  }

  i {
    font-size: 24px;
  }
`;

export default Credits;