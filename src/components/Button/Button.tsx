import type { ComponentProps, FC } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import type {
  BorderRadiusComponentProps,
  Hierarchy,
  ShadowComponentProps,
} from "../../@types";
import { theme } from "../../styles";
import {
  cssBorderRadius,
  cssShadow,
} from "../../styles/interpolate";

type StyledButtonProps = {
  level: Hierarchy;
} & ShadowComponentProps &
  BorderRadiusComponentProps;

export type ButtonProps = ComponentProps<"button"> &
  Partial<StyledButtonProps>;

const Button: FC<ButtonProps> = ({
  level = "primary",
  borderRadius = "medium",
  boxShadow = "default",
  children,
  onClick,
  ...rest
}) => {
  const onClickPreventDisabled: React.MouseEventHandler<HTMLButtonElement> =
    (event) => {
      if (level === "disabled") {
        event.preventDefault();
        return;
      }
      onClick?.(event);
    };

  return (
    <StyledButton
      level={level}
      borderRadius={borderRadius}
      boxShadow={boxShadow}
      onClick={onClickPreventDisabled}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<StyledButtonProps>`
  ${({ level }) => css`
    background-color: ${theme.palette[level].main};
    color: ${theme.palette[level].text};
  `}
  ${({ level }) =>
    level === "outline" &&
    css`
      border: 1px solid ${theme.palette.outline.text};
    `}
  ${({ level }) =>
    level === "disabled" &&
    css`
      pointer-events: none;
    `}

  ${cssShadow}
  ${cssBorderRadius}

  padding: 10px 15px;
  transition: all 0.2s ease;

  ${({ level }) =>
    level !== "disabled" &&
    css`
      :hover {
        transform: scale(1.05);
      }
    `}
`;

export default Button;
