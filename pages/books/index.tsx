import React from "react";
import { GetStaticProps } from "next";
import Link from "next/link";

import { IReadwiseBooks } from "@typings/Readwise";

import { Page } from "@components/layout/Page/Page";
import { Section } from "@components/layout/Section/Section";
import { Flex } from "@components/layout/Flex/Flex";
import { Headline } from "@components/ui/Headline/Headline";

import {
  filterReadwiseBooks,
  getBooks,
  ignoredReadwiseBooks
} from "@lib/readwise";

interface Props {
  books: IReadwiseBooks;
}

const Books = ({ books }: Props) => {
  const filteredBooks = filterReadwiseBooks(books, ignoredReadwiseBooks);

  return (
    <Page name="Books" title="What I read..">
      <Section classNames={["Home__intro"]}>
        <Headline>Books</Headline>
        <Flex flexWrap="wrap" style={{ gap: "1rem" }}>
          {filteredBooks.map(book => (
            <Link href={`/books/${book.id}`} key={book.id}>
              <a>
                <div
                  className="Book"
                  style={{
                    padding: "1rem",
                    maxWidth: "15rem",
                    border: "1px solid gray"
                  }}
                >
                  <img src={book.cover_image_url} height="200px" />
                  <p>
                    <strong>{book.title}</strong>
                  </p>
                  <p>{book.author}</p>
                  <p>Highlights: {book.num_highlights}</p>
                </div>
              </a>
            </Link>
          ))}
        </Flex>
      </Section>
    </Page>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const books = await getBooks();

  const props: Props = {
    books
  };

  return {
    props
  };
};

export default Books;
