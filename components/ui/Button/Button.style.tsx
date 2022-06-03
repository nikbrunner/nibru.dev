import { ComponentProps } from "react";
import styled from "@emotion/styled";

import { Button } from "./Button";

const Style = styled.button<Partial<ComponentProps<typeof Button>>>`
  cursor: pointer;
`;

export default Style;
