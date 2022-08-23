import {GrClose} from "react-icons/gr";

function Interactive({children , title , close , size="small" , bg , color}) {
  
  switch(size){
    case "small":return (
      <div style={{background : bg||"white"}} onClick={(e)=>{e.stopPropagation()}} className={`text-white interective w-[80vw] sm:w-[50vw] lg:w-[40vw] rounded-md text-center h-[70%] md:h-96 relative`}>
            {title&&<div className="w-[100%] flex items-center justify-center mt-2 mb-2">
              <p style={{color:color||"#1D3F96"}} className="text-2xl capitalize font-extrabold">{title}</p>
            </div>}
            {close&&<GrClose onClick={()=>close(!true)} size={25} className={"cursor-pointer absolute top-5 right-5"}/>}
          <div className="p-5">
            {children}
          </div>
      </div>
    );

    case "medium" :return (
      <div style={{background : bg||"white"}} onClick={(e)=>{e.stopPropagation()}} className={`text-white interective w-[80vw] sm:w-[70vw] lg:w-[50vw] rounded-md text-center h-[70vh] md:h-96 relative z-[200]`}>
            {title&&<div className="w-[100%] flex items-center justify-center mt-2 mb-2">
            <p style={{color:color||"#1D3F96"}} className="text-2xl capitalize font-extrabold">{title}</p>
            </div>}
            {close&&<GrClose onClick={()=>close(!true)} size={25} className={"cursor-pointer absolute top-5 right-5"}/>}
          <div className="p-5">
              {children}
          </div>
      </div>
    );

    case "large" : return (
      <div style={{background : bg||"white"}} onClick={(e)=>{e.stopPropagation()}} className={`text-white interective w-[80vw] sm:w-[70vw] lg:w-[60vw] rounded-md text-center h-[70%] md:h-96 relative`}>
            {title&&<div className="w-[100%] flex items-center justify-center mt-2 mb-2">
            <p style={{color:color||"#1D3F96"}} className="text-2xl capitalize font-extrabold">{title}</p>
            </div>}
            {close&&<GrClose onClick={()=>close(!true)} size={25} className={"cursor-pointer absolute top-5 right-5"}/>}
          <div className="p-5">
            {children}
          </div>
      </div>
    );
  }
  
}

export default Interactive