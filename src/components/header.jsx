import React from "react";

function Homepage() {
    return (
    <>
   
     <header className="flex items-center justify-between bg-black text-white px-6 py-3">
      {/* Left Section - Logo & Home */}
      <div className="flex">
      <div className="flex items-center space-x-4">
      <img src="https://img.icons8.com/?size=100&id=80556&format=png&color=ffffff" alt="Spotify Logo" className="w-7 h-6" />
        <div style={{ backgroundColor: '#1f1f1f' }} className="p-2 rounded-3xl">
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></a>
        
        </div>
      </div>

      {/* Search Bar */}
      <div style={{ backgroundColor: '#1f1f1f' }} className="flex flex-grow mx-6 items-center text-gray-300 rounded-full px-4 py-2 w-full">
        <span className="text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </span>
        <input
          type="text"
          placeholder="What do you want to play?"
          className="bg-transparent text-white outline-none px-2 w-full"
        />
        <span className="text-gray-400 mr-1">|</span> 
        <span className="text-gray-400 cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-list-tree"><path d="M21 12h-8"/><path d="M21 6H8"/><path d="M21 18h-8"/><path d="M3 6v4c0 1.1.9 2 2 2h3"/><path d="M3 10v6c0 1.1.9 2 2 2h3"/></svg></span>
      </div>
      </div>
      {/* Right Section - Menu Items */}
      <div className="flex items-center space-x-4 text-gray-400 text-sm font-bold ">
        <span className="hover:text-gray-300 hover:transition-colors cursor-pointer">Premium</span>
        <span className="hover:text-gray-300 hover:transition-colors cursor-pointer">Support</span>
        <span className="hover:text-gray-300 hover:transition-colors cursor-pointer">Download</span>
        <span>|</span>
        <span className="flex items-center space-x-1">
          ⬇ <span className="hover:text-gray-300 hover:transition-colors cursor-pointer">Install App</span>
        </span>
        <span>Sign up</span>
        <button className="bg-white text-black px-8 py-4 rounded-full cursor-pointer font-bold">Log in</button>
      </div>
    </header>
    </>
    );
  }
  
  export default Homepage;