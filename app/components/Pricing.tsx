import React from 'react'
import Button from './includes/Button'

const Pricing = () => {
  return (
    <>
      <section className='p-8 border-2 border-red-500 w-screen h-screen flex flex-col items-center'>
        <div className="top mb-12">
          <h4>Best Option</h4>
        </div>
        <div className="bottom flex items-center justify-between w-full">
          <div className="card_one border-2 border-69 bg-70 w-1/5 flex flex-col items-center py-2 px-4">
            <div className="main flex flex-col items-center justify-center mb-8">
              <h4 className='mb-2'>Basic</h4>
              <h1 className='text-7xl mb-4'>$0</h1>
              <p className='text-sm'>per month</p>
            </div>
            <div className="sub_main mb-8">
              <ul>
                <li className='flex items-center mb-2'>
                  <div className='w-2.5 h-2.5 bg-green-600 mr-4 '></div>
                  <h5 className='text-sm'>3 product tracking/month</h5>
                </li>
                <li className='flex items-center mb-2'>
                  <div className='w-2.5 h-2.5 bg-green-600 mr-4'></div>
                  <h5 className='text-sm'>sms/email coverage</h5>
                </li>
                <li className='flex items-center mb-2'>
                  <div className='w-2.5 h-2.5 bg-green-600 mr-4'></div>
                  <h5 className='text-sm'>24/7 chat support</h5>
                </li>
                <li className='flex items-center mb-2'>
                  <div className='w-2.5 h-2.5 bg-green-600 mr-4'></div>
                  <h5 className='text-sm'>price history</h5>
                </li>
                <li className='flex items-center mb-2'>
                  <div className='w-2.5 h-2.5 bg-green-600 mr-4'></div>
                  <h5 className='text-sm'>detailed analysis</h5>
                </li>
                <li className='flex items-center mb-2'>
                  <div className='w-2.5 h-2.5 bg-green-600 mr-4'></div>
                  <h5 className='text-sm'>daily 10 scraping</h5>
                </li>
              </ul>
            </div>

            <div className="bottom_main">
              <Button title='Choose Plan' href='/' className='bg-white text-black py-1 px-2 font-bold rounded-lg'/>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing