import React from 'react'
import { auth, logout } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from 'react';
import { Link } from 'react-router-dom';




function Navbar() {


  const [isLoggedIn, setIsLoggedIn] = useState((sessionStorage.getItem('user_name')) ? true : false);



  console.log(isLoggedIn);
  return (
    <div>
      <nav class="bg-black">
        <div class="max-w-6xl mx-auto">
          <div class="flex justify-between">


              <div>
                <a href="/home" class="flex items-center py-5 px-3 text-gray-100 hover:text-gray-400">
                <span class="font-bold">  FitLand </span>
                <i class=" text-red-500 fas fa-walking"></i>
                </a>
              </div>



            <div class="flex space-x-4">
              <div class="hidden md:flex items-center space-x-3">
                <Link to="/men" class=" font-bold py-5 px-3 text-gray-100 hover:bg-gray-400">Men</Link>

                <Link to="/women" class=" font-bold py-5 px-3 text-gray-100 hover:bg-gray-400"> Women </Link>
                <Link to="/kids" class=" font-bold py-5 px-3 text-gray-100 hover:bg-gray-400"> Kids </Link>
                <Link to="/accessories" class=" font-bold py-5 px-3 text-gray-100 hover:bg-gray-400"> Accessories </Link>
              </div>
            </div>

            <div class="hidden md:flex items-center space-x-1">
              <Link to="/cart" class="py-5 px-3">  <i class=" text-gray-100 fas fa-shopping-cart"></i> </Link>
              {isLoggedIn ? <a href="/" class="py-2 px-3 bg-green-400 hover:bg-green-300 text-black-900 hover:text-black-800 rounded transition duration-300 " onClick={logout}> Log Out </a> : <Link to="/" class="py-2 px-3 bg-green-400 hover:bg-green-300 text-black-900 hover:text-black-800 rounded transition duration-300 "> Log In </Link> }
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
