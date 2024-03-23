

const Navbar = () => {
  let Navitems = ['Home' , 'About' , 'Contact']
  return (
  <div className=" flex justify-between items-center bg-slate-200  px-7  ">
       <div className="logo h-20 w-20"></div> 
     
      <div id="Nvlinks" className="flex gap-8">
        {Navitems.map((x,index)=>{
          return(
            <p key={index} className="text-lg ">{x}</p>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar
