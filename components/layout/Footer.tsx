import styled from "@emotion/styled";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import { RiXingLine } from "react-icons/ri";

import { Link } from "@components/typography/Link";
import { Container } from "@components/layout/Container";
import { ThemeToggle } from "@components/ui/ThemeToggle";

import { background } from "@mixins/background";
import { margin, padding } from "@theme/mixins/spacing";
import { flex } from "@theme/mixins/layout";
import { space } from "@theme/mixins/space";
import { text } from "@theme/mixins/text";

const SFooter = styled.footer`
  ${({ theme }) => background.color.primary(theme)};

  ${margin.top["xxl"]};

  position: fixed;
  bottom: 0;
  width: 100%;
  box-shadow: 0 -0.5rem 2rem rgba(0, 0, 0, 0.1);

  .inner-wrapper {
    ${padding.y.m};
    ${flex({ justifyContent: "space-between", gap: space.xs })};
  }

  .social-icons {
    ${flex({ alignItems: "center", gap: space.s })};

    a {
      ${flex({
        justifyContent: "center",
        alignItems: "center",
        inline: true
      })};
      ${text.size.base};
    }
  }
`;

export const Footer: React.FC = () => (
  <SFooter>
    <Container>
      <div className="inner-wrapper">
        <div className="theme-toggle">
          <ThemeToggle />
        </div>

        <div className="social-icons">
          <Link href="https://twitter.com/NikolausBrunner" type="external" hideIcon>
            <FiTwitter />
          </Link>

          <Link href="https://github.com/nikbrunner" type="external" hideIcon>
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
    </Container>
  </SFooter>
);
