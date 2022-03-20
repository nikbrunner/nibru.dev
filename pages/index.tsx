import { css, useTheme } from "@emotion/react";

import { Section } from "@components/layout/Section";
import { Page } from "@components/layout/Page";
import { Paragraph } from "@components/ui/Paragraph";
import { Link } from "@components/ui/Link";

import { text } from "@theme/mixins/text";
import { margin } from "@theme/mixins/spacing";

const Home = () => {
  const theme = useTheme();

  return (
    <Page title="Hi there. 👋">
      <Section>
        <div>
          <h2
            css={css`
              margin: 0.5em 0 0.5em 0;
              font-size: 5rem;
              font-style: italic;
            `}
          >
            Hi.{" "}
          </h2>

          <Paragraph>My name is Nik.</Paragraph>
          <Paragraph>This is my little space on the internet.</Paragraph>

          <Paragraph>
            There is not much to see here atm, <br /> because I am busy
            working as a Software Engineer for{" "}
            <Link href="https://bike.center" type="external">
              DealerCenter Digital
            </Link>
            .
          </Paragraph>

          <Paragraph>
            Previously I worked for{" "}
            <Link
              href="https://https://www.diva-e.com/de/"
              type="external"
            >
              diva-e
            </Link>
            .
          </Paragraph>

          <Paragraph>
            I mainly work with <strong className="font-bold">React</strong>
            , <wbr />
            <strong>TypeScript</strong> and <strong>SCSS</strong>.
          </Paragraph>
        </div>
      </Section>
    </Page>
  );
};

export default Home;
