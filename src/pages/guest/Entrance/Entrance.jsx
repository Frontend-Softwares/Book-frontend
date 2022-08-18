import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './steps/Login';
import PutOtp from './steps/PutOtp';
import Signup from './steps/Signup';
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


const steps = {
  signup : Signup,
  otp : PutOtp,
  login : Login
};

function Entrance() {
  const navigate = useNavigate();
  const {entrancePath} = useSelector(s=>s.control.appState);

  // validation
  useEffect(()=>{
    if(!entrancePath){
      navigate(-1);
    }
  } , [entrancePath]);

  const [step , setStep] = useState(entrancePath||"login");
  // dynamic component
  const Component = steps[step];

  return (
    <Component/>
  )
}

export default Entrance;