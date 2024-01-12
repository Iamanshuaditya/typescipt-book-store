import { selector } from "recoil";
import { bookState } from "../atoms/book";

export const isbookLoading = selector({
  key: "isBookLoadingState",
  get: ({ get }) => {
    const state = get(bookState);

    return state.isLoading;
  },
});

export const bookDetails = selector({
  key: "bookDetailsState",
  get: ({ get }) => {
    const state = get(bookState);
    return state.books || null;
  },
});

export const bookTitle = selector({
  key: "bookTitleState",
  get: ({ get }) => {
    const state = get(bookState);
    if (state.books && state.books.length > 0) {
      return state.books.map((book) => book.Title);
    }

    return [];
  },
});

export const bookPrice = selector({
  key: "bookPriceState",
  get: ({ get }) => {
    const state = get(bookState);
    if (state.books && state.books.length > 0) {
      return state.books.map((book) => book.price);
    }

    return [];
  },
});

export const bookImage = selector({
  key: "bookImageState",
  get: ({ get }) => {
    const state = get(bookState);
    if (state.books && state.books.length > 0) {
      return state.books.map((book) => book["Image-URL-L"]);
    }

    return [];
  },
});

export const salePrice = selector({
  key: "salePriceState",
  get: ({ get }) => {
    const state = get(bookState);
    if (state.books && state.books.length > 0) {
      return state.books.map((book) => book.salePrice);
    }

    return [];
  },
});
