import Book from "../../components/Book";
import BookHolder from "../../components/BookHolder";
import Sidebaar from "../../components/Sidebaar";


function Home() {
  return (
    <div style={{overflow:"hidden"}} className='page-home w-[100vw] h-[100vh] pt-[13vh] bg-background'>
        <div className="addBook bg-white w-24 space-x-1 flex items-center p-1 rounded-md ml-4 sm:ml-9 lg:ml-14 cursor-pointer hover:bg-[#fffffff0] delay-200 float-left clear-both">
            <img className="h-7 w-7" src="/images/Plus.svg" alt="add_book_icon" />
            <p className="text-xl font-extrabold">Book</p>
        </div>
        <div className="search float-right clear-both text-white flex items-center mr-3 sm:mr-7 lg:mr-10 space-x-3 hover:text-[#ffffffe4] delay-300">
          <p className="text-2xl font-extrabold">Books</p>
          <img className="h-7 w-7 cursor-pointer" src="/images/Search.svg" alt="search_icon" />
        </div>

        <Sidebaar/> 

        <section style={{overflow:"auto"}} className="books float-left clear-both ml-5 xs:ml-24 h-[80vh]">
          <BookHolder title={"Latest"}>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
          </BookHolder>

          <BookHolder title={"Latest"}>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
          </BookHolder>
        </section>
    </div>
  )
}

export default Home;