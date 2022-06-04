import styled from "@emotion/styled";

import { space } from "@theme/mixins/space";

const Style = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: ${space.xxl};
`;

export default Style;
