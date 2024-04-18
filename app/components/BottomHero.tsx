import React from "react";
import Image from "next/image";
import Crocs from "../../public/assets/images/crocs.jpg";
import Headset from "../../public/assets/images/headset.jpg";
import Chair from "../../public/assets/images/chair.jpg";

const BottomHero = () => {
  return (
     <>
      <hr className="border mt-5 mb-5 border-black" />
      <div className="mt-8 bottom_container px-4 md:px-8 lg:px-4 xl:px-4">
        <div className="items flex flex-wrap items-stretch justify-center gap-4 sm:gap-8 md:gap-12 lg:gap-16">
          {/* first item */}
          <div className="item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
            <div className="img-container relative bg-white w-full h-56 p-4 mb-1 rounded-xl overflow-hidden">
              <Image
                src="/assets/images/crocs.jpg"
                alt="img"
                className="w-full h-full"
              />
            </div>
            <h4 className="title mb-1">
              <b>Headset amazing super quality tough thing !!!</b>
            </h4>
            <h4 className="price">
              <b>PRICE:</b> INR{" "}
              <u>
                <i>2,345</i>
              </u>
            </h4>
          </div>

          {/* second item */}
          <div className="item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
            <div className="img-container relative bg-white w-full h-56 p-4 mb-1 rounded-xl overflow-hidden">
              <Image
                src="/assets/images/chair.jpg"
                alt="img"
                className="w-full h-full"s
              />
            </div>
            <h4 className="title mb-1">
              <b>Chair amazing super quality tough thing</b>
            </h4>
            <h4 className="price">
              <b>PRICE:</b> INR{" "}
              <u>
                <i>2,345</i>
              </u>
            </h4>
          </div>

          {/* third item */}
          <div className="item w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6">
            <div className="img-container relative bg-white w-full h-56 p-4 mb-1 rounded-xl overflow-hidden">
              <Image
                src="/assets/images/headset.jpg"
                alt="img"
                className="w-full h-full"
              />
            </div>
            <h4 className="title mb-1">
              <b>Headset amazing super quality tough thing</b>
            </h4>
            <h4 className="price">
              <b>PRICE:</b> INR{" "}
              <u>
                <i>2,345</i>
              </u>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomHero;
