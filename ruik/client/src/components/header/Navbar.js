// import React from 'react'
// import { Link } from "react-router-dom"
// const Con = () => {
//     return (
//         <div className="flex">
//             <h1><Link to ="/notify">Notify</Link></h1>
//             <h1><Link to ="/login">Login</Link></h1>
//             <h1><Link to ="/regiter">Regiter</Link></h1>
//         </div>
//     )
// }

// export default Con
import React from "react";

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex justify-between  bg-gray-400 py-2 px-40 rounded-md">
      <h1 className="text-2xl font-semibold" ><Link to ="/">BBIRD</Link></h1>

      {/* <div className="relative mx-auto text-gray-600">
        <input
          className="border-2 border-gray-800 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
        <button type="submit" className="absolute right-0 top-0 mt-2 mr-4">尋</button>
      </div> */}

      <div className="flex pr-2">
        {/* <h1 className="text-2xl px-4">
        <Link to ="/notify">Notify</Link>
        </h1> */}
        <h1 className="text-2xl px-4">
        <Link to ="/login">Login</Link>
        </h1>
        <h1 className="text-2xl px-4">
        <Link to ="/register">Regiter</Link>
         </h1>
        
      </div>
      
    </div>
  );
};



export default Navbar;
