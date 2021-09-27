import { css } from "@emotion/react";

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { RiXingLine } from "react-icons/ri";

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

        <Paragraph>My name is Nik.</Paragraph>

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

        <Paragraph>
          This website is being rebuilt.
          <br /> You can visit my old website{" "}
          <Link href="/archive/index.html" type="internal">
            here
          </Link>
          .
        </Paragraph>

        <Paragraph>
          Developing{" "}
          <Link href="https://sonder.haus" type="external">
            sonder.haus
          </Link>
          .
        </Paragraph>
      </div>
    </Section>
  </Page>
);

export default Home;
