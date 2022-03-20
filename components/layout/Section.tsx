import { ReactNode } from "react";

import { IGenericProps } from "@typings/GenericProps";

interface IProps extends IGenericProps {
  children: ReactNode;
  id?: string;
}

export const Section: React.FC<IProps> = ({ children, id = "" }): JSX.Element => (
  <section id={id}>
    <article>{children}</article>
  </section>
);
