import React from "react";
import { GetStaticProps } from "next";

import { IReadwiseBooks } from "@typings/Readwise";

import { Page } from "@components/layout/Page/Page";
import { Section } from "@components/layout/Section/Section";
import { Headline } from "@components/ui/Headline/Headline";
import { Paragraph } from "@components/ui/Paragraph/Paragraph";
import { BookCard } from "@components/books/BookCard/BookCard";
import { BookLayout } from "@components/books/BookLayout/BookLayout";

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

        <BookLayout>
          {filteredBooks?.map(book => (
            <BookCard book={book} key={book.id} />
          ))}
        </BookLayout>
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
