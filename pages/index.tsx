import React from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { RiXingLine } from "react-icons/ri";

import { Section } from "@components/layout/Section";
import { Page } from "@components/layout/Page";
import { Paragraph } from "@components/ui/Paragraph";
import { Link } from "@components/ui/Link";

import { cn } from "@lib/cn";

const Home = () => (
  <Page name="Home" title="Hi there. 👋">
    <Section classNames={["Home__intro"]}>
      <div
        className={cn({
          utils: ["grid", "gap-5", "md:grid-cols-2"]
        })}
      >
        <div>
          <img
            className={cn({
              utils: [
                "mx-auto",
                "max-w-full",
                "sm:max-w-4xl",
                "md:max-w-full",
                "object-cover"
              ]
            })}
            src="/images/nb.jpg"
          />
        </div>

        <div
          className={cn({
            utils: ["space-y-1", "p-4"]
          })}
        >
          <h2
            className={cn({
              utils: ["text-7xl", "font-black", "mb-3"]
            })}
          >
            Hi there.
          </h2>

          <Paragraph>
            My name is Nikolaus Brunner,
            <br />
            or short just <em>Nik</em>.
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

          <div
            className={cn({
              utils: ["flex", "space-x-3"]
            })}
          >
            <Link
              href="https://github.com/nikbrunner"
              type="external"
              hideIcon
            >
              <FiGithub />
            </Link>
            <Link
              href="mailto:nikolaus.brunner@protonmail.ch"
              type="external"
              hideIcon
            >
              <FiMail />
            </Link>
            <Link
              href="https://www.xing.com/profile/Nikolaus_Brunner4/cv"
              type="external"
              hideIcon
            >
              <RiXingLine />
            </Link>
            <Link
              href="https://www.linkedin.com/in/nikolaus-brunner-30847798/"
              type="external"
              hideIcon
            >
              <FiLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </Section>
  </Page>
);

export default Home;
