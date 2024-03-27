import test1 from '../assets/tes-1.jpg'
import test2 from '../assets/tes-2.jpg'

const Testimonial = () => {
 
  return (
    <div className='flex flex-col gap-5 pt-[50px]'>
      <div>
        <h2 className='text-xl md:text-2xl text-center font-semibold'>Don't Just Take Our Word for It: Read the customer's Reviews!</h2>
      </div>
      <div className='flex justify-center items-center gap-5 flex-wrap'>
         <div className="card w-72 p-3 flex flex-col gap-4 rounded-md items-center">
          <div className='h-64 w-64 overflow-hidden rounded-md'>
            <img src={test1} alt="" className='hover:scale-110 ease-in-out duration-500' />
          </div>
           <div className='flex flex-col gap-3'>
            <p className='text-xl'>
            "I do Online business through instagram. I haven't really thought of marketing my product since cost is just too high. Since the platform would assist in marketing in a cheap rate by connecting to micro influencer, It would be really helpful. "
            </p>
            <p className='text-lg text-center'>
            - Prayag_gift_
             ⭐⭐⭐⭐⭐
            </p>
           </div>
         </div>

         <div className="card  w-72 p-3 flex flex-col gap-4 rounded-md items-center">
         <div className='h-64 w-64 overflow-hidden rounded-md '>
            <img src={test2} alt="" className='hover:scale-110 ease-in-out duration-500'/>
          </div>
           <div className='flex flex-col gap-3'>
            <p className='text-xl'>
            "We are a group of college students who started the production house - "Visual Voyagers". Currently it's very expensive to rent a high quality camera even for one day. It would be really great if we can monetise our content, even if it's low.
            </p>
            <p className='text-lg text-center'>
            - visualvoyager__
            ⭐⭐⭐⭐⭐
            </p>
           </div>
         </div>
      </div>
    </div>
  )
}

export default Testimonial
