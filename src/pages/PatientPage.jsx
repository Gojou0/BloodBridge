import React from 'react'
import styles from "../style"
import Card from '../components/Card1';
import Navbar from '../components/Navbar1';
import Hero from "../components/Hero1"


const PatientPage = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className=' text-white container mx-auto'>
            <div className="my-5 w-100 flex gap-4">
            <input value={search} type="text" className="bg-transparent border p-2 rounded-lg flex-1 border-blue-400"
            onChange={(e) =>{ 
                setSearch(e.target.value.toLowerCase())
                setTable(bloodDonationData)
            }} 
                placeholder=" Enter Location"/>
            <button className="px-8 bg-blue-500 rounded-lg text-primary font-bold " type="button" id="button-addon2" onClick={()=>handleSearch()}>Search</button>
            </div>
            <button  className="" onClick={getUserLocation} type="button" id="button-addon2">
            <div className="px-20 py-2 bg-blue-500 rounded-lg text-primary font-bold " >
            Search Near Your Location
            </div>
            </button>
      </div>
    <Card />
    
  </div>
  )
}

export default PatientPage