import type { MouseEventHandler, FC } from "react";
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
import Typography from "../Typography";

type StyledButtonProps = {
  level: Hierarchy;
} & ShadowComponentProps &
  BorderRadiusComponentProps;

export type ButtonProps = {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
} & Partial<StyledButtonProps>;

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
      {typeof children === "string" ? (
        <Typography component="span">{children}</Typography>
      ) : (
        children
      )}
    </StyledButton>
  );
};

const StyledButton = styled.button<StyledButtonProps>`
  max-width: 300px;
  display: flex;
  align-items: center;

  span {
    transform: translateY(0.1em);
  }

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
