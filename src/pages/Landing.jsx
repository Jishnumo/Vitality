// React
import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import StarsButton from "../components/StartsButton";
import ResumePopup from "../components/ResumePopup"; // Import the popup component

const Landing = () => {
  const [showPopup, setShowPopup] = useState(false); // State to manage the popup visibility

  const handleCreateResume = () => {
    setShowPopup(true); // Show the popup when "Create resume" button is clicked
  };

  const handleClosePopup = () => {
    setShowPopup(false); // Close the popup
  };
  
  return (
    <Container>
      <div className="header">
        {/* floating squares */}
        <div className="square s1"></div>
        <div className="square s2"></div>
        <div className="square s3"></div>
        <div className="square s4"></div>
        <div className="square s5"></div>
        {/* title */}
        <div className="title-container">
          <h1 className="title">Vitality Resume</h1>
        </div>
        {/* animation */}
        <div className="typewriter">
          <div className="slide">
            <i></i>
          </div>
          <div className="paper"></div>
          <div className="keyboard"></div>
        </div>
        {/* subtitle */}
        <p className="description">Create your resume to build your dreams!</p>
        {/* custom button */}

        <div className="link" onClick={handleCreateResume}>

          <StarsButton title={"Create resume"} />
        </div>
          {/* Render the popup if showPopup state is true */}
      {showPopup && <ResumePopup onClose={handleClosePopup} />}
      </div>
    </Container>
  );
};

export default Landing;

