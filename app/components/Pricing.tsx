<<<<<<< HEAD
import React, { useEffect } from "react";

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
    const blob = document.getElementById("blob");
    const mainList = document.querySelector("#hero li.main-list");
    const hero = document.getElementById("hero");

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
        { duration: 3000, fill: "forwards" }
      );
    };

    document.body.onpointermove = handlePointerMove;

    return () => {
      document.body.onpointermove = null; // Cleanup on unmount
    };
  });

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
                      <li>
                        <img src="images/checked.png" alt="check" />4 users
                      </li>
                      <li>
                        <img src="images/checked.png" alt="check" />
                        10 web mails
                      </li>
                      <li>
                        <img src="images/checked.png" alt="check" />
                        Responsive Websites
                      </li>
                      <li>
                        <img src="images/checked.png" alt="check" />4 users
                      </li>
                      <li>
                        <img src="images/checked.png" alt="check" />
                        10 web mails
                      </li>
                      <li>
                        <img src="images/checked.png" alt="check" />
                        Responsive Websites
                      </li>
                    </ul>
                    <a href="" className="special-button">
                      Get Now
                    </a>
                  </li>
                  <li className="main-list">
                    <div className="top_graphics blue"></div>
                    <h2>Pro</h2>
                    <span>50+ team</span>
                    <h3 className="price">$13 /month</h3>
                    <ul>
                      <li>
                        <img src="images/checked.png" alt="check" />4 users
                      </li>
                      <li>
                        <img src="images/checked.png" alt="check" />
                        10 web mails
                      </li>
                      <li>
                        <img src="images/checked.png" alt="check" />
                        Responsive Websites
                      </li>
                      <li>
                        <img src="images/checked.png" alt="check" />4 users
                      </li>
                      <li>
                        <img src="images/checked.png" alt="check" />
                        10 web mails
                      </li>
                      <li>
                        <img src="images/checked.png" alt="check" />
                        Responsive Websites
                      </li>
                    </ul>
                    <a href="" className="special-button">
                      Get Now
                    </a>
                  </li>
                  <li className="main-list">
                    <div className="top_graphics blue"></div>
                    <h2>Small Team</h2>
                    <span>10+ Team</span>
                    <h3 className="price">$9 /month</h3>
                    <ul>
                      <li>
                        <img src="images/checked.png" alt="check" />4 users
                      </li>
                      <li>
                        <img src="images/checked.png" alt="check" />
                        10 web mails
                      </li>
                      <li>
                        <img src="images/checked.png" alt="check" />
                        Responsive Websites
                      </li>
                      <li>
                        <img src="images/checked.png" alt="check" />4 users
                      </li>
                      <li>
                        <img src="images/checked.png" alt="check" />
                        10 web mails
                      </li>
                      <li>
                        <img src="images/checked.png" alt="check" />
                        Responsive Websites
                      </li>
                    </ul>
                    <a href="" className="special-button">
                      Get Now
                    </a>
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
=======
import React from "react";
import Image from "next/image";
import Link from "next/link";

import DisabledCheck from "../../public/assets/images/check_disabled.png";
import EnabledCheck from "../../public/assets/images/check_enabled.png";
import PremiumCheck from "../../public/assets/images/check_premium.png";

const Pricing = () => {
  const pricingDetails = [
    {
      title: "Base",
      cost: "$0",
      timeframe: "monthly",
      explanation:
        "For individual use, for references and communication with other designers.",
      features: [
        { name: "all unique templates", enabled: true },
        { name: "Mailings", enabled: true },
        { name: "Access to Updates", enabled: true },
        { name: "Live chat support", enabled: false },
        { name: "Premium feature", enabled: false },
        { name: "Another feature", enabled: false },
      ],
    },
    {
      title: "Standard",
      cost: "$10",
      timeframe: "monthly",
      explanation:
        "For small businesses and freelancers who need more features.",
      features: [
        { name: "all unique templates", enabled: true },
        { name: "Mailings", enabled: true },
        { name: "Access to Updates", enabled: true },
        { name: "Live chat support", enabled: true },
        { name: "Premium feature", enabled: true, premium: true }, // Using premium:true to indicate the premium image
        { name: "Another feature", enabled: true },
      ],
    },
    {
      title: "Premium",
      cost: "$20",
      timeframe: "monthly",
      explanation:
        "For larger businesses with advanced needs and priority support.",
      features: [
        { name: "all unique templates", enabled: true },
        { name: "Mailings", enabled: true },
        { name: "Access to Updates", enabled: true },
        { name: "Live chat support", enabled: true },
        { name: "Premium feature", enabled: true },
        { name: "Another feature", enabled: true },
      ],
    },
  ];

  return (
    <>
      <section className="py-8">
        <div className="top w-full flex flex-col justify-center items-center mb-16">
          <h4 className="text-2xl">Pricing</h4>
          <h2 className="text-3xl md:text-4xl ld:text-5xl font-medium">Right Plan for you</h2>
        </div>

        <div className="w-full h-full flex flex-wrap justify-center gap-20 items-center">
          {pricingDetails.map((pricing, index) => (
            <div
              key={index}
              className={`productCard ${pricing.title.toLowerCase()} w-80 bg-white rounded-xl`}>
              <div className="px-4 py-2 title_section border-black border-b">
                <h3 className="font-medium">{pricing.title}</h3>
              </div>

              <div className="px-4 py-8 cost_section flex flex-col">
                <div className="price_text ml-8 mb-8 flex items-start">
                  <h3 className="text-6xl mr-6">{pricing.cost}</h3>
                  <h5 className="font-medium text-cyan-500">
                    /{pricing.timeframe}
                  </h5>
                </div>
                <p className="text-sm">{pricing.explanation}</p>
              </div>

              <div className="px-4 py-0 pb-0 feature_section">
                {pricing.features.map((feature, i) => (
                  <div key={i} className="feature flex items-center mb-2">
                    {pricing.title === "Standard" && feature.enabled && (
                      <Image
                        className="mr-2"
                        src={PremiumCheck}
                        alt="premium"
                        width={25}
                        height={25}
                      />
                    )}
                    {!(pricing.title === "Standard" && feature.enabled) && (
                      <Image
                        className="mr-2"
                        src={feature.enabled ? EnabledCheck : DisabledCheck}
                        alt={feature.enabled ? "check" : "cross"}
                        width={25}
                        height={25}
                      />
                    )}
                    <h5>{feature.name}</h5>
                  </div>
                ))}
              </div>

              <div className="px-4 py-2 flex items-center justify-center product_choose_btn">
                <Link href="/some-page">
                  <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl inline-block cursor-pointer">
                    Choose Plan
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Pricing;
>>>>>>> 681e6d9ec8b946f2fd137756ce23f47e1e4995c7
