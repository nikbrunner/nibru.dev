import { Section } from "@components/layout/Section";
import { Page } from "@components/layout/Page";
import { Paragraph } from "@components/typography/Paragraph";
import { Link } from "@components/typography/Link";
import { Highlight } from "@components/typography/Highlight/Highlight";
import { Headline } from "@components/typography/Headline";
import { Spacer } from "@components/layout/Spacer";
import { css } from "@emotion/react";
import { space } from "@theme/mixins/space";
import { borderRadius } from "@theme/mixins/border";
import { mq } from "@theme/mixins/media-queries";
import { shadow } from "@theme/mixins/shadow";
import { Shoutout } from "@components/typography/Shoutout/Shoutout";

const Greeting = () => (
  <div
    css={css`
      display: grid;
      grid-template-columns: 1fr;
      gap: ${space.xl};
      align-items: center;

      ${mq.m} {
        grid-template-columns: 250px 1fr;
      }
    `}
  >
    <img
      src="/images/nb_2022.jpg"
      css={css`
        width: 100%;
        max-height: 250px;
        object-fit: cover;
        justify-self: center;
        border-radius: ${borderRadius.xl};
        box-shadow: ${shadow.box.big};
      `}
    />

    <h1
      css={css`
        margin: 0;
        text-align: center;

        ${mq.m} {
          text-align: left;
        }
      `}
    >
      <span css={css``}>👋</span> Hi. My name is{" "}
      <Highlight withUnderline>Nikolaus Brunner</Highlight>, but most people call me{" "}
      <Highlight>Nik</Highlight>.
    </h1>
  </div>
);

const Home = () => {
  return (
    <Page title="Hi there. 👋">
      <Section>
        <Spacer space="xxl" />

        <Greeting />

        <Spacer space="l" />

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

        <Shoutout label="TLDR;">
          <Paragraph>
            My tech stack at the moment consists of{" "}
            <Link href="https://reactjs.org" type="external">
              React
            </Link>
            ,{" "}
            <Link href="https://www.typescriptlang.org/" type="external">
              TypeScript
            </Link>
            ,{" "}
            <Link href="https://sass-lang.com" type="external">
              SCSS
            </Link>
            ,{" "}
            <Link href="https://storybook.js.org/" type="external">
              StorybookJS
            </Link>{" "}
            and{" "}
            <Link href="https://nodejs.org/en/" type="external">
              NodeJS
            </Link>
            .
            <br />
            <br />
            My main focus is definitely Frontend, but I regularly have touchpoints
            with the Backend.
            <br />
            <br />
            In my free time I try to explore other languages like{" "}
            <Link href="https://go.dev/" type="external">
              Go
            </Link>
            , frameworks like{" "}
            <Link href="https://svelte.dev/" type="external">
              Svelte
            </Link>
            , architectures like{" "}
            <Link href="https://emotion.sh/docs/introduction" type="external">
              Styled Components with EmotionCSS
            </Link>{" "}
            and best practices with some side projects, like my{" "}
            <Link
              href="https://github.com/nikbrunner/obsidian-deep-work-theme"
              type="external"
            >
              Obsidian Deep Work Theme
            </Link>
            , which has <Highlight>over 40k downloads</Highlight> at the moment, or
            of course{" "}
            <Link href="https://github.com/nikbrunner/nibru.dev" type="external">
              this website
            </Link>
            .
          </Paragraph>
        </Shoutout>

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
          I also love{" "}
          <Highlight>
            <Link href="https://github.com/nikbrunner/vin" type="external">
              Vim/Neovim
            </Link>
          </Highlight>{" "}
          and my{" "}
          <Highlight>
            <Link href="https://www.zsa.io/moonlander/" type="external">
              Moonlander Split Keyboard
            </Link>
          </Highlight>
          .
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
          In my years before, I also worked as a <Highlight>Photographer</Highlight>,{" "}
          <Highlight>Audio & Video Engineer</Highlight> in Studios and Hotels, but
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
          I was born <Highlight>1984</Highlight>, and am based in{" "}
          <Highlight>Landshut (near Munich) Germany</Highlight>.
        </Paragraph>

        <Paragraph>
          In my past I also made some{" "}
          <Link
            href="https://open.spotify.com/artist/603Tahq6jn44VFj23DldSW"
            type="external"
          >
            Music
          </Link>
          .
        </Paragraph>

        <Paragraph>
          <Highlight>I love nature</Highlight>, and to go outside hiking and running
          and meditating. I often combine this to maintain my{" "}
          <Link href="https://www.instagram.com/nikolaus.brunner/" type="external">
            Photography
          </Link>
          .
        </Paragraph>

        <Paragraph>
          If my brain still has some energy left, I also{" "}
          <Highlight>read alot of books</Highlight> about Philosophy, History and
          other non-fiction topics.
        </Paragraph>
      </Section>

      <Section>
        <Shoutout label="Contact">
          <Paragraph>
            I think that should cover the basics. You can find a current picture of
            me and other stuff in the footer-links.
            <br />
            <br />
            If you want to get in <Highlight>contact with me</Highlight>, you can DM
            me on{" "}
            <Link href="https://twitter.com/NikolausBrunner" type="external">
              Twitter
            </Link>{" "}
            or shoot me an{" "}
            <Link href="mailto:nikolaus.brunner@protonmail.ch" type="external">
              E-Mail
            </Link>
            . :)
          </Paragraph>
        </Shoutout>
      </Section>
    </Page>
  );
};

export default Home;
