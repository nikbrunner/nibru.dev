import styled from "@emotion/styled";
import { mq } from "@theme/mixins/media-queries";

import { flex } from "@theme/mixins/layout";
import { margin, padding } from "@theme/mixins/spacing";
import { text } from "@theme/mixins/text";

interface IProps {
  coverImageUrl: string;
  title: string;
  author: string;
}

const SBookDetailTitle = styled.header`
  ${flex({ flexflow: "column nowrap" })};

  ${mq.m} {
    ${flex({ flexflow: "row nowrap" })};
  }

  ${margin.bottom.xxl};

  .image {
    ${flex({ justifyContent: "center" })};
    ${margin.bottom.xl};

    ${mq.m} {
      ${margin.right.xxl};
    }
  }

  .title {
    ${text.size.xxl};
    ${text.lineHeight.xs};
    ${margin.zero};
    text-align: center;
  }

  .author {
    text-align: center;
    font-weight: 700;

    ${mq.m} {
      ${padding.left["3xl"]}
    }
  }
`;

export const BookDetailTitle: React.FC<IProps> = ({
  coverImageUrl,
  title,
  author
}) => (
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