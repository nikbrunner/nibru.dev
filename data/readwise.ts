import {
  IReadwiseBook,
  IReadwiseBooks,
  IReadwiseHighlights,
  IReadwiseAuthorizationHeader,
  TIgnoredReadwiseBooks
} from "@typings/Readwise";

const READWISE_API_BASE_URL = "https://readwise.io/api/v2";

export const READWISE_TOKEN =
  "U2IRL7criWWBACdptxm2Itmi5rNFBCvZO2jMpYrCblOeC3P1ig";

const authHeader = (token: string): IReadwiseAuthorizationHeader => ({
  Authorization: `Token ${token}`
});

export const ignoredReadwiseBooks: TIgnoredReadwiseBooks = [
  "How to Use Readwise",
  "App Development With Swift",
  "Paradox"
];

export const getBooks = async (
  {
    readwiseApiUrl = READWISE_API_BASE_URL,
    token = READWISE_TOKEN
  }: {
    readwiseApiUrl?: string;
    token?: string;
  } = {
    readwiseApiUrl: READWISE_API_BASE_URL,
    token: READWISE_TOKEN
  }
): Promise<IReadwiseBooks> => {
  const res = await fetch(`${readwiseApiUrl}/books`, {
    headers: {
      ...authHeader(token)
    }
  });

  const books: IReadwiseBooks = (res.json() as unknown) as IReadwiseBooks;

  return books;
};

export const getBook = async ({
  readwiseApiUrl = READWISE_API_BASE_URL,
  token = READWISE_TOKEN,
  bookId
}: {
  readwiseApiUrl?: string;
  token?: string;
  bookId: string;
}): Promise<IReadwiseBook> => {
  const res = await fetch(`${readwiseApiUrl}/books/${bookId}`, {
    headers: {
      ...authHeader(token)
    }
  });

  const book: IReadwiseBook = (res.json() as unknown) as IReadwiseBook;

  return book;
};

export const getHighlights = async ({
  readwiseApiUrl = READWISE_API_BASE_URL,
  token = READWISE_TOKEN
}: {
  readwiseApiUrl?: string;
  token?: string;
}): Promise<IReadwiseHighlights> => {
  const res = await fetch(`${readwiseApiUrl}/highlights`, {
    headers: {
      ...authHeader(token)
    }
  });

  const highlights: IReadwiseHighlights = (res.json() as unknown) as IReadwiseHighlights;

  return highlights;
};

export const getHighlightsForBook = async ({
  readwiseApiUrl = READWISE_API_BASE_URL,
  token = READWISE_TOKEN,
  bookId
}: {
  readwiseApiUrl?: string;
  token?: string;
  bookId: string;
}): Promise<IReadwiseHighlights> => {
  const res = await fetch(
    `${readwiseApiUrl}/highlights/?book_id=${bookId}`,
    {
      headers: {
        ...authHeader(token)
      }
    }
  );

  const highlightsForBookId: IReadwiseHighlights = (res.json() as unknown) as IReadwiseHighlights;

  return highlightsForBookId;
};
