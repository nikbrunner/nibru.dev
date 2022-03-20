import Link from "next/link";
import styled from "@emotion/styled";

import { IGenericProps } from "@typings/GenericProps";
import { IReadwiseBook } from "@typings/Readwise";

import { background } from "@mixins/background";
import { border } from "@mixins/border";
import { text } from "@theme/mixins/text";
import { formatDate } from "@lib/date";
import { margin, padding } from "@theme/mixins/spacing";

interface IProps extends IGenericProps {
  book: IReadwiseBook;
}

const SBookCard = styled.div`
  ${({ theme }) => border.thin(theme.bg.ternary)}
  ${({ theme }) => background.color.primary(theme)}
  ${({ theme }) => text.color.primary(theme)}

  ${padding["3xl"]}
  height: 100%;

  .cover {
    ${margin.bottom.l}
    width: 133px;
    height: 200px;
    object-fit: contain;
  }

  .title {
    max-width: 10rem;
  }
`;

export const BookCard: React.FC<IProps> = ({
  book: { id, title, cover_image_url, author, num_highlights, updated }
}): JSX.Element => (
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
