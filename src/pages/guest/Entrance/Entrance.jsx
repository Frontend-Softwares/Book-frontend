import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PutOtp from './steps/PutOtp';
import Signup from './steps/Signup';

const steps = {
  signup : Signup,
  otp : PutOtp
};

function Entrance() {
  const [step , setStep] = useState("signup");
  // dynamic component
  const Component = steps[step];

  return (
    <Component/>
  )
}

export default Entrance;