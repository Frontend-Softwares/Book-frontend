
function BookHolder({title , children}) {
  return (
    <div className="my-10">
        <div className="text-xl sm:text-[1.6rem] font-extrabold text-white mb-4">{title?.substring(0,30)}</div>

      <div className="bg-[#0B1E50] border-2 border-white w-[85vw] p-5 rounded-md flex justify-start space-x-4 items-center overflow-hidden overflow-x-auto">
        {children}
      </div>
    </div>
  )
}

export default BookHolder