import React from 'react';
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiGnubash,
  SiAdobephotoshop,
  SiGraphql
} from 'react-icons/si';
import {
  FaSass,
  FaGitAlt,
  FaReact,
  FaNodeJs,
  FaFigma
} from 'react-icons/fa';

import { Skill } from '../types/profile/Skill';

const skills: Skill[] = [
  {
    icon: <SiHtml5 />,
    level: 95,
    title: 'HTML5'
  },
  {
    icon: <SiCss3 />,
    level: 95,
    title: 'CSS3'
  },
  {
    icon: <FaSass />,
    level: 80,
    title: 'SCSS'
  },
  {
    icon: <SiJavascript />,
    level: 75,
    title: 'JavaScript'
  },
  {
    icon: <SiTypescript />,
    level: 65,
    title: 'TypeScript'
  },
  {
    icon: <FaGitAlt />,
    level: 65,
    title: 'Git'
  },
  {
    icon: <FaReact />,
    level: 75,
    title: 'React'
  },
  {
    icon: <FaNodeJs />,
    level: 45,
    title: 'Node'
  },
  {
    icon: <SiGnubash />,
    level: 45,
    title: 'Bash'
  },
  {
    icon: <FaFigma />,
    level: 75,
    title: 'Figma'
  },
  {
    icon: <SiAdobephotoshop />,
    level: 85,
    title: 'Photoshop'
  },
  {
    icon: <SiGraphql />,
    level: 45,
    title: 'GraphQL'
  }
];

export default skills;
