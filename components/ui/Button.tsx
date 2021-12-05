import { ReactNode } from "react";

import { cn } from "@lib/cn";

import { IGenericProps } from "@typings/GenericProps";

const componentName: string = "Button";

interface IProps extends IGenericProps {
  children: ReactNode;
  size?: "m" | "l";
  onClick?: () => void;
}

export const Button: React.FC<IProps> = ({
  size = "m",
  children,
  onClick
}): JSX.Element => (
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
