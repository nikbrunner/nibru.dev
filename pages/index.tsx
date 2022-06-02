import { Section } from "@components/layout/Section";
import { Page } from "@components/layout/Page";
import { Paragraph } from "@components/typography/Paragraph";
import { Link } from "@components/typography/Link";
import { Highlight } from "@components/typography/Highlight";

const Home = () => {
  return (
    <Page title="Hi there. 👋">
      <Section>
        <div>
          <h2>👋</h2>

          <Paragraph>
            Hi. My name is <Highlight underline>Nikolaus Brunner</Highlight>, but
            most people call me <Highlight>Nik</Highlight>.
          </Paragraph>

          <Paragraph>
            I was born <Highlight>1984</Highlight>.
          </Paragraph>

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
            I also love <Highlight>Vim/Neovim</Highlight> and my mechanical split
            keyboard.
          </Paragraph>

          <Paragraph>
            As far as software development is concerned, I try to put a lot of
            emphasis on good architecture and elegant, yet readable code.{" "}
            <Highlight>
              I don&apos;t want to stick a band-aid on a problem, but try to
              understand and heal the wound.
            </Highlight>
          </Paragraph>

          <Paragraph>
            In my younger years, I also worked as a{" "}
            <Highlight>Photographer</Highlight>,{" "}
            <Highlight>Audio & Video Engineer</Highlight> in Studios and Hotels, but
            also as a <Highlight>Landscaper</Highlight> and I also{" "}
            <Highlight>washed many dishes</Highlight>.
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

          <Paragraph>
            I think that should cover the basics. You can find a picture of me and
            other stuff in the links in the footer.
          </Paragraph>
        </div>
      </Section>
    </Page>
  );
};

export default Home;
