import { useState } from "react";
import Book from "../../../components/BookCover";
import BookHolder from "../../../components/BookHolder";
import Interactive from "../../../components/Modals/assets/Interactive";
import Prompt from "../../../components/Modals/assets/Prompt";
import FullScreenModal from "../../../components/Modals/FullScreenModal";
import Sidebaar from "../../../components/Sidebaar";
import {MdNewLabel} from "react-icons/md";


function Home() {
  const [modalState , setModalState] = useState(false);
  const [addModalState , setAddModalState] = useState(false);
  const [searchModalState , setSearchModalState] = useState(false);
  
  return (
    
    <div style={{overflow:"hidden"}} className='page-home w-[100vw] h-[100vh] pt-[13vh] bg-background'>
        <div onClick={()=>{setAddModalState(true)}} className="addBook bg-white w-24 space-x-1 flex items-center p-1 rounded-md ml-4 sm:ml-9 lg:ml-14 cursor-pointer hover:bg-[#fffffff0] delay-200 float-left clear-both">
            <img className="h-7 w-7" src="/images/Plus.svg" alt="add_book_icon" />
            <p className="text-xl font-extrabold">Book</p>
        </div>
        <div className="search float-right clear-both text-white flex items-center mr-3 sm:mr-7 lg:mr-10 space-x-3 hover:text-[#ffffffe4] delay-300">
          <p className="text-2xl font-extrabold">Books</p>
          <img onClick={()=>{setSearchModalState(true)}} className="h-7 w-7 cursor-pointer" src="/images/Search.svg" alt="search_icon" />
        </div>

        <Sidebaar/> 



        <FullScreenModal state={addModalState} setState={setAddModalState}>
          {/* <Interactive bg={"#1D3F96"} color="white" size="medium" title="Add your book" close={setAddModalState}>
            
          </Interactive> */}

          <Prompt icon={"book-icon.svg"} direction={"rtl"} onNegativeClick={()=>{
            console.log("I am negative")
          }} onPositiveClick={()=>{
            console.log("I am positive");
          }} close={setAddModalState}/>
        </FullScreenModal>

        <FullScreenModal state={searchModalState} setState={setSearchModalState}>
          <Interactive size="medium" bg={"#1E293B"}>
            <div>
              <div className="flex bg-transparent mb-5">
                <img className="w-10 text-red-600" src="/images/Search.svg" alt="" />
                <input className="bg-transparent outline-none w-full px-3 h-9 placeholder:text-[#9CA3AF] text-lg font-extrabold" type="text" placeholder="Search" />
              </div>

              <div className="w-full min-h-[60%] flex items-center justify-center text-white text-xl font-extrabold">
                <p className="mt-20">Not Search Yet !</p>
              </div>
            </div>
          </Interactive>
        </FullScreenModal>

        <FullScreenModal  state={modalState} setState={setModalState}>
          <Interactive title="Book Title" close={setModalState} size={"large"}/>
        </FullScreenModal>
        <section style={{overflow:"auto"}} className="books float-left clear-both ml-5 xs:ml-24 h-[80vh]">
          <BookHolder title={"Latest"}>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
          </BookHolder>

          <BookHolder title={"Latest"}>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
          </BookHolder>

          <BookHolder title={"Latest"}>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
          </BookHolder>

          <BookHolder title={"Latest"}>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
          </BookHolder>

          <BookHolder title={"Latest"}>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
          </BookHolder>

          <BookHolder title={"Latest"}>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
            <Book onClick={()=>{setModalState(true) }}/>
          </BookHolder>
        </section>
    </div>
  )
}

export default Home;