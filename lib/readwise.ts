import {
  IReadwiseBook,
  IReadwiseBooks,
  TIgnoredReadwiseBooks
} from "@typings/Readwise";

export const filterReadwiseBooks = (
  books: IReadwiseBooks,
  ignoredBooks: TIgnoredReadwiseBooks
): IReadwiseBook[] => {
  return books
    ? books.results?.filter(
        book =>
          !ignoredBooks.includes(book.title) && book.num_highlights > 0
      )
    : [];
};
