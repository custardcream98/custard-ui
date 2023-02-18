import styled from "@emotion/styled";
import { forwardRef } from "react";
import type { ColorsType } from "../../@types";
import { cssSrOnly, theme } from "../../styles";
import { transparentColor } from "../../utils";

export type RadioProps = {
  id: string;
  label?: string;
  name: string;
  value?: React.InputHTMLAttributes<HTMLInputElement>["value"];
  defaultChecked?: React.InputHTMLAttributes<HTMLInputElement>["defaultChecked"];
  onRadioClick?: React.ChangeEventHandler<HTMLInputElement>;
} & Partial<StyledRadioProps>;

type StyledRadioProps = {
  radioColor: ColorsType;
};

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  function RadioForwarded(
    {
      id,
      name,
      label,
      value,
      defaultChecked = false,
      radioColor = "primary",
      onRadioClick,
    },
    ref
  ) {
    return (
      <>
        <StyledRadio
          ref={ref}
          id={id}
          name={name}
          value={value}
          type="radio"
          defaultChecked={defaultChecked}
          onChange={onRadioClick}
        />
        <StyledLabel htmlFor={id} radioColor={radioColor}>
          <StyledText>{label}</StyledText>
        </StyledLabel>
      </>
    );
  }
);

const StyledRadio = styled.input`
  ${cssSrOnly}
`;

const StyledLabel = styled.label<StyledRadioProps>`
  display: inline-flex;
  align-items: center;
  cursor: pointer;

  transition: all 0.2s ease;

  border-radius: ${theme.shape.borderRadius.rounded};
  padding: ${theme.spacing.xxsmall} ${theme.spacing.xsmall};

  ::before {
    content: "";
    display: inline-block;

    margin-right: 0.3rem;
    border-radius: 50%;
    box-sizing: border-box;
    width: 1rem;
    height: 1rem;
    background-color: ${theme.colors.white};

    transition: all 0.2s ease;

    border: 2px solid
      ${({ radioColor }) => theme.colors[radioColor]};
  }

  input[type="radio"]:checked + &::before {
    border: 0.3rem solid
      ${({ radioColor }) => theme.colors[radioColor]};
  }
  input[type="radio"]:checked + & {
    background-color: ${({ radioColor }) =>
      transparentColor(radioColor, 30)};
  }
`;

const StyledText = styled.span`
  display: inline-block;

  transform: translateY(0.1rem);
`;

export default Radio;
