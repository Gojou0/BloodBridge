import React from 'react'
import styles from '../style'
import Navbar from "../components/Navbar1"
import bloodDonationData from '../DummyData'

const HospitalPage = () => {
  return (
    <div className="bg-primary w-full min-h-screen overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
            Welcome {" "}
            <span className="text-gradient">AIIMS</span>{" "}
          </h1>
          
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
          
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        {/* <img src={robot} alt="billing" className="w-[100%] h-[100%] relative z-[5]" /> */}
          
        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      {/* <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div> */}
    </section>
      <div className=' text-white flex-wrap font-semibold container mx-auto justify-center md:justify-start flex mt-16 gap-5'>
      <div className='min-w-[300px] feedback-card p-5  py-10 rounded-lg'>
            <div className=' text-xl '>
              USAGE PER WEEK
            </div>
            <div className='text-5xl text-secondary'>
              450 
              <span className=' text-sm text-white'> unit</span>
            </div>
        </div>
        <div className='min-w-[300px] feedback-card p-5  py-10 rounded-lg'>
            <div className=' text-xl '>
              TOTAL BLOOD
            </div>
            <div className='text-5xl text-secondary'>
              5600 
              <span className=' text-sm text-white'> unit</span>
            </div>
        </div>
        <div className='min-w-[300px] feedback-card p-5  py-10 rounded-lg'>
            <div className=' text-xl '>
              USED BLOOD
            </div>
            <div className='text-5xl text-secondary'>
              3600 
              <span className=' text-sm text-white'> unit</span>
            </div>
        </div>
        <div className='min-w-[300px] feedback-card p-5  py-10 rounded-lg'>
            <div className=' text-xl '>
              LEFT BLOOD
            </div>
            <div className='text-5xl text-secondary'>
              2000 
              <span className=' text-sm text-white'> unit</span>
            </div>
        </div>
      </div>
      <div className=' text-primary  font-semibold container mx-auto flex my-7 gap-5 justify-center md:justify-start'>
        <button className='bg-secondary px-3 md:px-5 py-2 rounded-lg'>
            Add Blood Camp
        </button>
        <button className='bg-secondary  px-3 md:px-5 py-2 rounded-lg'>
          Remove Blood Camp
        </button>
      </div>

      <div className='container mx-auto border-t  border-secondary/10'>
        <div className=' tracking-widest text-center font-bold text-xl lg:text-3xl my-5 mt-10 text-gradient'>
          Other Hospitals Blood Status
        </div>
        <div className=' flex flex-wrap gap-2 mb-20 justify-center md:justify-start'>
          {bloodDonationData.map((data) => (
            <div className={ `bg-black-gradient-2 py-4 px-8 w-[180px] lg:w-[230px] rounded-lg  `} >
              <div className={`border-[4px] rounded mr-20 ${data.avail ? "border-green-500" : "border-red-500"} `}> </div>
              <div className=' text-lg mt-2 text-white'>
              {data.name}
              </div>
              
            </div>
          ))}
          </div>
      </div>
  </div>
  )
}

export default HospitalPage