import styled from "@emotion/styled";
import {
  ComponentPropsWithoutRef,
  createContext,
} from "react";
import { theme } from "../../styles";
import type { ColorsType } from "../../@types";
import type { CSSProp } from "../../utils";

type ActiveColorProps = CSSProp<ColorsType, "activeColor">;

export type TabWrapperProps =
  ComponentPropsWithoutRef<"ul"> & ActiveColorProps;

export const ActiveColorContext =
  createContext<ColorsType>("primary");

const Wrapper = ({
  activeColor,
  children,
  ...props
}: TabWrapperProps) => {
  return (
    <ActiveColorContext.Provider
      value={activeColor || "primary"}
    >
      <StyledWrapper {...props}>{children}</StyledWrapper>
    </ActiveColorContext.Provider>
  );
};

const StyledWrapper = styled.ul`
  display: flex;
  align-items: center;

  margin-bottom: 0.8rem;

  border-bottom: 2px solid ${theme.colors.gray300};

  li {
    margin: 0 30px;
  }
`;

export default Wrapper;
