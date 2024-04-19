"use client"

import React, { useEffect } from 'react';

const pricing: React.FC = () => {
  return (
    <div>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          text-decoration: none;
          list-style-type: none;
        }
        .special-button {
          background: transparent;
          border: 2px solid #000;
          color: #fff;
          padding: 14px 16px;
          border-radius: 5px;
          display: block;
          text-align: center;
          width: 80%;
          margin: 0 auto;
          transition: all 0.5s;
          font-family: 'Fredoka-Medium';
          margin-top: 20px;
          left: 0;
          bottom: -160px;
          position: relative;
        }
        .special-button:hover {
          background-color: #1597ee;
        }
        .special-button.green {
          border: 2px solid #ff5c1c;
        }
        .special-button.green:hover {
          background-color: #ff5c1c;
        }
        .special-button.violet {
          border: 2px solid #de0bd7;
        }
        .special-button.violet:hover {
          background-color: #de0bd7;
        }
        .wrapper {
          width: 94%;
          margin: 0 auto;
        }
        .max-width {
          max-width: 1300px;
          padding: 0 60px;
          margin: auto;
        }
        body {
          background: #f5f5f5;
          color: #f5f5f5;
        }
        #blob {
          background: rgb(195, 195, 195);
          height: 140px;
          width: 140px;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          background: linear-gradient(
            121deg,
            rgba(48, 127, 212, 1) 16%,
            rgba(0, 255, 204, 1) 66%
          );
          animation: rotate 20s infinite;
          z-index: -1;
          transition: all 0.8s linear;
          box-shadow: 0 0 20px 10px rgba(48, 127, 212, 1);
        }
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          50% {
            transform: scale(1, 1.5);
          }
          to {
            transform: rotate(360deg);
          }
        }
        #hero {
          z-index: 1;
          backdrop-filter: blur(90px);
          padding: 80px 0px;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          transition: all 0.3s;
        }
        #hero .content {
          width: 96%;
          margin: 0 auto;
        }
        #hero ul.main {
          width: 96%;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        }
        #hero li.main-list {
          background: rgba(26, 25, 25, 0.2);
          backdrop-filter: blur(200px);
          padding: 33px;
          z-index: 30;
          border-radius: 5px;
          transition: all 0.2s linear;
          position: relative;
          overflow: hidden;
        }
        #hero li.main-list:hover {
          transform: scale(1.2);
        }
        #hero li:last-child {
          margin-right: 0;
        }
        .top_graphics {
          width: 300px;
          height: 300px;
          background: #1597ee;
          position: absolute;
          top: 0;
          right: -37px;
          margin: 0 auto;
          border-radius: 50%;
          z-index: -99;
          transform: translate(0px, -300px);
          transition: all 0.8s;
        }
        .top_graphics.violet {
          background: #de0bd7;
        }
        .top_graphics.green {
          background: #ff5c1c;
        }
        #hero li.main-list:hover .top_graphics {
          transform: translate(-8px, -147px);
        }
        #hero li.main-list:hover .special-button {
          position: relative;
          left: 0;
          bottom: 0;
        }
        #hero li.main-list:hover ul {
          bottom: 0;
        }
        #hero h2 {
          font-family: 'Fredoka-Medium';
          font-size: 28px;
          text-align: center;
        }
        #hero span {
          font-size: 16px;
          font-family: 'Fredoka-Light';
          text-align: center;
          width: 100%;
          display: block;
          margin-bottom: 18px;
        }
        #hero h3.price {
          font-size: 30px;
          font-family: 'Fredoka-Regular';
          font-weight: 700;
          margin-bottom: 28px;
          text-align: center;
        }
        #hero ul ul {
          position: relative;
          bottom: -55px;
          transition: all 0.5s;
        }
        #hero ul li ul li {
          font-family: 'Fredoka-Regular';
          margin-bottom: 5px;
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
        #hero ul li ul li img {
          width: 20px;
          height: 20px;
          margin-right: 8px;
        }
      `}</style>
      
    </div>
  );
};


const Component: React.FC = () => {
  useEffect(() => {
    const blob = document.getElementById('blob');
    const mainList = document.querySelector('#hero li.main-list');
    const hero = document.getElementById('hero');

    const handlePointerMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;

      const blobWidth = blob!.offsetWidth;
      const blobHeight = blob!.offsetHeight;
      const mainListRect = (mainList as HTMLElement).getBoundingClientRect();

      // Check for collision with li.main-list
      const isColliding =
        clientX >= mainListRect.left &&
        clientX <= mainListRect.right &&
        clientY >= mainListRect.top &&
        clientY <= mainListRect.bottom;

      if (isColliding) {
       
      } else {
        
      }

      // Calculate the maximum allowable values
      const maxX = window.innerWidth - blobWidth;
      const maxY = window.innerHeight - blobHeight;

      // Ensure the blob stays within the screen bounds
      const clampedX = Math.min(Math.max(0, clientX - blobWidth / 2), maxX);
      const clampedY = Math.min(Math.max(0, clientY - blobHeight / 2), maxY);

      blob!.animate(
        {
          left: `${clampedX}px`,
          top: `${clampedY}px`,
        },
        { duration: 3000, fill: 'forwards' }
      );
    };

    document.body.onpointermove = handlePointerMove;

    return () => {
      document.body.onpointermove = null; // Cleanup on unmount
    };
  }, );

  return (
    <div>
      <div id="blob"></div>
      <section id="hero" className="max-width">
        <div className="content">
          return (
  <div>
    <div id="blob"></div>
    <section id="hero" className="max-width">
      <div className="content">
        <ul className="main">
          <li className="main-list">
            <div className="top_graphics blue"></div>
            <h2>Freemium</h2>
            <span>Personal use</span>
            <h3 className="price">$0 /month</h3>
            <ul>
              <li><img src="images/checked.png" alt="check" />4 users</li>
              <li><img src="images/checked.png" alt="check" />10 web mails</li>
              <li><img src="images/checked.png" alt="check" />Responsive Websites</li>
              <li><img src="images/checked.png" alt="check" />4 users</li>
              <li><img src="images/checked.png" alt="check" />10 web mails</li>
              <li><img src="images/checked.png" alt="check" />Responsive Websites</li>
            </ul>
            <a href="" className="special-button">Get Now</a>
          </li>
          <li className="main-list">
            <div className="top_graphics blue"></div>
            <h2>Pro</h2>
            <span>50+ team</span>
            <h3 className="price">$13 /month</h3>
            <ul>
              <li><img src="images/checked.png" alt="check" />4 users</li>
              <li><img src="images/checked.png" alt="check" />10 web mails</li>
              <li><img src="images/checked.png" alt="check" />Responsive Websites</li>
              <li><img src="images/checked.png" alt="check" />4 users</li>
              <li><img src="images/checked.png" alt="check" />10 web mails</li>
              <li><img src="images/checked.png" alt="check" />Responsive Websites</li>
            </ul>
            <a href="" className="special-button">Get Now</a>
          </li>
          <li className="main-list">
            <div className="top_graphics blue"></div>
            <h2>Small Team</h2>
            <span>10+ Team</span>
            <h3 className="price">$9 /month</h3>
            <ul>
              <li><img src="images/checked.png" alt="check" />4 users</li>
              <li><img src="images/checked.png" alt="check" />10 web mails</li>
              <li><img src="images/checked.png" alt="check" />Responsive Websites</li>
              <li><img src="images/checked.png" alt="check" />4 users</li>
              <li><img src="images/checked.png" alt="check" />10 web mails</li>
              <li><img src="images/checked.png" alt="check" />Responsive Websites</li>
            </ul>
            <a href="" className="special-button">Get Now</a>
          </li>
        </ul>
      </div>
    </section>
  </div>
);

        </div>
      </section>
    </div>
  );
};

export default Component;
