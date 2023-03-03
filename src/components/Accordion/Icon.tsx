import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  ComponentPropsWithoutRef,
  useContext,
} from "react";

import { theme } from "../../styles";
import { AccordionContext } from "./Item";

import type { ColorsType } from "../../@types";

export type AccordionIconProps =
  ComponentPropsWithoutRef<"svg"> & {
    stroke?: ColorsType;
    title?: string;
    lineWidth?: number;
  };

type StyledIconProps = {
  shouldBeUpside: boolean;
};

const Icon = ({
  stroke,
  title,
  lineWidth,
  width,
  height,
  ...props
}: AccordionIconProps) => {
  const { isActive } = useContext(AccordionContext);

  return (
    <StyledIcon
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke={
        stroke ? theme.colors[stroke] : theme.colors.gray700
      }
      shouldBeUpside={isActive}
      width={width ?? 18}
      height={height ?? 18}
      {...props}
    >
      {title && <title>{title}</title>}
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width={lineWidth ?? 2}
        d="M5 15l7-7 7 7"
      ></path>
    </StyledIcon>
  );
};

const StyledIcon = styled.svg<StyledIconProps>`
  display: block;
  transition: all 0.15s ease-in-out;

  ${({ shouldBeUpside }) =>
    !shouldBeUpside &&
    css`
      transform: rotate(-180deg);
    `};
`;

export default Icon;
