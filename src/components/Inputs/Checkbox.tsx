import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { forwardRef } from "react";
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
  name?: React.InputHTMLAttributes<HTMLInputElement>["name"];
  value?: React.InputHTMLAttributes<HTMLInputElement>["value"];
  defaultChecked?: React.InputHTMLAttributes<HTMLInputElement>["defaultChecked"];
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
    value,
    defaultChecked = false,
    checkedTextColor,
    checkedBackgroundColor,
    uncheckedTextColor,
    uncheckedBackgroundColor,
    className,
    onCheckboxClick,
  },
  ref
) {
  return (
    <>
      <StyledCheckbox
        ref={ref}
        id={id}
        name={name}
        defaultChecked={defaultChecked}
        type="checkbox"
        value={value}
        onChange={onCheckboxClick}
      />
      <StyledLabel
        htmlFor={id}
        className={className}
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

const StyledCheckbox = styled.input`
  ${cssSrOnly}
`;

const StyledLabel = styled.label<CheckboxColorProps>`
  display: inline-block;

  ${({
    checkedTextColor,
    checkedBackgroundColor,
    uncheckedTextColor,
    uncheckedBackgroundColor,
  }) =>
    css`
      background-color: ${theme.colors[
        uncheckedBackgroundColor ?? "white"
      ]};
      color: ${theme.colors[uncheckedTextColor ?? "black"]};
      outline: 1px solid
        ${theme.colors[uncheckedTextColor ?? "black"]};

      input[type="checkbox"]:checked + & {
        background-color: ${theme.colors[
          checkedBackgroundColor ?? "primary"
        ]};
        color: ${theme.colors[checkedTextColor ?? "white"]};
        outline: none;
      }
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
