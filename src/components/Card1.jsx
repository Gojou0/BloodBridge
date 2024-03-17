import React from 'react'
import bloodDonationData from "../DummyData"

const Card = () => {
  return (
    <div>
        <div className='flex justify-center flex-nowrap'>
        {/* <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
          {bloodDonationData.map((card) => <FeedbackCard key={card.id} {...card} />)}
        </div> */}

      <div className="container mx-auto flex flex-wrap sm:justify-start justify-center  w-full text-white feedback-container relative z-[1]">
          {bloodDonationData.map((card) => (
            <div className="flex justify-start  flex-col p-5 py-10 rounded-[20px]  w-[350px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
            {/* <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" /> */}
            <div className="font-poppins text-lg md:text-xl  lg:text-2xl leading-[32.4px] text-white font-bold mb-3">
              {card.name}
            </div>
            <div className='flex'>
              
              <div>
              </div>
              <div className='text-white/80 text-sm'>
              {card.address}
              </div>
            </div>
            <div className='mt-3 text-xs'>
              {card.contactNo}
            </div>
        
            
          </div>
          ))}
        </div>
        </div>
    </div>
  )
}

export default Card