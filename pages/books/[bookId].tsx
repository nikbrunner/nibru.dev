import { css } from "@emotion/react";
import { GetStaticPaths, GetStaticProps } from "next";

import { IReadwiseBook, IReadwiseHighlights } from "@typings/Readwise";

import { Page } from "@components/layout/Page";
import { getBook, getBooks, getHighlightsForBook } from "@lib/readwise";
import { BookHighlight } from "@components/books/BookHighlight";
import { BookHighlights } from "@components/books/BookHighlights";
import { flex } from "@style/config/mixins";
import { BookDetailTitle } from "@components/books/BookDetailTitle";

interface IProps {
  book: IReadwiseBook;
  highlightsForBook: IReadwiseHighlights;
}

const Book = ({
  book: { title, cover_image_url, author },
  highlightsForBook
}: IProps): JSX.Element => (
  <Page title="Book">
    <BookDetailTitle
      coverImageUrl={cover_image_url}
      title={title}
      author={author}
    />

    <BookHighlights>
      {highlightsForBook?.results?.map(highlight => (
        <BookHighlight highlight={highlight} key={highlight.id} />
      ))}
    </BookHighlights>
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
