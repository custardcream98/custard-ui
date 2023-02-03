import type { ComponentProps, FC } from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import type {
  BorderRadiusType,
  Hierarchy,
  ShadowType,
} from "../../@types";
import { theme } from "../../styles";

type StyledButtonProps = {
  level: Hierarchy;
  borderRadius: BorderRadiusType;
  shadow: ShadowType;
};

export type ButtonProps = ComponentProps<"button"> &
  Partial<StyledButtonProps>;

const Button: FC<ButtonProps> = ({
  level = "primary",
  borderRadius = "medium",
  shadow = "default",
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
      shadow={shadow}
      onClick={onClickPreventDisabled}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<StyledButtonProps>`
  ${({ level, borderRadius }) => css`
    background-color: ${theme.palette[level].main};
    color: ${theme.palette[level].text};
    border-radius: ${theme.shape.borderRadius[
      borderRadius
    ]};
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
  ${({ shadow }) =>
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
