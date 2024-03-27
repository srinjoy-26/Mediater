import contact from '../assets/contactImg.jpg'

const Contact = () => {
  return (
    <div className=" min-h-[60vh] px-3  py-4 space-y-4">
       <h2 className="text-3xl text-center">Connect with us!!</h2>
      <div className='flex flex-col justify-center gap-6 items-center pt-5 min-h-[50vh] w-full md:flex-row'>

       <form action="" className="flex flex-col gap-4 border-2 w-full border-purple-500 p-4 rounded-md md:w-[30%]">
        <h1 className='text-2xl text-center'>Enter your details</h1>
        <input type="text" placeholder="Your Name" className=" px-3 py-3 rounded-md focus:outline-none bg-slate-300"/>
        <input type="email" placeholder="Your Email" className="px-3 py-3 rounded-md focus:outline-none bg-slate-300"/>
        <textarea className="rounded-md px-3 py-2 focus:outline-none bg-slate-300" placeholder="Query"></textarea>
       </form>

       <div className='overflow-hidden rounded-md shadow-sm shadow-slate-400' id='imgdiv'>
        <img src={contact} className='md:h-[300px] md:w-[500px]'/>
       </div>
      </div>
      
    </div>
  )
}

export default Contact
