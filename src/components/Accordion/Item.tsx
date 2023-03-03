import {
  createContext,
  useCallback,
  useState,
} from "react";
import styled from "@emotion/styled";

import { theme } from "../../styles";

import type { ComponentPropsWithoutRef } from "react";

export type AccordionContextValue = {
  isActive: boolean;
  toggle: () => void;
};

export const AccordionContext =
  createContext<AccordionContextValue>({
    isActive: false,
    toggle: () => {},
  });

export type AccordionItemProps =
  ComponentPropsWithoutRef<"li"> & {
    defaultActive?: boolean;
  };

const Item = ({
  defaultActive,
  children,
  ...props
}: AccordionItemProps) => {
  const [isActive, setIsActive] = useState(
    defaultActive ?? false
  );

  const toggle = useCallback(() => {
    setIsActive((prev) => !prev);
  }, []);

  return (
    <StyledResultItem {...props}>
      <AccordionContext.Provider
        value={{ isActive, toggle }}
      >
        {children}
      </AccordionContext.Provider>
    </StyledResultItem>
  );
};

const StyledResultItem = styled.li`
  margin: 1.5rem 0;
  border-radius: 5px;
  border: 1px solid ${theme.colors.gray200};

  overflow: hidden;
`;

export default Item;
