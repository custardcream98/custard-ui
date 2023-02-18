import { css } from "@emotion/react";
import styled from "@emotion/styled";
import type { PropsWithChildren } from "react";
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

export type DivProps = {
  as?: "span";
} & BlockComponentProps;

const Div = ({
  as,
  children,
  ...rest
}: PropsWithChildren<DivProps>) => (
  <StyledDiv as={as} {...rest}>
    {children}
  </StyledDiv>
);

const StyledDiv = styled.div<DivProps>`
  ${({ as }) =>
    as === "span" &&
    css`
      display: inline-block;
    `}

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
