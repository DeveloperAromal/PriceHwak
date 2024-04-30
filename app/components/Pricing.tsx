import React from 'react'

const Pricing = () => {
  return (
    <>
      <section className='p-8 border-2 border-red-500 w-screen h-screen flex flex-col items-center'>
        <div className="top">
          <h4>Best Option</h4>
        </div>
        <div className="bottom flex items-center justify-between w-full">
          <div className="card_one border-2 border-red-500 w-1/5 flex flex-col items-center">
            <div className="main flex flex-col items-center justify-center">
              <h4>Basic</h4>
              <h1>$0</h1>
              <p>per month</p>
            </div>
            <div className="sub_main">
              <ul>
                <li>
                  <div className='w-2.5 h-2.5 bg-green-600'></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing