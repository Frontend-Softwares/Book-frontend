import { useEffect, useState } from "react"

const optFUnctions = {
       positive : null,
       negative : null
};

function Prompt({heading="head" , title="title" , describe="This is an example!" , input=true  , icon  , direction="ltr" , close , onNegativeClick , onPositiveClick}) {
    const [btnTexts , setBtnTexts] = useState(["OK" , "Cancel"]);

    function onNegative(){
      if(close){
        close(!true);
      };

      if(onNegativeClick && typeof onNegativeClick === "function"){
        onNegativeClick();
      };
    };

  return (
    <div onClick={(e)=>e.stopPropagation()} className="bg-[#071A31] text-white space-y-3 w-[30rem] min-h-[55vh] rounded-md">
        <div className="bg-white text-[#071A31] w-full py-1 rounded-t-md font-extrabold capitalize px-1 text-xl">{heading?.substring(0,30)}</div>
        
        {icon && typeof icon === "string" && <img className="h-[4.3rem] mx-auto py-3" src={"/images/"+icon} alt="" />}

        {title && typeof title==="string" && <p className="text-2xl font-extrabold capitalize text-center py-1 px-2">{title?.substring(0 , 35)}</p>}
        
        {describe && typeof describe==="string" && <p className="text-lg font-bold capitalize text-center py-1 px-2">{describe?.substring(0 , 50)}</p>}

        {input && <input className="caret-[#160606c7] outline-none text-center h-9 rounded-2xl mt-3 w-[60%] mx-auto block" type={"text"}/>}

        {
            direction === "ltr"?
            <div className="mx-auto w-[80%] flex items-end justify-end pt-2 space-x-2 pb-5">
            {btnTexts[1]&&<button onClick={onNegative} className="p-2 font-[400] text-lg">{btnTexts[1].substring(0 , 8)}</button>}
            {btnTexts[0]&&<button onClick={onPositiveClick} className={`p-[0.35rem] font-semibold text-xl bg-[#0344D4] hover:bg-[#0345d4d3] px-4 rounded-lg`}>{btnTexts[0].substring(0 , 8)}</button>}
            </div>
            :
            direction === "rtl" ?
            <div className="mx-auto w-[80%] flex items-end justify-end pt-2 space-x-2 pb-5">
            {btnTexts[0]&&<button onClick={onPositiveClick} className={`p-[0.35rem] font-semibold text-xl bg-[#0344D4] hover:bg-[#0345d4d3] px-4 rounded-lg`}>{btnTexts[0].substring(0 , 8)}</button>}
            {btnTexts[1]&&<button onClick={onNegative} className="p-2 font-[400] text-lg">{btnTexts[1].substring(0 , 8)}</button>}
            </div>:""
        }
    </div>
  )
}

export default Prompt