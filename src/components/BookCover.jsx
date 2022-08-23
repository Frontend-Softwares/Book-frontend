import { useEffect, useRef } from "react";


function BookCover({onClick}) {
    const bookRef = useRef();
    const controlRef = useRef();

    useEffect(()=>{
        if(bookRef.current){
            bookRef.current.onmouseover = ()=>{
                controlRef.current.style.visibility = "visible";
            };

            bookRef.current.onmouseout = ()=>{
                controlRef.current.style.visibility = "hidden";
            };
        };
    } , []);

  return (
    <div ref={bookRef} className="relative">
        <div ref={controlRef} className="invisible controls h-full w-full p-5 flex flex-col items-center justify-between absolute bg-[#000000a0]">
            <div className="flex justify-between w-full">
                <img className="cursor-pointer h-6" src="/images/del.svg" alt="" />
                <img className="cursor-pointer h-7" src="/images/Heart.svg" alt="" />
            </div>

            <button onClick={onClick} className="px-4 py-1 text-md xs:text-xl font-extrabold bg-white rounded-lg text-[#193490]">Read</button>

            <div className="flex flex-col items-end w-full">
                <img className="cursor-pointer h-7" src="/images/Right 3.svg" alt="" />
                <img className="cursor-pointer h-7" src="/images/Edit.svg" alt="" />
            </div>
        </div>
        <img className="w-36 xs:w-40 sm:w-52 object-contain" src="/images/cover.png" alt="" ></img>
    </div>
  )
}

export default BookCover;