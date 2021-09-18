import {
  IReadwiseBook,
  IReadwiseBooks,
  IReadwiseHighlights,
  IReadwiseAuthorizationHeader,
  TIgnoredReadwiseBooks
} from "@typings/Readwise";

const READWISE_API_BASE_URL = "https://readwise.io/api/v2";
const BOOKS_SUBPATH = "books";
const HIGHLIGHTS_SUBPATH = "highlights";

export const READWISE_TOKEN =
  "U2IRL7criWWBACdptxm2Itmi5rNFBCvZO2jMpYrCblOeC3P1ig";

export const ignoredReadwiseBooks: TIgnoredReadwiseBooks = [
  "How to Use Readwise",
  "App Development With Swift",
  "Paradox"
];

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
  const books = (res.json() as unknown) as IReadwiseBooks;
  return books;
};

export const getBook = async (bookId: string): Promise<IReadwiseBook> => {
  const subpath = `${BOOKS_SUBPATH}/${bookId}`;
  const res = await fetchFromReadwiseAPI(subpath);
  const book = (res.json() as unknown) as IReadwiseBook;
  return book;
};

export const getHighlights = async (): Promise<IReadwiseHighlights> => {
  const res = await fetchFromReadwiseAPI(HIGHLIGHTS_SUBPATH);
  const highlights = (res.json() as unknown) as IReadwiseHighlights;
  return highlights;
};

export const getHighlightsForBook = async (
  bookId: string
): Promise<IReadwiseHighlights> => {
  const subpath = `${HIGHLIGHTS_SUBPATH}/?book_id=${bookId}`;
  const res = await fetchFromReadwiseAPI(subpath);
  const highlightsForBook = (res.json() as unknown) as IReadwiseHighlights;
  return highlightsForBook;
};
