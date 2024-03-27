

const Contact = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-[60vh] gap-7 px-3">
       <h2 className="text-3xl">We have got you!!</h2>
       <form action="" className="flex flex-col gap-4 border-2 w-full border-purple-500 p-4 rounded-md md:w-[40%] xl:w-[25%] mx-auto">
        <input type="text" placeholder="Your Name" className=" px-3 py-2 rounded-md focus:outline-none"/>
        <input type="email" placeholder="Your Email" className="px-3 py-2 rounded-md focus:outline-none"/>
        <textarea className="rounded-md px-3 py-1 focus:outline-none" placeholder="Query"></textarea>
       </form>
    </div>
  )
}

export default Contact
