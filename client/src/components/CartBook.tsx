/* eslint-disable no-unused-vars */

import { cartState } from "../store/atoms/cart";
import { useRecoilValue } from "recoil";
import { useState } from "react";
import { Divider } from "@mui/material";

interface BookProps {
  imagesrc: string;
  title: string;
  description: string;
  price: number;
  sale: number;
  onClick?: React.FC;
}
export const CartBook: React.FC<BookProps> = (props) => {
  const cartItems = useRecoilValue(cartState);
  console.log(cartItems);
  const [count, setCount] = useState(1);

  function handleIncrement() {
    setCount(() => count + 1);
  }
  function handleDecrement() {
    setCount(() => count - 1);
  }

  const { imagesrc, title, description, price, sale, onClick } = props;
  return (
    <div
      className="font-[nunito-sans] flex w-[20rem] justify-between items-center flex-col"
      onClick={onClick}
    >
      <div className="flex">
        <div>
          {imagesrc && (
            <img
              src={imagesrc}
              alt={"bookimage"}
              className="h-[7em] w-[11.25em] object-contain relative top-16"
            />
          )}
        </div>
        <div className="w-40 pt-[4.1rem] grid justify-center">
          <div>
            <div className="w-32 flex flex-col gap-2 ">
              <h2 className="font-normal text-base font-[Montserrat]">
                {title}
              </h2>
              <p className="text-sm text-[#0D084285]">{description}</p>
              <div className="flex justify-between">
                <p>$ {price}</p> <br />
                <span className="line-through text-[#6C6C6C]">$ {sale} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-2 border-slate-200 w-20 flex justify-between mt-5 ml-48">
        <button onClick={handleDecrement} type="button">
          -
        </button>
        {count}{" "}
        <button onClick={handleIncrement} type="button">
          +
        </button>
      </div>
      <hr />
      <Divider />
    </div>
  );
};

export default CartBook;
