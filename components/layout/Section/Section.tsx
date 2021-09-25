import React, { ReactNode } from "react";

import { IGenericProps } from "@typings/GenericProps";

import { cn } from "@lib/cn";

const componentName: string = "Section";

interface IProps extends IGenericProps {
  children: ReactNode;
  name?: string;
  id?: string;
  backgroundImage?: string;
}

export const Section = ({
  children,
  classNames,
  id = "",
  name = "",
  backgroundImage = ""
}: IProps): JSX.Element => (
  <section
    id={id}
    className={cn({
      block: componentName,
      others: classNames,
      modifiers: {
        backgroundImage
      }
    })}
    style={
      backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}
    }
  >
    <article
      className={cn({
        block: componentName,
        element: "children"
      })}
    >
      {children}
    </article>
  </section>
);
