import React from "react";
import Link from "next/link";

import { IGenericProps } from "@typings/GenericProps";
import { IReadwiseBook } from "@typings/Readwise";

import { cn } from "@lib/cn";
import { formatDate } from "@lib/date";

const componentName: string = "BookCard";

interface IProps extends IGenericProps {
  book: IReadwiseBook;
}

export const BookCard = ({
  style,
  book: { id, title, cover_image_url, author, num_highlights, updated }
}: IProps): JSX.Element => (
  <Link href={`/books/${id}`} key={id}>
    <a>
      <div
        style={style}
        className={cn({
          block: componentName,
          utils: [
            "bg-gray-200",
            "p-8",
            "border-t-4",
            "border-blue-500",
            "flex",
            "flex-col",
            "justify-center",
            "items-center",
            "h-full"
          ]
        })}
      >
        <img
          className={cn({
            block: componentName,
            element: "cover-image",
            utils: ["mb-3", "max-w-sm"]
          })}
          src={cover_image_url}
        />

        <h3
          className={cn({
            block: componentName,
            element: "title",
            utils: ["text-2xl", "mb-2", "font-bold"]
          })}
        >
          {title}
        </h3>

        <p
          className={cn({
            block: componentName,
            element: "author",
            utils: ["mb-4"]
          })}
        >
          {author}
        </p>

        <p
          className={cn({
            block: componentName,
            element: "num-of-highlights",
            utils: ["text-sm", "border-t-2", "pt-3", "border-gray-400"]
          })}
        >
          Highlights:{" "}
          <span className="font-semibold">{num_highlights}</span>
        </p>

        <p
          className={cn({
            block: componentName,
            element: "updated-date",
            utils: ["text-sm"]
          })}
        >
          Updated:{" "}
          <span className="font-semibold">{formatDate(updated)}</span>
        </p>
      </div>
    </a>
  </Link>
);
