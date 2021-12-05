import {
  IReadwiseAuthorizationHeader,
  IReadwiseBook,
  IReadwiseBooks,
  IReadwiseHighlights,
  TIgnoredReadwiseBooks
} from "@typings/Readwise";

const READWISE_API_BASE_URL: string = "https://readwise.io/api/v2";
const BOOKS_SUBPATH: string = "books";
const HIGHLIGHTS_SUBPATH: string = "highlights";

const READWISE_TOKEN: string = process.env.READWISE_TOKEN || "";

export const ignoredReadwiseBooks: TIgnoredReadwiseBooks = [
  "How to Use Readwise",
  "App Development With Swift",
  "Paradox",
  "A Game of Thrones",
  "Die Zwölf",
  "Using Spaced Repetition and Active Recall to Hack Your Brain"
];

export const filterReadwiseBooks = (
  books: IReadwiseBooks,
  ignoredBooks: TIgnoredReadwiseBooks
): IReadwiseBook[] =>
  books
    ? books.results?.filter(
        book =>
          !ignoredBooks.includes(book.title) && book.num_highlights > 0
      )
    : [];

const fetchFromReadwiseAPI = async (
  subpath: string
): Promise<Response> => {
  const authorizationHeader: IReadwiseAuthorizationHeader = {
    Authorization: `Token ${READWISE_TOKEN}`
  };

  const res: Response = await fetch(
    `${READWISE_API_BASE_URL}/${subpath}`,
    {
      headers: {
        ...authorizationHeader
      }
    }
  );

  return res;
};

export const getBooks = async (): Promise<IReadwiseBooks> => {
  const res = await fetchFromReadwiseAPI(BOOKS_SUBPATH);
  const books = res.json() as unknown as IReadwiseBooks;
  return books;
};

export const getBook = async (bookId: string): Promise<IReadwiseBook> => {
  const subpath = `${BOOKS_SUBPATH}/${bookId}`;
  const res = await fetchFromReadwiseAPI(subpath);
  const book = res.json() as unknown as IReadwiseBook;
  return book;
};

export const getHighlights = async (): Promise<IReadwiseHighlights> => {
  const res = await fetchFromReadwiseAPI(HIGHLIGHTS_SUBPATH);
  const highlights = res.json() as unknown as IReadwiseHighlights;
  return highlights;
};

export const getHighlightsForBook = async (
  bookId: string
): Promise<IReadwiseHighlights> => {
  const subpath = `${HIGHLIGHTS_SUBPATH}/?book_id=${bookId}`;
  const res = await fetchFromReadwiseAPI(subpath);
  const highlightsForBook = res.json() as unknown as IReadwiseHighlights;
  return highlightsForBook;
};
