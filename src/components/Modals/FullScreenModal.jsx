import { useEffect, useRef, useState } from "react";

function FullScreenModal({children , onopen , onclose , state=false , setState}) {
  const ref = useRef();
  const [eventState , setEventState] = useState("");

  useEffect(()=>{
    if(state){
      openModal();
    }else{
      close();
    };
  },[state]);

  // callbacks
  useEffect(()=>{
    if(typeof onopen === "function" && eventState === "open"){
      onopen(close)

    }else if(typeof onclose === "function" && eventState === "close"){
      onclose(close);
    };
  } , [eventState]);

  // function to close modal
  const close = ()=>{
    setEventState("close");

    if(ref.current){
      ref.current.style.display = "none";
    };

    document.body.style.overflowY = "auto";
    
    setState(false);
  };

  // open modal
  const openModal = ()=>{
    setEventState("open");

    document.body.style.overflow = "hidden";

    if(ref.current){
      ref.current.style.display = "flex";
    }
  };

  return (
    <div ref={ref} onClick={close} className="absolute top-0 bottom-0 overflow-y-auto right-0 left-0 bg-[#000000ca] w-full h-[100vh] z-40 items-center justify-center pb-10">
      {children}
    </div>
  );
}

export default FullScreenModal