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
      <section className="py-8 px-16">
        <div className="top w-full flex flex-col justify-center items-center mb-16">
          <h4 className="text-2xl">Pricing</h4>
          <h2 className="text-5xl font-medium">Right Plan for you</h2>
        </div>

        <div className="bottom w-full h-full flex justify-between items-center">
          {pricingDetails.map((pricing, index) => (
            <div
              key={index}
              className={`productCard ${pricing.title.toLowerCase()} w-1/4 bg-white rounded-3xl`}>
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

              <div className="px-4 py-2 product_choose_btn">
                <Link href="/some-page">
                  <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-block cursor-pointer">
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
