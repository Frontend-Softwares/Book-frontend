import { useRef, useState } from "react";
import Tooltip from "./Tooltip/Tooltip";
import {AiFillCaretRight , AiFillCaretLeft} from "react-icons/ai";


function Sidebaar() {
    const smBaar = useRef();
    const sidebaar = useRef();

    function closeSideBaar(){
        if(sidebaar.current){
            sidebaar.current.style.left = "-105px";
            smBaar.current.style.left = "0px";
        }
    };

    function openSideBaar(){
        if(sidebaar.current){
            sidebaar.current.style.left = "0px";
            smBaar.current.style.left = "-105px";
        }
    };

    
  return (
    <>
    <div id="sidebaar" ref={sidebaar} className="hidden duration-700 absolute h-[85vh] xs:flex flex-col items-center justify-center">
        <div className="w-14 h-[50vh] bg-white flex flex-col items-center justify-evenly rounded-tr-md rounded-br-md">
            <Tooltip className={"side-items"} hint={"Write Your Book"}>
                <img className="h-9 sm:h-11 cursor-pointer" src="/images/pencil.svg" alt="pencil" />
            </Tooltip>
            
            <Tooltip className={"side-items"} hint={"Your Books"}>
                <img className="h-9 sm:h-11 cursor-pointer" src="/images/book.svg" alt="" />
            </Tooltip>

            <Tooltip className={"side-items"} hint={"Support"}>
                <img className="h-9 sm:h-11 cursor-pointer" src="/images/support.svg" alt="" />
            </Tooltip>

            <Tooltip className={"side-items"} hint={"Settings & Management"}>
                <img className="h-9 sm:h-11 cursor-pointer" src="/images/setting.svg" alt="" />
            </Tooltip>

            
            <Tooltip className={"side-items"} hint={"close"}>
                <AiFillCaretLeft onClick={closeSideBaar} color="black" size={30} className="cursor-pointer"/>
            </Tooltip>
            
        </div>   
    </div>

    <div ref={smBaar} className="hidden absolute h-[85vh] duration-700 left-[-105px] xs:flex flex-col items-center justify-center">
        <div className="w-14 h-max bg-white flex flex-col items-center justify-evenly rounded-tr-md rounded-br-md z-50">
            <Tooltip hint={"open"}>
                <AiFillCaretRight onClick={openSideBaar} color="black" size={30} className="cursor-pointer"/>
            </Tooltip>
        </div>   
    </div>
    </>
  )
}

export default Sidebaar