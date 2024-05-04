import React from "react"

const Header = () => {
    return (
        <div className="  overflow-auto scroll-auto">
        <div className="grid grid-flow-col p-5 shadow-xl ">
        <div className="flex col-span-1 text-3xl">
          <img
           
            className="h-[1.8rem] cursor-pointer"
            src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp"
            alt="hamburger-menu"
          />    
        
            <img
              className="h-[1.8rem] mx-2"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png"
              alt="Youtube-logo"
            />
         
        </div>
        <div className=" flex col-span-10 pl-14">
          <input
            className="w-1/2 border border-gray-400 p-1 pl-3 rounded-l-full"
            placeholder="Search..."
            type="text"
           
            
       
          />
          <button
            className="border border-gray-400 px-5 py-2 bg-gray-100 rounded-r-full"
            type="button"
          >
          
          </button>
          <img
            className="h-8 border border-gray-200 rounded-full ml-3 bg-gray-100"
            src="https://i.pinimg.com/originals/74/ce/14/74ce14befb22695743659cf8a8290c2b.png"
            alt="mic-icon"
          />
        </div>
        <div> 
        </div>
        <div className="flex col-span-1">
          
          <img
            className="h-8"
            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            alt="user-logo"
          />
        </div>
      </div>
      </div>
    )
}

export default Header;