const Container = styled.div`
  .header {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100vh;
    padding: 0 2rem;
    background: #222222cd;
  }
  .header .title-container {
    color: #92a0b5;
    z-index: 20;
    padding-bottom: 30px;
  }
  .header .title-container .title {
    font-size: 5rem;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    animation: typing 2s;
  }
  .header .description {
    z-index: 10;
    word-wrap: break-word;
    padding-top: 2rem;
    font-size: 1.1rem;
    text-align: center;
    color: #fffbf7;
  }
  .header .link {
    margin-top: 2rem;
  }
  @keyframes animation-home {
    0%,
    100% {
      transform: translateY(0px);
    }
    20%,
    80% {
      transform: translateY(-10px);
    }
    40%,
    60% {
      transform: translateY(10px);
    }
  }

  .header .square {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 20px;
    position: absolute;
    backdrop-filter: blur(5px);
    z-index: 0;
    animation: animation-home 4s cubic-bezier(0.25, 0.1, 0.25, 1) infinite;
  }

  .header .square.s1 {
    left: 20vw;
    top: 100px;
    width: 60px;
    height: 60px;
  }
  .header .square.s2 {
    right: 12.5vw;
    top: 450px;
    width: 140px;
    height: 140px;
    animation-delay: 1s;
    border-radius: 15px;
  }
  .header .square.s3 {
    right: 25vw;
    top: 120px;
    width: 50px;
    height: 50px;
    animation-delay: 2s;
    border-radius: 10px;
  }
  .header .square.s4 {
    left: 5vw;
    top: 320px;
    width: 100px;
    height: 100px;
    animation-delay: 1.5s;
  }
  .header .square.s5 {
    border-radius: 10px;
    left: 14vw;
    top: 70vh;
    width: 80px;
    height: 80px;
    animation-delay: 2.5s;
  }
  @media screen and (max-width: 650px) {
    .header .title-container .title {
      font-size: 3.25rem;
    }
    .header .description {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 450px) {
    .header {
      padding: 0;
    }
    .header .title-container .title {
      font-size: 2.35rem;
    }
    .header .description {
      font-size: 0.9rem;
    }
  }
  @keyframes typing {
    from {
      width: 0;
    }
  }
  .typewriter {
    --blue: #5c86ff;
    --blue-dark: #275efe;
    --key: #fff;
    --paper: #eef0fd;
    --text: #d3d4ec;
    --tool: #fbc56c;
    --duration: 3s;
    position: relative;
    -webkit-animation: bounce05 var(--duration) linear infinite;
    animation: bounce05 var(--duration) linear infinite;
  }
  .typewriter .slide {
    width: 92px;
    height: 20px;
    border-radius: 3px;
    margin-left: 14px;
    transform: translateX(14px);
    background: linear-gradient(var(--blue), var(--blue-dark));
    -webkit-animation: slide05 var(--duration) ease infinite;
    animation: slide05 var(--duration) ease infinite;
  }
  .typewriter .slide:before,
  .typewriter .slide:after,
  .typewriter .slide i:before {
    content: "";
    position: absolute;
    background: var(--tool);
  }
  .typewriter .slide:before {
    width: 2px;
    height: 8px;
    top: 6px;
    left: 100%;
  }
  .typewriter .slide:after {
    left: 94px;
    top: 3px;
    height: 14px;
    width: 6px;
    border-radius: 3px;
  }
  .typewriter .slide i {
    display: block;
    position: absolute;
    right: 100%;
    width: 6px;
    height: 4px;
    top: 4px;
    background: var(--tool);
  }
  .typewriter .slide i:before {
    right: 100%;
    top: -2px;
    width: 4px;
    border-radius: 2px;
    height: 14px;
  }
  .typewriter .paper {
    position: absolute;
    left: 24px;
    top: -26px;
    width: 40px;
    height: 46px;
    border-radius: 5px;
    background: var(--paper);
    transform: translateY(46px);
    -webkit-animation: paper05 var(--duration) linear infinite;
    animation: paper05 var(--duration) linear infinite;
  }
  .typewriter .paper:before {
    content: "";
    position: absolute;
    left: 6px;
    right: 6px;
    top: 7px;
    border-radius: 2px;
    height: 4px;
    transform: scaleY(0.8);
    background: var(--text);
    box-shadow: 0 12px 0 var(--text), 0 24px 0 var(--text), 0 36px 0 var(--text);
  }
  .typewriter .keyboard {
    width: 120px;
    height: 56px;
    margin-top: -10px;
    z-index: 1;
    position: relative;
  }
  .typewriter .keyboard:before,
  .typewriter .keyboard:after {
    content: "";
    position: absolute;
  }
  .typewriter .keyboard:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 7px;
    background: linear-gradient(135deg, var(--blue), var(--blue-dark));
    transform: perspective(10px) rotateX(2deg);
    transform-origin: 50% 100%;
  }
  .typewriter .keyboard:after {
    left: 2px;
    top: 25px;
    width: 11px;
    height: 4px;
    border-radius: 2px;
    box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key),
      60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key),
      22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key),
      60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
    -webkit-animation: keyboard05 var(--duration) linear infinite;
    animation: keyboard05 var(--duration) linear infinite;
  }
  @keyframes bounce05 {
    85%,
    92%,
    100% {
      transform: translateY(0);
    }
    89% {
      transform: translateY(-4px);
    }
    95% {
      transform: translateY(2px);
    }
  }
  @keyframes slide05 {
    5% {
      transform: translateX(14px);
    }
    15%,
    30% {
      transform: translateX(6px);
    }
    40%,
    55% {
      transform: translateX(0);
    }
    65%,
    70% {
      transform: translateX(-4px);
    }
    80%,
    89% {
      transform: translateX(-12px);
    }
    100% {
      transform: translateX(14px);
    }
  }
  @keyframes paper05 {
    5% {
      transform: translateY(46px);
    }
    20%,
    30% {
      transform: translateY(34px);
    }
    40%,
    55% {
      transform: translateY(22px);
    }
    65%,
    70% {
      transform: translateY(10px);
    }
    80%,
    85% {
      transform: translateY(0);
    }
    92%,
    100% {
      transform: translateY(46px);
    }
  }
  @keyframes keyboard05 {
    5%,
    12%,
    21%,
    30%,
    39%,
    48%,
    57%,
    66%,
    75%,
    84% {
      box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key),
        60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key),
        22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key),
        60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
    }
    9% {
      box-shadow: 15px 2px 0 var(--key), 30px 0 0 var(--key),
        45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key),
        90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key),
        52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key),
        83px 10px 0 var(--key);
    }
    18% {
      box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key),
        60px 2px 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key),
        22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key),
        60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
    }
    27% {
      box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key),
        60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key),
        22px 12px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key),
        60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
    }
    36% {
      box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key),
        60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key),
        22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 12px 0 var(--key),
        60px 12px 0 var(--key), 68px 12px 0 var(--key), 83px 10px 0 var(--key);
    }
    45% {
      box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key),
        60px 0 0 var(--key), 75px 0 0 var(--key), 90px 2px 0 var(--key),
        22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key),
        60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
    }
    54% {
      box-shadow: 15px 0 0 var(--key), 30px 2px 0 var(--key),
        45px 0 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key),
        90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key),
        52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key),
        83px 10px 0 var(--key);
    }
    63% {
      box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key),
        60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key),
        22px 10px 0 var(--key), 37px 10px 0 var(--key), 52px 10px 0 var(--key),
        60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 12px 0 var(--key);
    }
    72% {
      box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key),
        45px 2px 0 var(--key), 60px 0 0 var(--key), 75px 0 0 var(--key),
        90px 0 0 var(--key), 22px 10px 0 var(--key), 37px 10px 0 var(--key),
        52px 10px 0 var(--key), 60px 10px 0 var(--key), 68px 10px 0 var(--key),
        83px 10px 0 var(--key);
    }
    81% {
      box-shadow: 15px 0 0 var(--key), 30px 0 0 var(--key), 45px 0 0 var(--key),
        60px 0 0 var(--key), 75px 0 0 var(--key), 90px 0 0 var(--key),
        22px 10px 0 var(--key), 37px 12px 0 var(--key), 52px 10px 0 var(--key),
        60px 10px 0 var(--key), 68px 10px 0 var(--key), 83px 10px 0 var(--key);
    }
  }
`;
