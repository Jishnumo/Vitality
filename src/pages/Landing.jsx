// React
import React from 'react'
import { Link } from 'react-router-dom'
// CSS
import './Header.scss'
// components
import StarsButton from '../startsButton/StartsButton'

const Landing = () => {
    return (
        <div className="header">
            {/* floating squares */}
            <div className="square s1"></div>
            <div className="square s2"></div>
            <div className="square s3"></div>
            <div className="square s4"></div>
            <div className="square s5"></div>
            {/* title */}
            <div className="title-container">
                <h1 className='title'>betteresume.</h1>
            </div>
            {/* animation */}
            <div className="typewriter">
                <div className="slide"><i></i></div>
                <div className="paper"></div>
                <div className="keyboard"></div>
            </div>
            {/* subtitle */}
            <p className='description'>Start now and create your perfect ✨resume✨ to achieve your career goals!</p>
            {/* custom button */}
            <Link
                to='/resume'
                className='link'
            >
                <StarsButton title={'Start now'} />
            </Link>
        </div>
    )
}

export default Landing

const Container = styled.div`
.custom-btn2 {
  position: relative;
  padding: 12px 35px;
  background: #92A0B5;
  font-size: 17px;
  font-weight: 500;
  color: #263238;
  border: 3px solid #92A0B5;
  border-radius: 8px;
  box-shadow: 0 0 0 #6c798e;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  box-shadow: 0px 0px 15px -7px rgba(0, 0, 0, 0.75);
  outline: none;
}

.star-1 {
  position: absolute;
  top: 20%;
  left: 20%;
  width: 25px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 1s cubic-bezier(0.05, 0.83, 0.43, 0.96);
}

.star-2 {
  position: absolute;
  top: 45%;
  left: 45%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-3 {
  position: absolute;
  top: 40%;
  left: 40%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 1s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-4 {
  position: absolute;
  top: 20%;
  left: 40%;
  width: 8px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 0.8s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-5 {
  position: absolute;
  top: 25%;
  left: 45%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 0.6s cubic-bezier(0, 0.4, 0, 1.01);
}

.star-6 {
  position: absolute;
  top: 5%;
  left: 50%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 0 #fffdef);
  z-index: -5;
  transition: all 0.8s ease;
}

.custom-btn2:hover {
  background: transparent;
  color: #92A0B5;
  box-shadow: 0 0 25px #5f6978;
}

.custom-btn2:hover .star-1 {
  position: absolute;
  top: -80%;
  left: -30%;
  width: 25px;
  height: auto;
  filter: drop-shadow(0 0 10px #fffdef);
  z-index: 2;
}

.custom-btn2:hover .star-2 {
  position: absolute;
  top: -25%;
  left: 10%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 10px #fffdef);
  z-index: 2;
}

.custom-btn2:hover .star-3 {
  position: absolute;
  top: 55%;
  left: 25%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 10px #fffdef);
  z-index: 2;
}

.custom-btn2:hover .star-4 {
  position: absolute;
  top: 30%;
  left: 80%;
  width: 8px;
  height: auto;
  filter: drop-shadow(0 0 10px #fffdef);
  z-index: 2;
}

.custom-btn2:hover .star-5 {
  position: absolute;
  top: 25%;
  left: 115%;
  width: 15px;
  height: auto;
  filter: drop-shadow(0 0 10px #fffdef);
  z-index: 2;
}

.custom-btn2:hover .star-6 {
  position: absolute;
  top: 5%;
  left: 60%;
  width: 5px;
  height: auto;
  filter: drop-shadow(0 0 10px #fffdef);
  z-index: 2;
}

.fil0 {
  fill: #FFFDEF;
}/*# sourceMappingURL=StarsButton.css.map */
`;
