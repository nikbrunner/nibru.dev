import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Skill } from '../types/Skill';

const skills: Skill[] = [
  {
    icon: <FontAwesomeIcon icon={['fab', 'html5']} />,
    level: 95,
    title: 'HTML5'
  },
  {
    icon: <FontAwesomeIcon icon={['fab', 'css3']} />,
    level: 95,
    title: 'CSS3'
  },
  {
    icon: <FontAwesomeIcon icon={['fab', 'sass']} />,
    level: 80,
    title: 'SCSS'
  },
  {
    icon: <FontAwesomeIcon icon={['fab', 'js']} />,
    level: 75,
    title: 'JavaScript'
  },
  {
    icon: <FontAwesomeIcon icon={['fab', 'js']} />,
    level: 65,
    title: 'TypeScript'
  },
  {
    icon: <FontAwesomeIcon icon={['fab', 'git']} />,
    level: 65,
    title: 'Git'
  },
  {
    icon: <FontAwesomeIcon icon={['fab', 'react']} />,
    level: 75,
    title: 'React'
  },
  {
    icon: <FontAwesomeIcon icon={['fab', 'node-js']} />,
    level: 45,
    title: 'Node'
  },
  {
    icon: <FontAwesomeIcon icon={['fab', 'linux']} />,
    level: 45,
    title: 'Bash'
  },
  {
    icon: <FontAwesomeIcon icon={['fab', 'figma']} />,
    level: 75,
    title: 'Figma'
  },
  {
    icon: <FontAwesomeIcon icon={['fas', 'drafting-compass']} />,
    level: 85,
    title: 'Photoshop'
  },
  {
    icon: <FontAwesomeIcon icon={['fas', 'code']} />,
    level: 45,
    title: 'GraphQL'
  }
];

export default skills;
