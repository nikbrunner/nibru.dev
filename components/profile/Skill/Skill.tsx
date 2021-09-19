import React, { useContext } from "react";

import { Headline } from "@components/ui/Headline/Headline";

import { ThemeContext } from "@context/ThemeContext";

import { IGenericProps } from "@typings/GenericProps";
import { ISkill } from "@typings/profile/Skill";

import { cn } from "@lib/cn";

const componentName: string = "Skill";

interface IProps extends ISkill, IGenericProps {}

export const Skill = ({ title, level, icon }: IProps): JSX.Element => (
  <div
    className={cn({
      block: componentName
    })}
  >
    <div
      className={cn({
        block: componentName,
        element: "level"
      })}
      style={{
        width: `${level}%`
      }}
    />

    <div
      className={cn({
        block: componentName,
        element: "caption"
      })}
    >
      <div
        className={cn({
          block: componentName,
          element: "icon"
        })}
      >
        {icon}
      </div>

      <h2
        className={cn({
          block: componentName,
          element: "title"
        })}
      >
        {title}
      </h2>
    </div>
  </div>
);
