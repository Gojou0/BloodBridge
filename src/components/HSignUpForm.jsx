import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const AdminSignupForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    organization: '',
    password: '',
    confirmPassword: '',
    userType: 'hospital', // defaulting to hospital
  });
  const navigate =useNavigate()

  const handleHLogin =() =>{
    navigate('/h-login')
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-4">
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Signup Form</h2>
        <div className='flex justify-center items-center'>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block mb-1">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="input-field w-full"
                placeholder="Full Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="input-field w-full"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label htmlFor="phoneNumber" className="block mb-1">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="input-field w-full"
                placeholder="Phone Number"
                required
              />
            </div>
            <div>
              <label htmlFor="organization" className="block mb-1">Organization</label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleInputChange}
                className="input-field w-full"
                placeholder="Organization"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="input-field w-full"
                placeholder="Password"
                required
              />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block mb-1">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleInputChange}
                className="input-field w-full"
                placeholder="Confirm Password"
                required
              />
            </div>
            <div>
              <label htmlFor="userType" className="block mb-1">Signup as</label>
              <select
                id="userType"
                name="userType"
                value={formData.userType}
                onChange={handleInputChange}
                className="input-field w-full"
                required
              >
                <option value="hospital">Hospital</option>
                <option value="ngo">NGO</option>
              </select>
            </div>
            <div>
              <button onClick={handleHLogin} type="submit" className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-300">Signup</button>
            </div>
          </form>
        </div>
        <p className="mt-4 text-center">Already have an account? <a href="/h-login" className="text-blue-500">Login</a></p>
      </div>
    </div>
  );
};

export default AdminSignupForm;
