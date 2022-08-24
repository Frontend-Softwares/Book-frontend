import { useState , useContext, useEffect} from 'react';
import {ModuleContext} from "../contexts/modules";

function Otp({callback , execute=false , autoFocus=true}) {
    const {onChange} = useContext(ModuleContext);
  const [otp1 , setOtp1] = useState("");
  const [otp2 , setOtp2] = useState("");
  const [otp3 , setOtp3] = useState("");
  const [otp4 , setOtp4] = useState("");

  useEffect(()=>{
    window.onkeydown = (e)=>{
        // finding elements
        const otp_1 = document.getElementById("otp-1");
        const otp_2 = document.getElementById("otp-2");
        const otp_3 = document.getElementById("otp-3");
        const otp_4 = document.getElementById("otp-4");

        otp_1.setSelectionRange(1 , 1);
        otp_2.setSelectionRange(1 , 1);
        otp_3.setSelectionRange(1 , 1);
        otp_4.setSelectionRange(1 , 1);

        if(e.key !== "Backspace"){
          if(otp_1 === document.activeElement && otp1!==""){
            otp_2.focus();
          }else if(otp_2 === document.activeElement && otp2!==""){
            otp_3.focus();
          }else if(otp_3 === document.activeElement && otp3!==""){
            otp_4.focus();
          }
        }else{
          if(otp_4 === document.activeElement && !otp4){
            otp_3.focus();
            setOtp4("");
          }else if(otp_3 === document.activeElement && !otp3){
            otp_2.focus();
            setOtp3("");
          }else if(otp_2 === document.activeElement && !otp2){
            otp_1.focus();
            setOtp2("");
          }
        };
    };

  } , [otp1 , otp2 , otp3 , otp4]);

  // function for otp validation
  function onEnterOtp(){
    callback(otp1+otp2+otp3+otp4||null);
  };

  useEffect(()=>{
    if(execute){
        if(otp1&&otp2&&otp3&&otp4){
            onEnterOtp();
        };
    };
  } , [execute]);

  var reg = new RegExp('[0-9]');

  const setter1 = (val)=>{
    console.log(val)
    if(!reg.test(val)){
        setOtp1("");
    }else{
        setOtp1(val);
    };
  };

  const setter2 = (val)=>{
    if(reg.test(val)){
      setOtp2(val);
    }else{
      setOtp2("");
    };
  };

  const setter3 = (val)=>{
    if(reg.test(val)){
      setOtp3(val);
    }else{
      setOtp3("");
    };
  };

  const setter4 = (val)=>{
    if(reg.test(val)){
      setOtp4(val);
    }else{
      setOtp4("");
    };
  };

  return (
    <div className='flex items-center justify-center h-auto space-x-3 sm:space-x-8 mt-6'>
          <input autoFocus={autoFocus} autoComplete='off' id='otp-1' onChange={onChange(setter1)} value={otp1} className='h-10 w-10 rounded-md outline-none border-0 border-transparent caret-black text-black text-center font-extrabold text-xl' maxLength={1} placeholder={"0"} type="text" />
          <input autoComplete='off' id='otp-2' onChange={onChange(setter2)} value={otp2} className='h-10 w-10 rounded-md outline-none border-0 border-transparent caret-black text-black text-center font-extrabold text-xl' maxLength={1} placeholder={"0"} type="text" />
          <input autoComplete='off' id='otp-3' onChange={onChange(setter3)} value={otp3} className='h-10 w-10 rounded-md outline-none border-0 border-transparent caret-black text-black text-center font-extrabold text-xl' maxLength={1} placeholder={"0"} type="text" />
          <input autoComplete='off' id='otp-4' onChange={onChange(setter4)} value={otp4} className='h-10 w-10 rounded-md outline-none border-0 border-transparent caret-black text-black text-center font-extrabold text-xl' maxLength={1} placeholder={"0"} type="text" />
    </div>
  )
}

export default Otp;