

const Footer = () => {
  return (
    <>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff"  d="M0,224L48,234.7C96,245,192,267,288,272C384,277,480,267,576,256C672,245,768,235,864,208C960,181,1056,139,1152,149.3C1248,160,1344,224,1392,256L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    <div className="flex flex-col justify-around items-center bg-[#0099ff] text-white py-5 gap-4 md:flex-row md:items-start md:gap-0">
      <div className="flogo h-20 w-20"></div>
      <div className="flex flex-col gap-2 items-center footlinks">
        <h2 className="text-2xl font-semibold">Quick-Links</h2>
        <a>LinkedIn</a>
        <a>Blogs</a>
        <a>Twitter</a>
        <a>Instagram</a>
      </div>

      <div className="flex flex-col gap-2 items-center footcontact" >
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p>PH: +91 7994076261</p>
        <p>Email: official@mediater.in</p>
        <p>Address: Karicode, Kollam</p>
      </div>



    </div>
    </>
  )
}

export default Footer
