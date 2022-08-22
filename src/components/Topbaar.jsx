import { useSelector } from "react-redux"


function Topbaar() {
  const {isAuth} = useSelector(s=>s.control.appState);

  if(isAuth){
    return <div className="topbaar h-[13vh] absolute top-0 w-full flex justify-between px-4 sm:px-6 md:px-10 lg:px-14 xl:px-18 2xl:px-24 items-center font-extrabold text-white z-50">
        <p className="text-lg xs:text-xl sm:text-[1.6rem]">Hello, Madhav</p> 
        <p className="text-2xl sm:text-[2rem]">Book</p>
        {/* this is hamburger */}
        <div className={`hamburger m-3 xs:hidden cursor-pointer ${isAuth ? "block" : "hidden"}`}>
            <div className="ham-lines w-7 h-[0.2rem] my-1.5 bg-white"></div>
            <div className="ham-lines w-7 h-[0.2rem] my-1.5 bg-white"></div>
            <div className="ham-lines w-7 h-[0.2rem] my-1.5 bg-white"></div>
        </div>
    </div>
  };

  return (
    <div className="topbaar h-[13vh] absolute top-0 w-full flex justify-end px-4 sm:px-6 md:px-10 lg:px-14 xl:px-18 2xl:px-24 items-end text-[2rem] font-extrabold text-white z-50">
        <p>Book</p>
    </div>
  )
}

export default Topbaar