import { useState , useContext, useEffect} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Holder from '../../../../components/Holder';
import Next from '../../../../components/Next';
import {ModuleContext} from '../../../../contexts/modules';

function PutOtp() {
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
  return (
    <div className='w-[100vw] h-[100vh] pt-[13vh] bg-background text-white flex items-center justify-center'>
      <Holder title={"Put the Code"}>
        <div className='flex items-center justify-center h-auto space-x-8 mt-6'>
          <input id='otp-1' onChange={onChange(setOtp1)} value={otp1} className='h-10 w-10 rounded-md outline-none border-0 border-transparent caret-black text-black text-center font-extrabold text-xl' maxLength={1} placeholder={"0"} type="text" />
          <input id='otp-2' onChange={onChange(setOtp2)} value={otp2} className='h-10 w-10 rounded-md outline-none border-0 border-transparent caret-black text-black text-center font-extrabold text-xl' maxLength={1} placeholder={"0"} type="text" />
          <input id='otp-3' onChange={onChange(setOtp3)} value={otp3} className='h-10 w-10 rounded-md outline-none border-0 border-transparent caret-black text-black text-center font-extrabold text-xl' maxLength={1} placeholder={"0"} type="text" />
          <input id='otp-4' onChange={onChange(setOtp4)} value={otp4} className='h-10 w-10 rounded-md outline-none border-0 border-transparent caret-black text-black text-center font-extrabold text-xl' maxLength={1} placeholder={"0"} type="text" />
        </div>

        <Next style={{margin:"auto"}}/>
      </Holder>
    </div>
  )
}

export default PutOtp