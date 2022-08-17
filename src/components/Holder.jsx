

function Holder({children , title}) {
  return (
    <div className="Container min-h-[40%] w-[50vw] text-white flex flex-col item-center">
        <p className="text-center text-2xl sm:text-[2rem] font-extrabold mb-3">{title?.substring(0 , 20)}</p>
        {children}
    </div>
  )
}

export default Holder