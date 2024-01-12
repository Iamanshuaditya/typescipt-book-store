import { atom } from "recoil";


 export interface Book{
  _id: number;
  "Image-URL-L": string;
  Title: string;
  Authors: Array<string>;
  price: number;
  salePrice: number;
}

interface BookState {
  isLoading: boolean;
  books: Book[] | null
}

export const bookState = atom<BookState>({
  key: "bookState",
  default: {
    isLoading: true,
    books: [],
  },
});
