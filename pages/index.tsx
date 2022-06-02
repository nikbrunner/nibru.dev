import { css } from "@emotion/react";

import { Section } from "@components/layout/Section";
import { Page } from "@components/layout/Page";
import { Paragraph } from "@components/ui/Paragraph";
import { Link } from "@components/ui/Link";

const Home = () => {
  return (
    <Page title="Hi there. 👋">
      <Section>
        <div>
          <h2
            css={css`
              margin: 0.5em 0 0.5em 0;
              font-size: 2rem;
              font-style: italic;
            `}
          >
            Hi.{" "}
          </h2>

          <Paragraph>
            My name is Nikolaus Brunner, but most people call me Nik.
          </Paragraph>

          <Paragraph>I was born 1984.</Paragraph>

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
            My main technology stack consists of{" "}
            <Link href="https://reactjs.org" type="external">
              React
            </Link>
            , <wbr />
            <Link href="https://www.typescriptlang.org/" type="external">
              TypeScript
            </Link>
            ,{" "}
            <Link href="https://sass-lang.com" type="external">
              SCSS
            </Link>{" "}
            and{" "}
            <Link href="https://nodejs.org/en/" type="external">
              NodeJS
            </Link>{" "}
            but in my free time I try to explore other technologies, frameworks,
            architectures and best practices with some side projects.
          </Paragraph>

          <Paragraph>
            I also love Vim/Neovim and my mechanical split keyboard.
          </Paragraph>

          <Paragraph>
            As far as software development is concerned, I try to put a lot of
            emphasis on good architecture and elegant, yet readable code. I
            don&apos;t want to stick a band-aid on a problem, but try to understand
            and heal the wound.
          </Paragraph>

          <Paragraph>
            In my younger years, I also worked as a Photographer, Audio & Video
            Engineer in Studios and Hotels, but also as a Landscaper and I also
            washed many dishes.
          </Paragraph>

          <Paragraph>
            While this probably sounds confusing, since 2020 I now work as a Software
            Engineer, and I am very happy with my path, and I also think my previous
            experiences make me a better developer.
          </Paragraph>

          <Paragraph>
            Otherwise I love to go hiking and running and meditating outside.
          </Paragraph>

          <Paragraph>
            If my brain still has some energy left, I also read alot of books about
            Philosophy, History and other non-fiction topics.
          </Paragraph>
        </div>
      </Section>
    </Page>
  );
};

export default Home;
