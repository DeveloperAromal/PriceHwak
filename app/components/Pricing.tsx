"use client"

import React, { useState } from "react";
import Button from "./includes/Button";
import classNames from "classnames";

interface PricingProps {
  name: string;
  price: string;
  timeframe: string;
  features: { feature: string; available: boolean }[];
}

const pricingData: PricingProps[] = [
  {
    name: "Basic",
    price: "$0",
    timeframe: "per month",
    features: [
      { feature: "3 product tracking/month", available: true },
      { feature: "sms/email coverage", available: true },
      { feature: "24/7 chat support", available: true },
      { feature: "price history", available: false },
      { feature: "detailed analysis", available: false },
      { feature: "daily 10 scraping", available: false },
    ],
  },
  {
    name: "Standard",
    price: "$9",
    timeframe: "per month",
    features: [
      { feature: "3 product tracking/month", available: true },
      { feature: "sms/email coverage", available: true },
      { feature: "24/7 chat support", available: true },
      { feature: "price history", available: true },
      { feature: "detailed analysis", available: true },
      { feature: "daily 10 scraping", available: false },
    ],
  },
  {
    name: "Premium",
    price: "$13",
    timeframe: "per month",
    features: [
      { feature: "3 product tracking/month", available: true },
      { feature: "sms/email coverage", available: true },
      { feature: "24/7 chat support", available: true },
      { feature: "price history", available: true },
      { feature: "detailed analysis", available: true },
      { feature: "daily 10 scraping", available: true },
    ],
  },
];

const Pricing = () => {
  const [useClient, setUseClient] = useState(false);

  const toggleClient = () => {
    setUseClient(!useClient);
  };

  return (
    <section className="flex justify-center items-center min-h-screen w-full pt-20">
      <div>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="w-40 h-40 absolute top-0 md:right-2/4 rounded-full bg-pink-800 blur">
            .
          </div>
          {pricingData.map((pricing, index) => (
            <PricingCard key={index} {...pricing} useClient={useClient} />
          ))}
        </div>
        <div className="flex items-center justify-center">
          <div className="flex">
            <h3 className="pt-12 lg:text-2xl md:text-2xl sm:text-2xl text-xl">
              Monthly Billing
            </h3>
            <div>
              <div
                onClick={toggleClient}
                className={classNames(
                  "flex w-20 h-10 py-1 px-1 bg-gray-500 m-10 cursor-pointer",
                  { "bg-green-600": useClient }
                )}
              >
                <span
                  className={classNames("h-8 w-8 bg-white", {
                    "ml-10": useClient,
                  })}
                ></span>
              </div>
            </div>
            <h3 className="pt-12 lg:text-2xl md:text-2xl sm:text-2xl text-xl">
              Yearly Billing
            </h3>
            <span className="text-gray-500 text-xl pt-12"> /save 20%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

function PricingCard({
  name,
  price,
  timeframe,
  features,
  useClient,
}: PricingProps & { useClient: boolean }) {
  // Modify pricing based on the useClient flag
  const actualPrice = useClient
    ? parseFloat(price.slice(1)) * 1.2
    : parseFloat(price.slice(1));

  // Define links for each card based on the useClient flag
  const links: { [key: string]: string } = {
    Basic: "/auth/v1/signup",
    Standard: "https://buy.stripe.com/test_aEU15t1r6220f727ss",
    Premium: "https://buy.stripe.com/test_28o3dBfhW0XWcYUcMO",
};


  return (
    <div className="w-80 md:w-80 lg:w-80 mb-8">
      <div
        className={`card_one border-2 border-teal-400 ${
          name === "Standard"
            ? "h-100 relative top-4 pricing-shad-cyan-500"
            : "bg-black pricing-shad-cyan-700"
        } flex flex-col items-center py-4 px-4`}
      >
        <div className="main flex flex-col items-center justify-center mb-8">
          <h4 className="mb-2">{name}</h4>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4">
            ${actualPrice.toFixed(2)}
          </h1>
          <p className="text-sm">{timeframe}</p>
        </div>
        <div className="sub_main mb-8">
          <ul>
            {features.map((feature, index) => (
              <li key={index} className="flex items-center mb-2">
                <div
                  className={
                    feature.available ? "text-green-500" : "text-red-500"
                  }
                >
                  {feature.available ? "✅" : "❌"}
                </div>
                <h5 className="text-sm ml-2">{feature.feature}</h5>
              </li>
            ))}
          </ul>
        </div>
        <div className="bottom_main">
          <Button
            title="Choose Plan"
            href={links[name]} // Use dynamically generated link based on the card name
            className="bg-white text-black py-1 px-2 font-bold rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Pricing;
