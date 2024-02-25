import React from "react";
import styled, { keyframes } from "styled-components";

// Define keyframes
const ani1 = keyframes`
  0% {
    background-image: url(main22.webp);
    background-position: center;
    background-size: cover;
    height: 500px;
    width: 400px;
    border-radius: 10px;
  }
    5% {
    background-image: url("https://media.discordapp.net/attachments/1207033542677372928/1211205964498210896/cvuk-16-black.png?ex=65ed5a75&is=65dae575&hm=0e7940b73a174b70292de80bb6909534b514925aed2733ac4a203233af7acabb&=&format=webp&quality=lossless&width=496&height=701");
    background-position: center;
    background-size: cover;
    height: 500px;
    width: 400px;
    border-radius: 10px;
  }
  20% {
    background-image: url("https://media.discordapp.net/attachments/1207033542677372928/1211205708167643176/no-experience-resume-sample.png?ex=65ed5a37&is=65dae537&hm=3c2bca207ce8f62af04fc7168c39cbd6f952e2978ca329c77d7644a70080d197&=&format=webp&quality=lossless&width=495&height=700");
    background-position: center;
    background-size: cover;
  }
  40% {
    background-image: url("https://media.discordapp.net/attachments/1207033542677372928/1211205163554181191/canva-minimalist-white-and-grey-professional-resume-osicIupI94A.png?ex=65ed59b6&is=65dae4b6&hm=90d365e10397cda6b26640348dc6c5b89134a40dbe5288f1a2b9bcc3bb74a0c6&=&format=webp&quality=lossless&width=495&height=701");
    background-position: top;
    background-size: cover;
  }
  60% {
    background-image: url("https://media.discordapp.net/attachments/1207033542677372928/1211026083315589230/onyx.jpg?ex=65ecb2ee&is=65da3dee&hm=4c380488dfea5846562c792dff46904da10c0b71ce38a5bb8b71ccfb60c3c023&=&format=webp&width=496&height=701");
    background-position: bottom;
    background-size: cover;
  }
  80% {
    background-image: url("https://media.discordapp.net/attachments/1207033542677372928/1211026083026178181/pikachu.jpg?ex=65ecb2ed&is=65da3ded&hm=9e52568c418b6e733bbbda9fa81bf8d7dbee06b2e088eda6cb7153eaef077e74&=&format=webp&width=496&height=701");
    background-position: top;
    background-size: cover;
  }
  95% {
    background-image: url("https://media.discordapp.net/attachments/1207033542677372928/1211205964498210896/cvuk-16-black.png?ex=65ed5a75&is=65dae575&hm=0e7940b73a174b70292de80bb6909534b514925aed2733ac4a203233af7acabb&=&format=webp&quality=lossless&width=496&height=701");
    background-position: center;
    background-size: cover;
    height: 500px;
    width: 400px;
    border-radius: 10px;
  }
  100% {
    background-image: url("https://media.discordapp.net/attachments/1207033542677372928/1211205964498210896/cvuk-16-black.png?ex=65ed5a75&is=65dae575&hm=0e7940b73a174b70292de80bb6909534b514925aed2733ac4a203233af7acabb&=&format=webp&quality=lossless&width=496&height=701");
    background-position: center;
    background-size: cover;
    height: 500px;
    width: 400px;
    border-radius: 10px;
  }
  button{
    padding:10px 20px;
  }

`;

// Styled main component
const Main = styled.main`
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

// Styled mnimg component with animation
const Mnimg = styled.div`
  animation: ${ani1} 8s infinite;
  box-shadow: 6px 6px 18px black;
  margin-right: 20px; /* Add margin to create space between image and text */
`;

// Styled heading
const Hdg = styled.div`
  font-size: 1.6rem;
  font-style: var(--main-font);
  color: black;
  text-align: center;
`;

// Styled detail section
const Detail = styled.div`
  margin-top: 1rem;
  max-width: 500px;
  font-size: 1.2rem;
  color: rgba(83, 55, 55, 0.851);
  text-align: center;
`;

const TemplatePage = ({ onSelectTemplate }) => {
  return (
    <Main>
      <Mnimg />
      <div className="import">
        <Hdg>
          Crafting Your Professional Story: <span>Resume Builder</span> <br />{" "}
          Savings
        </Hdg>
        <Detail>
          Crafting Your Professional Story: Resume Builder" is a comprehensive
          guide to creating a standout resume. It covers contact information,
          professional summary, work experience, education, skills,
          achievements, affiliations, projects, references, and additional
          information
        </Detail>
        <div>
          <button className="check">Create</button>
        </div>
      </div>
    </Main>
  );
};

export default TemplatePage;
