import React from "react";
import Link from "next/link";

import { IGenericProps } from "@typings/GenericProps";
import { IReadwiseBook } from "@typings/Readwise";

import { formatDate } from "@lib/date";
import { SBookCard } from "../../styles/BookCard.style";

interface IProps extends IGenericProps {
  book: IReadwiseBook;
}

export const BookCard = ({
  book: { id, title, cover_image_url, author, num_highlights, updated }
}: IProps): JSX.Element => (
  <SBookCard>
    <Link href={`/books/${id}`} key={id}>
      <a>
        <img className="cover" src={cover_image_url} />

        <h3 className="title">{title}</h3>

        <p className="author">{author}</p>

        <p className="hightlights">
          Highlights: <span>{num_highlights}</span>
        </p>

        <p className="update">
          Updated: <span>{formatDate(updated)}</span>
        </p>
      </a>
    </Link>
  </SBookCard>
);
