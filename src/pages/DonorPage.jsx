import React from 'react'
import styles from "../style"
import Navbar from '../components/Navbar1';
import Hero from '../components/Hero1';
import { useState } from 'react';
import bloodDonationData from '../DummyData';
import { useNavigate } from 'react-router-dom';

const DonorPage = () => {
    const [userLocation, setUserLocation] = useState({});
  const [search,setSearch] = useState("")
  const [table,setTable] = useState(bloodDonationData)

  const handleSearch = () =>{
    console.log(search)
    setTable(table.filter((data) => 
      data.address.toLowerCase().includes(search) || data.name.toLowerCase().includes(search)
    ))
    // setTable(TableData)
  }

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log(position)
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
           axios.get(`https://api.geoapify.com/v1/geocode/reverse?lat=${userLocation.latitude}&lon=${userLocation.longitude}&apiKey=7f5ed6a789f24eb4b8c3c41b593bbe1d`)
          .then(function (response) {
           setSearch(response.data.features[0].properties.city)
           console.log(search);
           handleSearch()
          })
          .catch(function (error) {
            alert('cant get ur current Location',error);
          })
        }
      )
    }
    else {
      console.error('Geolocation is not supported by this browser.');
    }
  };
  return (
    <div className="bg-primary w-full min-h-screen overflow-hidden">
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
    {/* <Card /> */}

    <div className="container mx-auto flex flex-wrap sm:justify-start justify-center  w-full text-white feedback-container relative z-[1]">
    {table.map((card) => (
        <div className="flex justify-start  flex-col p-5 py-10 rounded-[20px]  w-[350px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
        {/* <img src={quotes} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" /> */}
        <div className="font-poppins text-lg md:text-xl  lg:text-2xl leading-[32.4px] text-white font-bold mb-3">
          {card.name}
        </div>
        <div className='text-secondary/80 text-lg mb-3 font-semi-bold'>
          {card.blood.join("  ")}
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
    </div>x
  </div>
  )
}

export default DonorPage