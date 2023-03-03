import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  ComponentPropsWithoutRef,
  useContext,
} from "react";

import { theme } from "../../styles";
import { AccordionContext } from "./Item";

type StyledPanelProps = {
  shouldBeFolded: boolean;
};

export type AccordionPanelProps =
  ComponentPropsWithoutRef<"p">;

const Panel = ({
  children,
  ...props
}: AccordionPanelProps) => {
  const { isActive } = useContext(AccordionContext);

  return (
    <StyledPanel shouldBeFolded={!isActive} {...props}>
      {children}
    </StyledPanel>
  );
};

const StyledPanel = styled.p<StyledPanelProps>`
  line-height: 1.5;

  height: 0;

  transition: all 0.15s ease-in-out;

  ${({ shouldBeFolded }) =>
    !shouldBeFolded &&
    css`
      border-top: 1px solid ${theme.colors.gray200};
      padding: 1rem;
      height: auto;
    `}
`;

export default Panel;
