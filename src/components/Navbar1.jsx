import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const logout = () =>{
    navigate("/")
  }

  return (
    <nav className="w-full  navbar border-b border-secondary/20">
      <div className="text-white flex py-6  items-center">
        <div className="flex-1">
        Blood Bridge
        </div>
        <div className="z-10">
        <button onClick={logout} className="text-slate-800 border px-3 py-1 bg-white rounded-md font-semibold">
        Logout
      </button>
      </div>
      </div>
      
      
    </nav>
  );
};

export  default Navbar;
