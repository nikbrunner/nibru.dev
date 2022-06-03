import styled from "@emotion/styled";
import { space, TSpace } from "@theme/mixins/space";

type TDirection = "vertical" | "horizontal";

interface IProps {
  space: TSpace;
  direction?: TDirection;
}

const SSpacer = styled.div<IProps>`
  label: Spacer;

  ${props => {
    if (props.direction === "vertical") {
      return `height: ${space[props.space]}`;
    } else if (props.direction === "horizontal") {
      return `width: ${space[props.space]}`;
    }
  }}
`;

export const Spacer = (props: IProps) => {
  const defaultProps: IProps = {
    space: props.space ?? "m",
    direction: props.direction ?? "vertical"
  };

  return <SSpacer {...defaultProps} />;
};
