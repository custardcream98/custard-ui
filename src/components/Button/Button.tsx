import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import type {
  BorderRadiusType,
  Hierarchy,
  ShadowType,
} from "@types";

type StyledButtonProps = {
  level: Hierarchy;
  borderRadius: BorderRadiusType;
  shadow: ShadowType;
};

export type ButtonProps = Partial<StyledButtonProps> &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      level = "primary",
      borderRadius = "medium",
      shadow = "default",
      children,
      onClick,
      ...rest
    },
    ref
  ) => {
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
        ref={ref}
        level={level}
        borderRadius={borderRadius}
        shadow={shadow}
        onClick={onClickPreventDisabled}
        {...rest}
      >
        {children}
      </StyledButton>
    );
  }
);

const StyledButton = styled.button<StyledButtonProps>`
  ${({ level, theme, borderRadius }) => css`
    background-color: ${theme.palette[level].main};
    color: ${theme.palette[level].text};
    border-radius: ${theme.shape.borderRadius[
      borderRadius
    ]};
  `}
  ${({ level, theme }) =>
    level === "outline" &&
    css`
      border: 1px solid ${theme.palette.outline.text};
    `}
  ${({ level }) =>
    level === "disabled" &&
    css`
      pointer-events: none;
    `}
  ${({ shadow, theme }) =>
    shadow &&
    css`
      box-shadow: ${theme.shape.shadows[shadow]};
    `}
  
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
