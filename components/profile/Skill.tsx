import styled from "@emotion/styled";

import { IGenericProps } from "@typings/GenericProps";
import { ISkill } from "@typings/data/Skill";

interface IProps extends ISkill, IGenericProps {}

const SSkill = styled.div`
  background-color: aqua;
`;

export const Skill: React.FC<IProps> = ({ title, level, icon }): JSX.Element => (
  <SSkill>
    <div
      className="level"
      style={{
        width: `${level}%`
      }}
    />

    <div className="caption">
      <div className="icon">{icon}</div>

      <h2 className="title">{title}</h2>
    </div>
  </SSkill>
);
