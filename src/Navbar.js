import React from 'react'
import { auth, logout } from "./Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useState } from 'react';




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
                <a href="/men" class=" font-bold py-5 px-3 text-gray-100 hover:bg-gray-400"> Men </a>
                <a href="/women" class=" font-bold py-5 px-3 text-gray-100 hover:bg-gray-400"> Women </a>
                <a href="/kids" class=" font-bold py-5 px-3 text-gray-100 hover:bg-gray-400"> Kids </a>
                <a href="/accessories" class=" font-bold py-5 px-3 text-gray-100 hover:bg-gray-400"> Accessories </a>
              </div>
            </div>

            <div class="hidden md:flex items-center space-x-1">
              <a href="/cart" class="py-5 px-3">  <i class=" text-gray-100 fas fa-shopping-cart"></i> </a>
              {isLoggedIn ? <a href="/" class="py-2 px-3 bg-green-400 hover:bg-green-300 text-black-900 hover:text-black-800 rounded transition duration-300 " onClick={logout}> Log Out </a> : <a href="/" class="py-2 px-3 bg-green-400 hover:bg-green-300 text-black-900 hover:text-black-800 rounded transition duration-300 "> Log In </a> }



            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
