import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import {
  IReadwiseBook,
  IReadwiseBooks,
  IReadwiseHighlights
} from "@typings/Readwise";

import { Page } from "@components/layout/Page/Page";
import { getBook, getBooks, getHighlightsForBook } from "@lib/readwise";

interface IProps {
  book: IReadwiseBook;
  highlightsForBook: IReadwiseHighlights;
}

const Book = ({ book, highlightsForBook }: IProps): JSX.Element => (
  <Page name="Book" title="jo">
    <h1>{book.title}</h1>
    <img src={book.cover_image_url} alt={`Cover for ${book.title}`} />

    <ul>
      {highlightsForBook?.results?.map(highlight => (
        <li key={highlight.id}>{highlight.text}</li>
      ))}
    </ul>
  </Page>
);

export const getStaticPaths: GetStaticPaths = async () => {
  const books = await getBooks();

  const paths = books?.results?.map(book => ({
    params: { bookId: book.id.toString() }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const bookId = params.bookId.toString();

  const book = await getBook(bookId);
  const highlightsForBook = await getHighlightsForBook(bookId);

  const props: IProps = {
    book,
    highlightsForBook
  };

  return {
    props
  };
};

export default Book;
