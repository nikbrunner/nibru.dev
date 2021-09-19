import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import { IReadwiseBook, IReadwiseHighlights } from "@typings/Readwise";

import { Page } from "@components/layout/Page/Page";
import { getBook, getBooks, getHighlightsForBook } from "@lib/readwise";
import { BookHighlight } from "@components/books/BookHighlight/BookHighlight";

interface IProps {
  book: IReadwiseBook;
  highlightsForBook: IReadwiseHighlights;
}

const Book = ({ book, highlightsForBook }: IProps): JSX.Element => (
  <Page name="Book" title="jo">
    <h1 className="text-center pb-8 mb-8">{book.title}</h1>
    <img
      className="mb-7 mx-auto"
      src={book.cover_image_url}
      alt={`Cover for ${book.title}`}
    />

    <ul>
      {highlightsForBook?.results?.map(highlight => (
        <BookHighlight highlight={highlight} key={highlight.id} />
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
