import styled from "@emotion/styled";
import type { FC } from "react";
import type { BlockComponentProps } from "../../@types";
import {
  cssBorderRadius,
  cssBoxSize,
  cssColor,
  cssShadow,
  cssSpacing,
  cssSpacingX,
  cssSpacingY,
} from "../../styles/interpolate";
import { combineInterpolatedCss } from "../../utils";

export type DivProps = BlockComponentProps;

const Div: FC<DivProps> = ({ children, ...rest }) => (
  <StyledDiv {...rest}>{children}</StyledDiv>
);

const StyledDiv = styled.div<DivProps>`
  ${combineInterpolatedCss(
    cssBoxSize,
    cssSpacing,
    cssSpacingX,
    cssSpacingY,
    cssColor,
    cssShadow,
    cssBorderRadius,
    cssShadow
  )}
`;

export default Div;
