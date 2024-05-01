import React from 'react'
import Button from './includes/Button'

const Pricing = () => {
  const pricingCards = [
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
            { feature: "daily 10 scraping", available: false }
        ]
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
            { feature: "daily 10 scraping", available: false }
        ]
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
            { feature: "daily 10 scraping", available: true }
        ]
    }
];
  return (
    <>
      <section className='p-8 border-2 border-red-500 w-screen h-screen flex flex-col items-center'>
        <div className="top mb-4">
          <h4>Best Option 👇🏻</h4>
        </div>
        <div className="bottom flex items-center justify-evenly w-full">
        {pricingCards.map((card, index) => (
                <div key={index} className="card_one border-2 border-69 bg-70 w-1/5 flex flex-col items-center py-4 px-4">
                    <div className="main flex flex-col items-center justify-center mb-8">
                        <h4 className='mb-2'>{card.name}</h4>
                        <h1 className='text-7xl mb-4'>{card.price}</h1>
                        <p className='text-sm'>{card.timeframe}</p>
                    </div>
                    <div className="sub_main mb-8">
                        <ul>
                            {card.features.map((feature, idx) => (
                                <li key={idx} className='flex items-center mb-2'>
                                    <div className={`w-2.5 h-2.5 ${feature.available ? 'bg-green-600' : 'bg-69'} mr-4 `}></div>
                                    <h5 className='text-sm'>{feature.feature}</h5>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="bottom_main">
                        <Button title='Choose Plan' href='/' className='bg-white text-black py-1 px-2 font-bold rounded-lg'/>
                    </div>
                </div>
            ))}
        </div>
      </section>
    </>
  )
}

export default Pricing