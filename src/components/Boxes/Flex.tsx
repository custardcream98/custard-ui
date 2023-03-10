import { css } from "@emotion/react";
import styled from "@emotion/styled";
import type {
  CSSProperties,
  PropsWithChildren,
} from "react";
import { cssBoxSize } from "../../styles/interpolate";
import { resolveNumaricStyle } from "../../utils";

export type FlexProps = {
  width?: string | number;
  height?: string | number;
  direction?: CSSProperties["flexDirection"];
  wrap?: CSSProperties["flexWrap"];
  justifyContent?: CSSProperties["justifyContent"];
  alignItems?: CSSProperties["alignItems"];
  alignContent?: CSSProperties["alignContent"];
  gap?: string | number;
};

const Flex = ({
  children,
  ...rest
}: PropsWithChildren<FlexProps>) => (
  <StyledFlex {...rest}>{children}</StyledFlex>
);

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  ${({ direction }) =>
    direction &&
    css`
      flex-direction: ${direction};
    `};

  ${({ wrap }) =>
    wrap &&
    css`
      flex-wrap: ${wrap};
    `}
  ${({ justifyContent }) =>
    justifyContent &&
    css`
      justify-content: ${justifyContent};
    `}
    ${({ alignItems }) =>
    alignItems &&
    css`
      align-items: ${alignItems};
    `}
    ${({ alignContent }) =>
    alignContent &&
    css`
      align-content: ${alignContent};
    `}
    ${({ gap }) =>
    gap &&
    css`
      gap: ${resolveNumaricStyle(gap)};
    `}

    ${cssBoxSize}
`;

export default Flex;
