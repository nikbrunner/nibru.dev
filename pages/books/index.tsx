import { GetStaticProps } from "next";
import { css } from "@emotion/react";

import { IReadwiseBooks } from "@typings/Readwise";

import { Page } from "@components/layout/Page";
import { Section } from "@components/layout/Section";
import { Paragraph } from "@components/typography/Paragraph";
import { BookCard } from "@components/books/BookCard";
import { BookCardsLayout } from "@components/books/BookCardsLayout";

import { filterBooksByTag, getBooks } from "@lib/readwise";

interface IProps {
  books: IReadwiseBooks;
}

const Books = ({ books }: IProps) => {
  const publicBooks = filterBooksByTag(books, "public");

  return (
    <Page title="Books">
      <Section>
        <h1
          className="header"
          css={css`
            margin-top: 0;
            font-size: 5rem;
          `}
        >
          Books
        </h1>

        <Paragraph style={{ marginBottom: "1rem" }}>
          These are some of my Books I have read and highlighted.
        </Paragraph>

        <BookCardsLayout>
          {publicBooks?.map(book => (
            <BookCard book={book} key={book.id} />
          ))}
        </BookCardsLayout>
      </Section>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const books = await getBooks();

  const props: IProps = {
    books
  };

  return {
    props
  };
};

export default Books;
