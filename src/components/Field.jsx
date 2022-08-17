

function Field({type , classes , placeholder , ...props}) {
  return (
    <input {...props} placeholder={placeholder||"Enter Text"} type={type} className={"w-[100%] sm:w-[80%] md:w-[60%] lg:w-[40%] h-10 caret-black text-black text-center bg-white text-lg font-extrabold rounded-lg outline-none border-[1px] border-transparent"+classes}/>
  )
}

export default Field