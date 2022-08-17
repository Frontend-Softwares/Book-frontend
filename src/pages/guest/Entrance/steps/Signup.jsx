import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Field from '../../../../components/Field';
import Holder from '../../../../components/Holder';
import Next from '../../../../components/Next';
import {Link} from "react-router-dom";

function Signup() {
  return (
    <div className='w-[100vw] h-[100vh] pt-[13vh] bg-background text-white flex items-center justify-center'>
      <Holder title={"Fill Details"}>
        <div className='flex items-center flex-col justify-around h-auto space-y-3'>
          <Field placeholder={"Name"}/>
          <Field placeholder={"Password"}/>
          <Field placeholder={"Password Again"}/>
          <div className='flex items-center space-x-2'>
            <input className='w-8 h-8 xs:w-4 xs:h-4' type="checkbox" id='tNc' />
            <p className='text-center' id='checkboxText'>Accept <Link className='underline font-extrabold' to={"/"}>terms</Link> and <Link className='underline font-extrabold' to={"/"}>conditions</Link></p>
          </div>
          <Next onClick={()=>{toast.error("hello")}}/>
        </div>
      </Holder>
    </div>
  )
}

export default Signup