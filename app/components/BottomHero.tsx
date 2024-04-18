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
        <div className="items flex flex-wrap items-center justify-center gap-20">
          {/* first item */}
          <div className="item w-1/6 h-full ">
            <div className="img-container flex items-center justify-center bg-white w-56 h-56 p-4 mb-1 rounded-xl">
              <Image src={Crocs} alt="img" width={200} height={200} />
            </div>
            <h4 className="title mb-1">
              <b>Headset amzing super quality tough thing !!!</b>
            </h4>
            <h4 className="price">
              <b>PRICE:</b> INR{" "}
              <u>
                <i>2,345</i>
              </u>
            </h4>
          </div>

          {/* second item  */}

          <div className="item w-1/6 h-full ">
            <div className="img-container flex items-center justify-center bg-white w-56 h-56 p-4 mb-1 rounded-xl">
              <Image src={Chair} alt="img" width={100} height={100} />
            </div>
            <h4 className="title mb-1">
              <b>Headset amzing super quality tough thing</b>
            </h4>
            <h4 className="price">
              <b>PRICE:</b> INR{" "}
              <u>
                <i>2,345</i>
              </u>
            </h4>
          </div>

          {/* third item */}

          <div className="item w-1/6 h-full">
            <div className="img-container flex items-center justify-center bg-white w-56 h-56 p-4 mb-1 rounded-xl">
              <Image src={Headset} alt="img" width={200} height={200} />
            </div>
            <h4 className="title mb-1">
              <b>Headset amzing super quality tough thing</b>
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
