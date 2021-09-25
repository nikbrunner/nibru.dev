import React from "react";
import { GetStaticProps } from "next";

import { IReadwiseBooks } from "@typings/Readwise";

import { Page } from "@components/layout/Page";
import { Section } from "@components/layout/Section";
import { Headline } from "@components/ui/Headline";
import { Paragraph } from "@components/ui/Paragraph";
import { BookCard } from "@components/books/BookCard";
import { BooksLayout } from "@components/books/BookLayout";

import {
  filterReadwiseBooks,
  getBooks,
  ignoredReadwiseBooks
} from "@lib/readwise";

interface IProps {
  books: IReadwiseBooks;
}

const Books = ({ books }: IProps) => {
  const filteredBooks = filterReadwiseBooks(books, ignoredReadwiseBooks);

  return (
    <Page name="Books" title="What I read..">
      <Section classNames={["Home__intro"]}>
        <Headline>Books</Headline>

        <Paragraph style={{ marginBottom: "1rem" }}>
          These are some of my Books I have read and highlighted.
        </Paragraph>

        <BooksLayout>
          {filteredBooks?.map(book => (
            <BookCard book={book} key={book.id} />
          ))}
        </BooksLayout>
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
