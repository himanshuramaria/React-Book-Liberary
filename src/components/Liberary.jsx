import React, { useContext } from "react";
import Bookcard from "./Bookcard";
import { ProductContext } from "../utils/Context";
import Loading from "./Loading";
import { InputContext } from "../utils/inputContext";

function Liberary() {
  const [Books] = useContext(ProductContext);
  const { inputValue } = useContext(InputContext);
  // console.log(inputValue + "*");

  return Books ? (
    <>
      <div className="flex flex-wrap gap-5 justify-center align-center shrink-0 pl-2">
        {Books.docs.map((p, i) => (
          <Bookcard   key={i} i={i} Books={Books}/>
        ))}
        {/* {console.log(Books)} */}
        
      </div>
    </>
  ) : (
    <Loading />
  );
}

export default Liberary;
