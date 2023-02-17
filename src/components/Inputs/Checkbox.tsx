import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { forwardRef, useCallback, useState } from "react";
import type { DefaultProps } from "../../@types";
import { cssSrOnly, theme } from "../../styles";

export type CheckBoxProps = {
  id: string;
  label?: string;
  name?: string;
  initialChecked?: boolean;
  onCheckboxClick?: React.ChangeEventHandler<HTMLInputElement>;
} & DefaultProps;

const CheckBox = forwardRef<
  HTMLInputElement,
  CheckBoxProps
>(
  (
    {
      id,
      label,
      name,
      initialChecked = false,
      className,
      onCheckboxClick,
    },
    ref
  ) => {
    const [checked, setChecked] = useState(initialChecked);

    const handleClick: React.ChangeEventHandler<HTMLInputElement> =
      useCallback(
        (event) => {
          event.stopPropagation();

          setChecked((prev) => !prev);
          onCheckboxClick?.(event);
        },
        [onCheckboxClick]
      );

    return (
      <>
        <StyledCheckBox
          ref={ref}
          id={id}
          name={name}
          defaultChecked={checked}
          type="checkbox"
          onChange={handleClick}
        />
        <StyledLabel
          htmlFor={id}
          className={className}
          checked={checked}
        >
          {label}
        </StyledLabel>
      </>
    );
  }
);

const StyledCheckBox = styled.input`
  ${cssSrOnly}
`;

const StyledLabel = styled.label<{ checked: boolean }>`
  display: inline-block;

  ${({ checked }) =>
    checked
      ? css`
          background-color: ${theme.colors.primary};
          color: ${theme.colors.white};
        `
      : css`
          background-color: ${theme.colors.white};
          color: ${theme.colors.black};
          outline: 2px solid ${theme.colors.black};
        `}

  padding: ${theme.spacing.xsmall};
  border-radius: ${theme.shape.borderRadius.large};
  box-shadow: ${theme.shape.shadows.default};

  transition: all 0.2s ease;
  :hover {
    scale: 1.03;
  }
  :active {
    scale: 0.9;
  }
  cursor: pointer;
`;

export default CheckBox;
