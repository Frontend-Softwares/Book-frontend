import Field from "../../components/Field";
import Holder from "../../components/Holder";
import Next from "../../components/Next";
import Otp from "../../components/Otp";

function NewKey() {
  return (
    <div className='w-[100vw] h-[100vh] pt-[13vh] bg-background text-white flex items-center justify-center'>
    <Holder title={"Generate new key"}>
      <div className='flex items-center flex-col justify-around h-auto space-y-3 mt-5'>
        <Field autoFocus style={{marginBottom:"13px"}} placeholder={"Email"}/>
        <Otp autoFocus={false}/>
      </div>

      <Next  style={{margin:"auto" , marginTop:"14px"}}/>
    </Holder>
  </div>
  )
}

export default NewKey