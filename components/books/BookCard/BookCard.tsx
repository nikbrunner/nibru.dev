import React from "react";
import Link from "next/link";

import { IGenericProps } from "@typings/GenericProps";
import { IReadwiseBook } from "@typings/Readwise";

import { cn } from "@lib/cn";
import { formatDate } from "@lib/date";

interface IProps extends IGenericProps {
  book: IReadwiseBook;
}

export const BookCard = ({
  classNames,
  style,
  book: { id, title, cover_image_url, author, num_highlights, updated }
}: IProps) => (
  <Link href={`/books/${id}`} key={id}>
    <a>
      <div
        style={style}
        className={cn(
          `
            BookCard
            bg-gray-200
            p-8
            border-t-4
            border-blue-500
            dark:border-green-500
            flex
            flex-col
            justify-center
            items-center
            h-full
            `,
          classNames,
          {}
        )}
      >
        <img className="mb-3 max-w-sm" src={cover_image_url} />

        <h3 className="text-2xl mb-2 font-bold">{title}</h3>

        <p className="mb-4">{author}</p>

        <p className="text-sm border-t-2 pt-3 border-gray-400">
          Highlights:{" "}
          <span className="font-semibold">{num_highlights}</span>
        </p>

        <p className="text-sm">
          Updated:{" "}
          <span className="font-semibold">{formatDate(updated)}</span>
        </p>
      </div>
    </a>
  </Link>
);
