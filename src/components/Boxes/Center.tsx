import styled from "@emotion/styled";
import type { FC } from "react";
import { cssBoxSize } from "../../styles/interpolate";

export type CenterProps = {
  width?: string | number;
  height?: string | number;
};

const Center: FC<CenterProps> = ({ children, ...rest }) => (
  <StyledCenter {...rest}>{children}</StyledCenter>
);

const StyledCenter = styled.div<CenterProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${cssBoxSize}
`;

export default Center;
