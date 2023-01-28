import styled from "@emotion/styled";

export interface ButtonProps {
  label: string;
}

const StyledButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Button = (props: ButtonProps) => {
  return <StyledButton>{props.label}</StyledButton>;
};

export default Button;
