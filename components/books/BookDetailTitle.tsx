import styled from "@emotion/styled";
import { mq } from "@style/config/media-queries";

import { flex } from "@style/config/mixins";
import { space } from "@style/config/space";

interface IProps {
  coverImageUrl: string;
  title: string;
  author: string;
}

const SBookDetailTitle = styled.header`
  ${flex("column nowrap")}

  ${mq.m} {
    ${flex("row nowrap")}
  }

  margin-bottom: ${space.xxl};

  .image {
    margin-right: ${space.xxl};
  }

  .title {
    font-size: 5rem;
    line-height: 1;
    margin: 0;
  }

  .author {
    font-weight: 700;
    padding-left: ${space.xxxl};
  }
`;

export const BookDetailTitle = ({
  coverImageUrl,
  title,
  author
}: IProps) => (
  <SBookDetailTitle>
    <div className="image">
      <img src={coverImageUrl} alt={`Cover for ${title}`} />
    </div>

    <div className="meta">
      <h2 className="title">{title}</h2>
      <p className="author">{author}</p>
    </div>
  </SBookDetailTitle>
);
