

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-3 md:gap-5 md:h-[70vh] lg:flex-row " id="home-div">
      <div className="lg:w-[40%] md:w-[70%] flex flex-col gap-4 py-5 px-3 lg:px-0 " >
        <h1 className="text-4xl md:text-5xl text-white" id="home-heading">Connecting Brands with Creativity</h1>
        <p className=" text-xl md:text-2xl text-white">Welcome to Mediater - Your Gateway to Digital Collaboration!</p>
        <p className="text-lg md:text-xl text-slate-200 tracking-wide">At Mediater , we redefine collaboration by seamlessly connecting content creators with businesses, fostering a dynamic ecosystem of innovation and creativity. Our platform serves as the catalyst for strategic alliances, unlocking endless possibilities in the digital landscape. Join the revolution, where every collaboration is an opportunity to elevate and innovate.</p>
        
      </div>

      <div className="flex flex-col gap-5 py-5 px-3 lg:px-0 ">
      <p className="text-lg md:text-xl text-white">Elevate Your Experience: Subscribe Now for Exclusive Early Access!</p>
      <form className="flex flex-col gap-4">
        <input type="text" className="focus:outline-none rounded-lg p-3 md:w-[80%] w-full mx-auto" placeholder="Email Address"/>
        <input type="text" className="focus:outline-none rounded-lg p-3 md:w-[80%] w-full mx-auto" placeholder="Business URL / Social Media URL" />
        <button type="submit" className="border-2 border-white p-3 rounded-md text-lg text-white w-full md:w-[80%] mx-auto hover:bg-white hover:text-black ease-in-out duration-300">Join Us</button>
      </form>
      </div>
    </div>
  )
}

export default Home
