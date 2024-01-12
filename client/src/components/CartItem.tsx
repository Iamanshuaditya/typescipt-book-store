import CartBook from "./CartBook";
import { cartState } from "../store/atoms/cart";

import { useRecoilValue } from "recoil";

export default function CartItem() {
  const cartItems = useRecoilValue(cartState);

  if (!cartItems || Object.keys(cartItems).length === 0) {
    return (
      <>
        <div className="mt-5">
          <center>
            {" "}
            <h1>NO Item In the Cart</h1>
          </center>
        </div>
      </>
    );
  }
  return (
    <div className="flex flex-col">
      {cartItems.map((bookData, _id) => (
        <CartBook
          key={_id}
          imagesrc={bookData && bookData["Image-URL-L"]}
          title={bookData["Title"]}
          description={bookData["Authors"][0]}
          price={bookData["price"]}
          sale={bookData["salePrice"]}
        />
      ))}
    </div>
  );
}
