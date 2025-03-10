import React from 'react'

const Homepage = () => {
  return (
    <nav className="bg-black text-white fixed w-full top-0 shadow-md  z-10 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo / Brand */}
          <div href="#" className="text-2xl font-bold cursor-pointer ">Drag and Drop KanbanBoard</div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-gray-400 transition">Home</a>
            <a href="#" className="hover:text-gray-400 transition">Tasks</a>
            <a href="#" className="hover:text-gray-400 transition">About</a>
          </div>
          
          {/* Mobile Menu Button */}
    
        </div>
      </div>
    </nav>
  )
}

export default Homepage