import { ComponentProps } from "react";
import styled from "@emotion/styled";

import { flex } from "@theme/mixins/layout";
import { margin, padding } from "@theme/mixins/spacing";
import { mq } from "@theme/mixins/media-queries";
import { text } from "@theme/mixins/text";

import { BookDetailTitle } from "./BookDetailTitle";

type Props = Partial<ComponentProps<typeof BookDetailTitle>>;

const Style = styled.header<Props>`
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

    max-width: 134px;

    img {
      max-width: 100%;
    }
  }

  .meta {
    width: 100%;
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

export default Style;
