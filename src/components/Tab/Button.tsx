import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useContext } from "react";
import { ActiveColorContext } from "./Wrapper";

import { theme } from "../../styles";

import type { ComponentPropsWithoutRef } from "react";
import type { ColorsType } from "../../@types";

type IsActiveProp = {
  isActive?: boolean;
};
type StyledTabButtonProps = IsActiveProp & {
  activeColor: ColorsType;
};

export type ButtonProps = IsActiveProp &
  ComponentPropsWithoutRef<"button">;

const Button = ({
  isActive,
  children,
  ...props
}: ButtonProps) => {
  const activeColor = useContext(ActiveColorContext);

  return (
    <li>
      <StyledTabButton
        type="button"
        isActive={isActive}
        activeColor={activeColor}
        {...props}
      >
        {children}
      </StyledTabButton>
    </li>
  );
};

const StyledTabButton = styled.button<StyledTabButtonProps>`
  color: ${({ isActive, activeColor }) =>
    isActive
      ? theme.colors[activeColor]
      : theme.colors.gray300};
  font-weight: ${({ isActive }) => (isActive ? 600 : 400)};
  padding: 0.5rem 0;
  margin-bottom: -2px;
  border-bottom: 2px solid transparent;

  transition: all 0.2s ease-in-out;

  ${({ isActive, activeColor }) =>
    isActive &&
    css`
      border-bottom: 2px solid ${theme.colors[activeColor]};
    `}

  :hover {
    border-bottom: 2px solid
      ${({ activeColor }) => theme.colors[activeColor]};
  }
`;

export default Button;
