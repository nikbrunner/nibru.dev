import { ReactNode } from "react";

import { cn } from "@lib/cn";

import { IGenericProps } from "@typings/GenericProps";

const componentName: string = "Button";

interface IProps extends IGenericProps {
  children: ReactNode;
  size?: "m" | "l";
  onClick?: () => void;
}

export const Button = ({
  size = "m",
  children,
  onClick
}: IProps): JSX.Element => (
  <button
    className={cn({
      block: componentName,
      utils: [],
      modifiers: {
        size
      }
    })}
    onClick={onClick}
  >
    {children}
  </button>
);
