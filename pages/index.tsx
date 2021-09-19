import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { RiXingLine } from "react-icons/ri";

import { Section } from "@components/layout/Section/Section";
import { Page } from "@components/layout/Page/Page";

import { Headline } from "@components/ui/Headline/Headline";
import { Paragraph } from "@components/ui/Paragraph/Paragraph";
import { Link } from "@components/ui/Link/Link";
import { cn } from "@lib/cn";

const Home = () => (
  <Page name="Home" title="Hi there. 👋">
    <Section classNames={["Home__intro"]}>
      <div>
        <div>
          <img
            src="/images/nb.jpg"
            width="300px"
            height="auto"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div>
          <h2 className={cn({ utils: ["text-3xl"] })}>Hi there.</h2>

          <Paragraph>
            My name is Nikolaus Brunner,
            <br />
            or short just <em>Nik</em>.
          </Paragraph>

          <Paragraph maxWidth="30rem">
            I am working as a Software Engineer for{" "}
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

          <Paragraph maxWidth="25rem">
            I mainly work with <strong>React</strong>, <wbr />
            <strong>TypeScript</strong> and <strong>SCSS</strong>.
          </Paragraph>

          <Paragraph maxWidth="30rem">
            This website is being rebuilt.
            <br /> You can visit my old website{" "}
            <Link href="/archive/index.html" type="internal">
              here
            </Link>
            .
          </Paragraph>

          <Paragraph maxWidth="30rem">
            Developing{" "}
            <Link href="https://sonder.haus" type="external">
              sonder.haus
            </Link>
            .
          </Paragraph>

          <Paragraph style={{ fontSize: "2rem" }}>
            <Link
              href="https://github.com/nikbrunner"
              type="external"
              hideIcon
            >
              <FiGithub />
            </Link>{" "}
            <Link
              href="mailto:nikolaus.brunner@protonmail.ch"
              type="external"
              hideIcon
            >
              <FiMail />
            </Link>{" "}
            <Link
              href="https://www.xing.com/profile/Nikolaus_Brunner4/cv"
              type="external"
              hideIcon
            >
              <RiXingLine />
            </Link>{" "}
            <Link
              href="https://www.linkedin.com/in/nikolaus-brunner-30847798/"
              type="external"
              hideIcon
            >
              <FiLinkedin />
            </Link>
          </Paragraph>
        </div>
      </div>
    </Section>
  </Page>
);

export default Home;
