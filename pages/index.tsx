import { Section } from "@components/layout/Section";
import { Page } from "@components/layout/Page";
import { Paragraph } from "@components/typography/Paragraph";
import { Link } from "@components/typography/Link";
import { Highlight } from "@components/typography/Highlight";
import { Headline } from "@components/typography/Headline";
import { Spacer } from "@components/layout/Spacer";
import { css } from "@emotion/react";
import { space } from "@theme/mixins/space";

const Greeting = () => (
  <div
    css={css`
      display: grid;
      grid-template-columns: 0.35fr 0.65fr;
      gap: ${space.xl};
      align-items: center;
    `}
  >
    <span
      css={css`
        font-size: 5rem;
      `}
    >
      👋
    </span>

    <h1
      css={css`
        margin: 0;
      `}
    >
      My name is <Highlight underline>Nikolaus Brunner</Highlight>,<br />
      but most people call me <Highlight>Nik</Highlight>
    </h1>
  </div>
);

const Home = () => {
  return (
    <Page title="Hi there. 👋">
      <Section>
        <Spacer space="xxl" />

        <Greeting />

        <Spacer space="xxl" />

        <Headline>Work</Headline>

        <Paragraph>
          I am working as a{" "}
          <Highlight>
            Software Engineer for{" "}
            <Link href="https://bike.center" type="external">
              DealerCenter Digital
            </Link>
          </Highlight>
          .
        </Paragraph>

        <Paragraph>
          Previously I worked for{" "}
          <Link href="https://https://www.diva-e.com/de/" type="external">
            diva-e
          </Link>
          .
        </Paragraph>

        <Paragraph emphasis>
          My main technology stack right now consists of{" "}
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
          but in my free time I try to explore other languages, frameworks,
          architectures and best practices with some side projects.
        </Paragraph>

        <Paragraph>
          And to intimately familiarize myself with Linux, I run{" "}
          <Link href="https://endeavouros.com/" type="external">
            EndeavourOS
          </Link>
          , and before that{" "}
          <Link href="https://pop.system76.com/" type="external">
            Pop!_OS
          </Link>
          , as my main operating system on my personal computer.
        </Paragraph>

        <Paragraph>
          I also love <Highlight>Vim/Neovim</Highlight> and my{" "}
          <Highlight>mechanical split keyboard</Highlight>.
        </Paragraph>

        <Paragraph>
          As far as software development is concerned, I try to put a lot of emphasis
          on good architecture and elegant, yet readable code.{" "}
          <Highlight>
            I don&apos;t want to stick a band-aid on a problem, but try to understand
            and heal the wound.
          </Highlight>
        </Paragraph>

        <Paragraph>
          At the moment, I try to learn{" "}
          <Highlight>
            <Link href="https://go.dev/" type="external">
              Go
            </Link>
          </Highlight>{" "}
          and{" "}
          <Highlight>
            <Link href="https://emotion.sh/docs/introduction" type="external">
              Styled Components & EmotionCSS
            </Link>
          </Highlight>
        </Paragraph>

        <Paragraph>
          In my younger years, I also worked as a <Highlight>Photographer</Highlight>
          , <Highlight>Audio & Video Engineer</Highlight> in Studios and Hotels, but
          also as a <Highlight>Landscaper</Highlight> and I also{" "}
          <Highlight>washed many dishes</Highlight>.
        </Paragraph>

        <Paragraph>
          While this probably sounds confusing, since 2020 I now work as a Software
          Engineer, and I am very <Highlight>happy with my path</Highlight>, and I
          also think my previous experiences make me a{" "}
          <Highlight>better developer</Highlight>.
        </Paragraph>
      </Section>

      <Section>
        <Headline>Personal</Headline>

        <Paragraph>
          I was born <Highlight>1984</Highlight>.
        </Paragraph>

        <Paragraph>
          <Highlight>I love nature</Highlight>, and to go outside hiking and running
          and meditating.
        </Paragraph>

        <Paragraph>
          If my brain still has some energy left, I also{" "}
          <Highlight>read alot of books</Highlight> about Philosophy, History and
          other non-fiction topics.
        </Paragraph>
      </Section>

      <Spacer space="xl" />

      <Section>
        <Paragraph emphasis>
          I think that should cover the basics. You can find a picture of me and
          other stuff in the links in the footer.
          <br />
          <br />
          If you want to get in <Highlight>contact with me</Highlight>, you can DM me
          on{" "}
          <Link href="https://twitter.com/NikolausBrunner" type="external">
            Twitter
          </Link>{" "}
          or shoot me an{" "}
          <Link href="mailto:nikolaus.brunner@protonmail.ch" type="external">
            E-Mail
          </Link>
          . :)
        </Paragraph>
      </Section>
    </Page>
  );
};

export default Home;
