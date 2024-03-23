
import {motion} from 'framer-motion'

const Navbar = () => {
  let Navitems = ['Home' , 'About' , 'Contact']
  return (
  <div className=" flex justify-between items-center  px-8  ">
       <motion.div className="logo h-[4.5rem] w-[4.5rem] bg-white rounded-md" animate={{rotate:[0,100,100,0] , x:[0,100,100,0]}} transition={{duration: 1}}></motion.div> 
     
      <div id="Nvlinks" className="flex gap-8">
        {Navitems.map((x,index)=>{
          return(
            <p key={index} className="text-lg text-white">{x}</p>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar
