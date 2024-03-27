import mission from '../assets/target.png'
import vision from '../assets/shared-vision.png'
import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import {motion} from 'framer-motion'
const About = () => {
  useEffect(()=>{
    Aos.init({duration: 1000})
  },[])
  return (
    <div className='pt-[50px] flex flex-col justify-center gap-6 lg:h-screen'>
      <div className='flex flex-col md:flex-row gap-4 items-center w-[80%] mx-auto p-5 rounded-md shadow-md shadow-purple-500 bg-purple-300' data-aos="zoom-in-left">
        <motion.img src={mission} alt=""  className='h-72 w-72 cursor-pointer'  whileHover={{rotateY : 360}} transition={{type: "tween" , duration:2}} animate={{rotateY : 180}}/>
        <div className='flex flex-col gap-2 text-center'>
        <h1 className='text-3xl font-semibold'>Mission</h1>
        <p className='text-lg'>Empowering collaboration and innovation, our mission is to seamlessly connect content creators with businesses, fostering meaningful partnerships in the digital landscape. By providing a dynamic platform that facilitates efficient communication, secure transactions, and insightful analytics, we aim to be the catalyst for creativity, growth, and success in the online content creation ecosystem. Our commitment lies in building a vibrant community where creators thrive, businesses prosper, and authentic collaborations flourish.</p>
        </div>
        
      </div>

    
      
      <div className='flex flex-col md:flex-row gap-4 items-center w-[80%] mx-auto p-5 rounded-md shadow-md shadow-purple-500 bg-purple-300' data-aos="zoom-in-right">
      
        <motion.img src={vision} alt=""  className='h-72 w-72 cursor-pointer' whileHover={{rotateY : 360}} transition={{type: "tween" , duration:2}} animate={{rotateY : 180}}/>
        <div className='flex flex-col gap-2 text-center'>
        <h1 className='text-3xl font-semibold'>Vision</h1>
        <p className='text-lg'>Envisioning a future where the boundaries between content creators and businesses dissolve, our app aspires to be the unparalleled hub for dynamic collaboration in the digital realm. We see a landscape where creativity knows no limits, and partnerships transcend traditional boundaries, resulting in a global network of thriving content ecosystems. By pioneering innovation, fostering inclusivity, and driving transformative connections, our vision is to shape the future of online collaboration, where every creator's voice is amplified, and every business finds its ideal collaborator effortlessly.</p>
        </div>
        
      </div>
    </div>
  )
}

export default About
