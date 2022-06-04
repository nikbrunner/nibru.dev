import Link from "next/link";

import { IReadwiseBook } from "@typings/Readwise";
import { formatDate } from "@lib/date";

import Style from "./BookCard.style";

interface IProps {
  book: IReadwiseBook;
}

export const BookCard: React.FC<IProps> = ({
  book: { id, title, cover_image_url, author, num_highlights, updated }
}): JSX.Element => (
  <Link href={`/books/${id}`} key={id}>
    <a>
      <Style>
        <img className="cover" src={cover_image_url} alt={title} />

        <h3 className="title">{title}</h3>

        <p className="author">{author}</p>

        <p className="hightlights">
          Highlights: <span>{num_highlights}</span>
        </p>

        <p className="update">
          Updated: <span>{formatDate(updated)}</span>
        </p>
      </Style>
    </a>
  </Link>
);
