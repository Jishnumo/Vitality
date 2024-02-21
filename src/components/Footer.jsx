import React from "react";
import styled from "styled-components";


const Footer = () => {
  return (
    <Container>
      <footer className="footer">
        <div className="footer-container">
          <div className="item1">
            
          </div>

          <div className="item2">
            <span style={{ paddingRight: 5 }}>Copyright </span>
            <FontAwesomeIcon icon={faCopyright} />{" "}
            <span style={{ paddingLeft: 5 }}>
              {new Date().getFullYear()} YourCompany. All Rights Reserved.
            </span>
          </div>
          <a
            href="https://github.com/sudiptob2/simple-react-footer"
            target="_blank"
            className="item3"
          >
         
          </a>
          <a href="http://fb.com/sudiptob2" target="_blank" className="item4">
        
          </a>
          <a href="https://www.youtube.com/" target="_blank" className="item5">
        
          </a>

       
        </div>
      </footer>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  a {
    color: inherit;
  }
  .item1 {
    border: none;
    background-color: inherit;
    color: #6bd1f0;
    padding-left: 10px;
    font-size: 20px;
    display: flex;
    justify-content: left;
    align-items: center;
  }
  .item1:hover {
    text-decoration: none;
    color: #48976a;
  }
  .item1:focus {
    outline: 0;
  }
  .item2 {
    background: rgba(49, 49, 54, 0.993);
    color: rgb(190, 190, 190);
    margin: 1px;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .item3 {
    font-size: 20px;
    background: #292a30;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item3:hover {
    background-color: #000000;
    transition: 0.4s;
  }
  .item4 {
    font-size: 20px;
    background: #25252b;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item4:hover {
    background-color: #4267b2;
    transition: 0.4s;
  }
  .item5 {
    font-size: 20px;
    background: #202025;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .item5:hover {
    background-color: #da0e0e;
    transition: 0.4s;
  }

  .footer-container {
    color: aliceblue;
    text-align: center;
    background-color: rgba(49, 49, 54, 0.993);
    font-size: 15px;
    width: 100%;
    height: 4rem;
    display: grid;
    grid-template-columns: 3fr 6fr 1fr 1fr 1fr;
  }

  /* Extra small devices (phones, 600px and down) */
  @media only screen and (max-width: 600px) {
    .item1 {
      font-size: 12px;
      padding-left: 3px;
    }
    .item2 {
      font-size: 7px;
    }
    .item3,
    .item4,
    .item5 {
      font-size: 12px;
    }
  }

  /* Small devices (portrait tablets and large phones, 600px and up) */
  @media only screen and (min-width: 600px) {
    .item1 {
      font-size: 14px;
      padding-left: 5px;
    }
    .item2 {
      font-size: 9px;
    }
    .item3,
    .item4,
    .item5 {
      font-size: 14px;
    }
  }

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    .item1 {
      font-size: 16px;
      padding-left: 6px;
    }
    .item2 {
      font-size: 11px;
    }
    .item3,
    .item4,
    .item5 {
      font-size: 16px;
    }
  }

  /* Large devices (laptops/desktops, 992px and up) */
  @media only screen and (min-width: 992px) {
    .item1 {
      font-size: 18px;
      padding-left: 8px;
    }
    .item2 {
      font-size: 13px;
    }
    .item3,
    .item4,
    .item5 {
      font-size: 18px;
    }
  }

  /* Extra large devices (large laptops and desktops, 1200px and up) */
  @media only screen and (min-width: 1200px) {
    .item1 {
      font-size: 20px;
      padding-left: 10px;
    }
    .item2 {
      font-size: 15px;
    }
    .item3,
    .item4,
    .item5 {
      font-size: 20px;
    }
  }
`;



