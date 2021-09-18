import React, { useContext } from "react";

import { Headline } from "@components/ui/Headline/Headline";

import { ThemeContext } from "@context/ThemeContext";

import { IGenericProps } from "@typings/GenericProps";
import { ISkill } from "@typings/profile/Skill";

import { cn } from "@lib/cn";

interface IProps extends ISkill, IGenericProps {}

export const Skill = ({ classNames, title, level, icon }: IProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={cn("Skill", classNames, { [theme]: theme })}>
      <div
        className="Skill__level"
        style={{
          width: `${level}%`
        }}
      />

      <div className="Skill__caption">
        <div className="Skill__icon">{icon}</div>

        <Headline tag="h2" size="h6" classNames={["Skill__title"]}>
          {title}
        </Headline>
      </div>
    </div>
  );
};
