import Aos from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Testimonial from "../components/Testimonial";

const Home = () => {
  useEffect(()=>{
    Aos.init({duration: 1000})
  },[])
  return (
    <>
    <div className="flex flex-col justify-center items-center gap-3 md:gap-5 md:h-[80vh] xl:flex-row px-3 pt-3 " id="home-div">
      <div className="xl:w-[40%] md:w-[70%] flex flex-col gap-4 py-5 px-4  rounded-md " data-aos = "fade-right" id="hero-text">
        <h1 className="text-4xl md:text-5xl text-black" id="home-heading">Connecting Brands with Creativity</h1>
        <p className=" text-xl md:text-2xl text-black font-semibold">Welcome to Mediater - Your Gateway to Digital Collaboration!</p>
        <p className="text-md md:text-lg text-black tracking-wide">At Mediater , we redefine collaboration by seamlessly connecting content creators with businesses, fostering a dynamic ecosystem of innovation and creativity. Our platform serves as the catalyst for strategic alliances, unlocking endless possibilities in the digital landscape. Join the revolution, where every collaboration is an opportunity to elevate and innovate.</p>
        
      </div>

      <div className="flex flex-col gap-5 py-5 px-3 lg:px-0 "  data-aos = "fade-left">
      <p className="text-lg md:text-xl text-black font-semibold">Elevate Your Experience: Subscribe Now for Exclusive Early Access!</p>
      <form className="flex flex-col gap-4">
        <input type="text" className="focus:outline-none rounded-lg p-3 md:w-[80%] w-full mx-auto bg-slate-200 placeholder:text-black" placeholder="Email Address"/>
        <input type="text" className="focus:outline-none rounded-lg p-3 md:w-[80%] w-full mx-auto bg-slate-200 placeholder:text-black" placeholder="Business URL / Social Media URL" />
        <button type="submit" className="border-2 border-black p-3 rounded-md text-lg text-black w-full md:w-[80%] mx-auto hover:bg-black hover:text-white ease-in-out duration-300">Join Us</button>
      </form>
      </div>
    </div>

    <Testimonial/>
    </>
  )
}

export default Home
