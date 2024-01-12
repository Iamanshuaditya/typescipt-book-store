import * as React from "react";
import { FaShoppingCart } from "react-icons/fa";

interface BookProps {
  imagesrc: string;
  title: string;
  description: string;
  price: number;
  sale: number;
  onClick?: () => void;
}
export const Book: React.FC<BookProps> = (props) => {
  const { imagesrc, title, description, price, sale, onClick } = props;
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Clicked Add to Basket button");
    event.stopPropagation();
    onClick && onClick();
  };

  return (
    <div className="font-[nunito-sans] flex w-[22rem] justify-between items-center">
      <div>
        {imagesrc && (
          <img
            src={imagesrc}
            alt={"bookimage"}
            className="h-[15.625em] w-[11.25em] object-contain"
          />
        )}
      </div>
      <div className="w-40 pt-[4.1rem] grid justify-center">
        <div>
          <div className="w-32 flex flex-col gap-2 ">
            <h2 className="font-normal text-base font-[Montserrat]">{title}</h2>
            <p className="text-sm text-[#0D084285]">{description}</p>
            <div className="flex justify-between">
              <p>$ {price}</p> <br />
              <span className="line-through text-[#6C6C6C]">$ {sale} </span>
            </div>
          </div>
          <button
            className="h-[1em] w-15 flex items-center justify-between box-border px-3 py-3 font-bold font-[nunito-sans] rounded-lg text-[#FFFFFF] bg-[#FFCE1A] border-none"
            onClick={handleClick}
          >
            <FaShoppingCart />
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
