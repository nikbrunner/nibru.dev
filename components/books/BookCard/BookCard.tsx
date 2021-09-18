import React from "react";
import Link from "next/link";
import dayjs from "dayjs";

import { IGenericProps } from "@typings/GenericProps";
import { IReadwiseBook } from "@typings/Readwise";

import { cn } from "@lib/cn";

interface IProps extends IGenericProps {
  book: IReadwiseBook;
}

export const BookCard = ({ classNames, style, book }: IProps) => {
  const {
    id,
    title,
    cover_image_url,
    author,
    num_highlights,
    updated
  } = book;

  return (
    <Link href={`/books/${id}`} key={id}>
      <a>
        <div style={style} className={cn("BookCard", classNames, {})}>
          <img className="BookCard__image" src={cover_image_url} />

          <p className="BookCard__title">{title}</p>

          <p className="BookCard__author">{author}</p>

          <p className="BookCard__highlights">
            Highlights: <span>{num_highlights}</span>
          </p>

          <p className="BookCard__updated">
            Updated: <span>{dayjs(updated).format("YY.MM.DD")}</span>
          </p>
        </div>
      </a>
    </Link>
  );
};
