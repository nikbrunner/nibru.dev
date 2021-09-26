import styled from "@emotion/styled";

import { IGenericProps } from "@typings/GenericProps";
import { IExperience } from "@typings/profile/Experience";

interface IProps extends IExperience, IGenericProps {
  current: boolean;
}

const SExperience = styled.div<Partial<IProps>>`
  background-color: ${({ current }) => (current ? "green" : "white")};
`;

export const Experience = ({
  title,
  dateRange,
  company,
  details,
  current
}: IProps) => (
  <SExperience current={current}>
    <h3 className="title">{title}</h3>

    <p className="date">{dateRange}</p>

    {company && <p className="company">{company}</p>}

    {details && <p className="details">{details}</p>}
  </SExperience>
);
