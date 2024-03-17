import React from 'react'
import DonorPage from "./DonorPage";
import PatientPage from "./PatientPage";
import HospitalPage from "./HospitalPage";
import { useState } from 'react';

const DashBoard = () => {
    const [userType, setUserType] = useState("hospital")

  return (
    <div>
    {userType === "donor" && <DonorPage />}
    {userType === "patient" && <PatientPage />}
    {userType === "hospital" && <HospitalPage />}
  </div>
  )
}

export default DashBoard;