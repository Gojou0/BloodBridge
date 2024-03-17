import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'donor', // defaulting to donor
  });
  const navigate = useNavigate()

  const handleDLogin = () =>{
    navigate('/d-dashboard')
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
        <h2 className="text-2xl font-bold mb-6 text-center">Login Form</h2>
        <div className='flex justify-center items-center'>
          <form onSubmit={handleSubmit} className="space-y-4">
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
              <label htmlFor="userType" className="block mb-1">Login as</label>
              <select
                id="userType"
                name="userType"
                value={formData.userType}
                onChange={handleInputChange}
                className="input-field w-full"
                required
              >
                <option value="donor">Donor</option>
                <option value="receiver">Receiver</option>
              </select>
            </div>
            <div>
              <button onClick={handleDLogin} type="submit" className="w-full bg-blue-500 text-white rounded-md py-2 hover:bg-blue-600 transition duration-300">Login</button>
            </div>
          </form>
        </div>
        <p className="mt-4 text-center">Don't have an account yet? <a href="/signup" className="text-blue-500">Signup</a></p>
      </div>
    </div>
  );
};

export default LoginForm;

