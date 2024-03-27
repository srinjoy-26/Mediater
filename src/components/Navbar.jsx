import { GrMenu } from "react-icons/gr";
import {motion} from 'framer-motion'
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  let Navitems = ['Home' , 'About' , 'Contact']
  let[disp , setdisp] = useState(false)
  return (

    <>
  <div className=" flex justify-between items-center px-4 md:px-8  bg-blue-600 py-2">
       <motion.div className="logo h-[4.5rem] w-[4.5rem] bg-white rounded-md" animate={{rotate:[0,100,100,0] , x:[0,100,100,0]}} transition={{duration: 1}}></motion.div> 
     
      <div id="Nvlinks" className='hidden gap-8 md:flex'>
        {Navitems.map((x,index)=>{
          return(
            <Link to={x=='Home' ? "/" : `/${x.toLowerCase()}` } key={index}><p  className="text-lg text-white hover:font-semibold">{x}</p></Link>
          )
        })}
      </div>

      <GrMenu className="text-2xl md:hidden text-white" onClick={()=>{setdisp(!disp)}}/>
    </div>

    <div id="Nvlinks" className={`flex flex-col bg-blue-600 px-4 gap-5 py-5 ${disp || 'hidden'}`}>
        {Navitems.map((x,index)=>{
          return(
            <Link to={x=='Home' ? "/" : `/${x.toLowerCase()}` } key={index} onClick={()=>{setdisp(false)}}><p  className="text-lg text-white hover:font-semibold">{x}</p></Link>
          )
        })}
      </div>
    </>
  )
}

export default Navbar
