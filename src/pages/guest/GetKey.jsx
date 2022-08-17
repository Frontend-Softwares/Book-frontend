import Field from '../../components/Field';
import Holder from '../../components/Holder';
import Next from '../../components/Next';
import {useNavigate} from "react-router-dom";
import { useState , useContext} from 'react';
import {ModuleContext} from '../../contexts/modules';

function GetKey() {
  const navigate = useNavigate();
  const {isEmail , onChange} = useContext(ModuleContext);

  const [email , setEmail] = useState("");

  // on click function
  const goNext = async()=>{
    if(isEmail(email)){
      navigate("/entrance");
    };
  };
  return (
    <div className='page-getKey w-[100vw] h-[100vh] pt-[13vh] bg-background text-white flex items-center justify-center'>
      <Holder title={"Get Key"}>
        <div className='flex items-center flex-col justify-around h-36'>
          <Field type={"email"} onChange={onChange(setEmail)} value={email} placeholder={"Enter Email"}/>
          <Next onClick={goNext}/>
        </div>
      </Holder>
    </div>
  )
}

export default GetKey