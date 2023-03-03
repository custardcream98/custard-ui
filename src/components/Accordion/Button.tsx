import styled from "@emotion/styled";
import { useCallback, useContext } from "react";

import { AccordionContext } from "./Item";
import { theme } from "../../styles";
import { cssColor } from "../../styles/interpolate";

import type { ComponentPropsWithoutRef } from "react";
import type { ColorComponentProps } from "../../@types";

export type AccordionButtonProps =
  ComponentPropsWithoutRef<"button"> & ColorComponentProps;

type StyledAccordionButtonProps = ColorComponentProps;

const Button = ({
  backgroundColor = "orange100",
  textColor = "gray800",
  onClick,
  children,
  ...props
}: AccordionButtonProps) => {
  const { toggle } = useContext(AccordionContext);

  const handleClick: React.MouseEventHandler<HTMLButtonElement> =
    useCallback(
      (event) => {
        toggle();
        onClick?.(event);
      },
      [toggle]
    );

  return (
    <StyledButton
      onClick={handleClick}
      backgroundColor={backgroundColor}
      textColor={textColor}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button<StyledAccordionButtonProps>`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1rem;

  ${cssColor}

  transition: all 0.1s ease-in-out;

  :hover {
    background-color: ${theme.colors.gray200};
  }
`;

export default Button;
