import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Holder from '../../../../components/Holder';
import Next from '../../../../components/Next';
import Otp from '../../../../components/Otp';

function PutOtp() {
  const [disable , setDisable] = useState(true);
  // on btn click
  const clcik = ()=>{
    setDisable(false);
  }

  return (
    <div className='w-[100vw] h-[100vh] pt-[13vh] bg-background text-white flex items-center justify-center'>

      <Holder title={"Put the Code"}>
        <Otp execute={!disable} callback={(otp)=>{
          console.log(otp);
          setDisable(true);
        }}/>

        <Next onClick={clcik} style={{margin:"auto"}}/>
      </Holder>
    </div>
  )
}

export default PutOtp