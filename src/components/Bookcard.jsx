import React from "react";
import { useState } from "react";
import { ProductContext } from "../utils/Context";
import { useContext } from "react";

function Bookcard({ i, Books }) {
  const [books, setBooks] = useContext(ProductContext)
  const [clicked, setClicked] = useState(false);
  const [shelfBooks, setShelfBooks] = useState([]);
  
  function HandleClick(j){
    // books.docs[j].clk = clicked;
    setClicked(!clicked);
    const mybook = {
      
      // id : 1,
      title : Books.docs[j].title,
      // title : "hello",
      // edition_count : Books.docs[j].edition_count,
      edition_count : 123,
    };
    // shelfBooks.push(mybook);
    setShelfBooks([...shelfBooks, mybook]); 
    // localStorage.setItem('Books', JSON.stringify(shelfBooks));  
    console.log(mybook);
    console.log(shelfBooks);
  }
  
  return (
    <>
      <div className="card flex flex-col justify-between rounded-md h-[180px] w-[150px] shadow bg-zinc-100 shrink-0 hover:shadow-lg">
        <div className="card flex flex-col justify-between rounded-md h-[180px] w-[150px] shadow bg-zinc-100 shrink-0 hover:shadow-lg">
          <h1 className="text-xl">{Books.docs[i].title}</h1>
          <h3 className="text-xsm text-blue-500">
            Edition Count : {Books.docs[i].edition_count}
          </h3>

          <button 
            onClick={()=>HandleClick(i)}
            className={`text-sm ${clicked ? "bg-green-300":"bg-red-200"} p-1 hover:text-base`}>
            {clicked ?"ADDED" : "Add to Book Shelf" }
          </button>
        </div>
      </div>
    </>
  );
}

export default Bookcard;