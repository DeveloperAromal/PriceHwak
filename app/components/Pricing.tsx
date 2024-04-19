"use client"

import React, { useEffect } from 'react';

const pricing: React.FC = () => {
  return (
    <div>
      <style>{`
* {
  @apply box-border no-underline list-none m-0 p-0;
}
.special-button {
  @apply text-white block text-center w-[80] transition-all duration-[0.5s] relative mt-5 mx-auto my-0 px-4 py-3.5 rounded-[5px] border-2 border-solid border-black left-0 -bottom-40 hover:bg-[#1597ee];
  background: transparent;
  font-family: "Fredoka-Medium";
}
.special-button.green {
  @apply border-2 border-solid border-[#ff5c1c] hover:bg-[#ff5c1c];
}
.special-button.violet {
  @apply border-2 border-solid border-[#de0bd7] hover:bg-[#de0bd7];
}
.wrapper {
  @apply w-[94] mx-auto my-0;
}
.max-width {
  @apply max-w-[1300px] m-auto px-[60px] py-0;
}
body {
  @apply text-neutral-100;
  background: #f5f5f5;
}
#blob {
  @apply h-[140px] w-[140px] absolute translate-x-[-50] translate-y-[-50] animate-[rotate_20s_infinite] z-[-1] transition-all duration-[0.8s] ease-linear shadow-[0_0_20px_10px_rgba(48,127,212,1)] rounded-[50] left-[50] top-[50];
  background: rgb(195, 195, 195);
  background: linear-gradient(
    121deg,
    rgba(48, 127, 212, 1) 16,
    rgba(0, 255, 204, 1) 66
  );
}
@keyframes rotate {
  from {
    @apply rotate-0;
  }
  50 {
    @apply scale-x-100 scale-y-150;
  }
  to {
    @apply rotate-[360deg];
  }
}
#hero {
  @apply z-[1] backdrop-blur-[90px] flex justify-center items-center h-screen transition-all duration-[0.3s] px-0 py-20;
}
#hero .content {
  @apply w-[96] mx-auto my-0;
}
#hero ul.main {
  @apply w-[96] flex items-center justify-evenly mx-auto my-0;
}
#hero li.main-list {
  @apply backdrop-blur-[200px] z-30 transition-all duration-[0.2s] ease-linear relative overflow-hidden p-[33px] rounded-[5px] hover:scale-[1.2];
  background: rgba(26, 25, 25, 0.2);
}
#hero li:last-child {
  @apply mr-0;
}
.top_graphics {
  @apply w-[300px] h-[300px] absolute right-[-37px] z-[-99] translate-x-0 translate-y-[-300px] transition-all duration-[0.8s] mx-auto my-0 rounded-[50] top-0;
  background: #1597ee;
}
.top_graphics.violet {
  background: #de0bd7;
}
.top_graphics.green {
  background: #ff5c1c;
}
#hero li.main-list:hover .top_graphics {
  @apply -translate-x-2 translate-y-[-147px];
}
#hero li.main-list:hover .special-button {
  @apply relative left-0 bottom-0;
}
#hero li.main-list:hover ul {
  @apply bottom-0;
}
#hero h2 {
  @apply text-[28px] text-center;
  font-family: "Fredoka-Medium";
}
#hero span {
  @apply text-base text-center w-[100] block mb-[18px];
  font-family: "Fredoka-Light";
}
#hero h3.price {
  @apply text-3xl font-bold text-center mb-7;
  font-family: "Fredoka-Regular";
}
#hero ul ul {
  @apply relative bottom-[-55px] transition-all duration-[0.5s];
}
#hero ul li ul li {
  @apply flex items-center mb-[5px] mb-5;
  font-family: "Fredoka-Regular";
}
#hero ul li ul li img {
  @apply w-5 h-5 mr-2;
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
