import { useState , useContext, useEffect} from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Field from '../../../../components/Field';
import Holder from '../../../../components/Holder';
import Next from '../../../../components/Next';
import {ModuleContext} from '../../../../contexts/modules';
import {Link} from "react-router-dom";

function Login() {

  const {onChange} = useContext(ModuleContext);
  
  return (
    <div className='w-[100vw] h-[100vh] pt-[13vh] bg-background text-white flex items-center justify-center'>
      <Holder title={"Get into"}>
        <div className='flex items-center flex-col justify-around h-auto space-y-3'>
          <Field placeholder={"Enter your key"}/>
          <Field placeholder={"Password"}/>
        </div>

        <Next style={{margin:"auto" , marginTop:"5px"}}/>

        {/* <div className='flex items-center space-x-2 mx-auto mt-10'> */}
            <p className='text-center w-[31%] mx-auto mt-6' id='forget'>Have you forget your <Link className='font-extrabold text-[#9b0000]' to={"/new_key"}>key</Link> or <Link className='font-extrabold text-[#9b0000]' to={"/reset_password"}>password</Link></p>
          {/* </div> */}
      </Holder>
    </div>
  )
}

export default Login