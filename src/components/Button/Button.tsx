import styled from "@emotion/styled";
import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import { css } from "@emotion/react";
import type { ButtonVariant } from "@types";

type StyledButtonProps = {
  variant: ButtonVariant;
};

export type ButtonProps = Partial<StyledButtonProps> &
  ButtonHTMLAttributes<HTMLButtonElement>;

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = "Primary", children, onClick, ...rest },
    ref
  ) => {
    const onClickPreventDisabled: React.MouseEventHandler<HTMLButtonElement> =
      (event) => {
        if (variant === "Disabled") {
          event.preventDefault();
          return;
        }
        onClick?.(event);
      };

    return (
      <StyledButton
        ref={ref}
        variant={variant}
        onClick={onClickPreventDisabled}
        {...rest}
      >
        {children}
      </StyledButton>
    );
  }
);

const BackgroundColors = {
  Primary: "#FFA500",
  Secondary: "#5b52fb",
  Tertiary: "#ffe8c0",
  Danger: "#FF0000",
  Success: "#008000",
  Warning: "#FFD000",
  Outline: "transparent",
  Disabled: "#ccc",
};
const TextColors = {
  Primary: "#fff",
  Secondary: "#fff",
  Tertiary: "#393939",
  Danger: "#fff",
  Success: "#fff",
  Warning: "#fff",
  Outline: "#393939",
  Disabled: "#393939",
};

const StyledButton = styled.button<StyledButtonProps>`
  ${({ variant }) => css`
    background-color: ${BackgroundColors[variant]};
    color: ${TextColors[variant]};
  `}
  ${({ variant }) =>
    variant === "Outline" &&
    css`
      border: 1px solid #393939;
    `}
  ${({ variant }) =>
    variant === "Disabled" &&
    css`
      pointer-events: none;
    `}

  padding: 10px 15px;
  border-radius: 5px;
  transition: all 0.2s ease;

  ${({ variant }) =>
    variant !== "Disabled" &&
    css`
      :hover {
        transform: scale(1.05);
      }
    `}
`;

export default Button;
