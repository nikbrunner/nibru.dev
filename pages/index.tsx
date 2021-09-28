import { css } from "@emotion/react";

import { Section } from "@components/layout/Section";
import { Page } from "@components/layout/Page";
import { Paragraph } from "@components/ui/Paragraph";
import { Link } from "@components/ui/Link";

const Home = () => (
  <Page title="Hi there. 👋">
    <Section>
      <div>
        <h2
          css={css`
            margin: 0.5em 0 0.75em 0;
            font-size: 5rem;
            font-style: italic;
          `}
        >
          hi
        </h2>

        <Paragraph>
          This is my little space on the internet. <br /> My name is Nik.
        </Paragraph>

        <Paragraph>
          I am working as a Software Engineer for{" "}
          <Link href="https://bike.center" type="external">
            DealerCenter Digital
          </Link>
          .
        </Paragraph>

        <Paragraph>
          Previously I worked for{" "}
          <Link href="https://https://www.diva-e.com/de/" type="external">
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

export default Home;
