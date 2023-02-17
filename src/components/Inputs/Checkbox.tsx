import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { forwardRef, useCallback, useState } from "react";
import type {
  DefaultProps,
  ColorsType,
} from "../../@types";
import { cssSrOnly, theme } from "../../styles";

type CheckboxColorProps = {
  checkedTextColor?: ColorsType;
  checkedBackgroundColor?: ColorsType;
  uncheckedTextColor?: ColorsType;
  uncheckedBackgroundColor?: ColorsType;
};

export type CheckboxProps = {
  id: string;
  label?: string;
  name?: string;
  initialChecked?: boolean;
  onCheckboxClick?: React.ChangeEventHandler<HTMLInputElement>;
} & CheckboxColorProps &
  DefaultProps;

const Checkbox = forwardRef<
  HTMLInputElement,
  CheckboxProps
>(function CheckboxForwarded(
  {
    id,
    label,
    name,
    initialChecked = false,
    checkedTextColor,
    checkedBackgroundColor,
    uncheckedTextColor,
    uncheckedBackgroundColor,
    className,
    onCheckboxClick,
  },
  ref
) {
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
        checkedTextColor={checkedTextColor}
        checkedBackgroundColor={checkedBackgroundColor}
        uncheckedTextColor={uncheckedTextColor}
        uncheckedBackgroundColor={uncheckedBackgroundColor}
      >
        {label}
      </StyledLabel>
    </>
  );
});

const StyledCheckBox = styled.input`
  ${cssSrOnly}
`;

const StyledLabel = styled.label<
  { checked: boolean } & CheckboxColorProps
>`
  display: inline-block;

  ${({
    checked,
    checkedTextColor,
    checkedBackgroundColor,
    uncheckedTextColor,
    uncheckedBackgroundColor,
  }) =>
    checked
      ? css`
          background-color: ${theme.colors[
            checkedBackgroundColor ?? "primary"
          ]};
          color: ${theme.colors[
            checkedTextColor ?? "white"
          ]};
        `
      : css`
          background-color: ${theme.colors[
            uncheckedBackgroundColor ?? "white"
          ]};
          color: ${theme.colors[
            uncheckedTextColor ?? "black"
          ]};
          outline: 2px solid
            ${theme.colors[uncheckedTextColor ?? "black"]};
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

export default Checkbox;
