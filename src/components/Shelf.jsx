import React from 'react'
import { ProductContext } from '../utils/Context';
import { useContext } from 'react';
import Bookcard from './Bookcard';
import Loading from './Loading';

function Shelf() {
    // const [books, setBooks] = useContext(ProductContext);
    const [Books] = useContext(ProductContext);

  return Books ?( 
    <>
    <div className="flex flex-wrap gap-5 justify-center align-center shrink-0 pl-2">
        {Books.docs.filter((i) => (
            Books.docs[i]&&
          <Bookcard   key={i} i={i} Books={Books}/>
        ))}
      </div>
    </>

  ): <Loading />
}

export default Shelf