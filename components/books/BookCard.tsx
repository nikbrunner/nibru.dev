import Link from "next/link";
import styled from "@emotion/styled";

import { IGenericProps } from "@typings/GenericProps";
import { IReadwiseBook } from "@typings/Readwise";

import { text } from "@style/mixins/text";
import { bg } from "@style/mixins/bg";
import { border } from "@style/mixins/border";
import { formatDate } from "@lib/date";

interface IProps extends IGenericProps {
  book: IReadwiseBook;
}

const SBookCard = styled.div`
  ${({ theme }) => border.thin(theme.bg.ternary)}
  ${({ theme }) => bg.color.secondary(theme)}
  ${({ theme }) => text.color.primary(theme)}

  padding: 3rem;

  .cover {
    margin-bottom: 1rem;
  }

  .title {
    max-width: 10rem;
  }
`;

export const BookCard = ({
  book: { id, title, cover_image_url, author, num_highlights, updated }
}: IProps): JSX.Element => (
  <Link href={`/books/${id}`} key={id}>
    <a>
      <SBookCard>
        <img className="cover" src={cover_image_url} />

        <h3 className="title">{title}</h3>

        <p className="author">{author}</p>

        <p className="hightlights">
          Highlights: <span>{num_highlights}</span>
        </p>

        <p className="update">
          Updated: <span>{formatDate(updated)}</span>
        </p>
      </SBookCard>
    </a>
  </Link>
);
