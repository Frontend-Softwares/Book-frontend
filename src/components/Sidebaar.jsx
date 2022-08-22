import Tooltip from "./Tooltip/Tooltip";


function Sidebaar() {
  return (
    <div className="hidden absolute h-[85vh] xs:flex flex-col items-center justify-center">
        <div className="w-14 h-[50vh] bg-white flex flex-col items-center justify-evenly rounded-tr-md rounded-br-md">
            <Tooltip hint={"Write Your Book"}>
                <img className="h-9 sm:h-11 cursor-pointer" src="/images/pencil.svg" alt="pencil" />
            </Tooltip>
            
            <Tooltip hint={"Your Books"}>
                <img className="h-9 sm:h-11 cursor-pointer" src="/images/book.svg" alt="" />
            </Tooltip>

            <Tooltip hint={"Support"}>
                <img className="h-9 sm:h-11 cursor-pointer" src="/images/support.svg" alt="" />
            </Tooltip>

            <Tooltip hint={"Settings & Management"}>
                <img className="h-9 sm:h-11 cursor-pointer" src="/images/setting.svg" alt="" />
            </Tooltip>
        </div>
    </div>
  )
}

export default Sidebaar