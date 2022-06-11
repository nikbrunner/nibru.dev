import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import { RiXingLine } from "react-icons/ri";

import { Link } from "@components/text/Link/Link";
import { Container } from "@components/layout/Container";
import { ThemeToggle } from "@components/ui/ThemeToggle/ThemeToggle";

import Style from "./Footer.style";

export const Footer: React.FC = () => (
  <Style>
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
  </Style>
);
