import styled from "@emotion/styled";
import type { PropsWithChildren } from "react";
import type { IconType } from "react-icons";
import type { ColorsType } from "../../@types";
import { theme } from "../../styles";
import Typography from "../Typography";
import Button from "./Button";
import type { ButtonProps } from "./Button";
import { resolveNumaricStyle } from "../../utils";

type IconButtonProps = ButtonProps & {
  icon: IconType;
  iconSize?: string | number;
  iconColor?: ColorsType;
  iconTitle?: string;
};

const IconButton = ({
  icon,
  iconSize,
  iconColor,
  iconTitle,
  level,
  children,
  ...rest
}: PropsWithChildren<IconButtonProps>) => {
  const Icon = icon;

  return (
    <StyledIconButton level={level} {...rest}>
      <Icon
        size={
          iconSize ? resolveNumaricStyle(iconSize) : "20px"
        }
        color={
          iconColor
            ? theme.colors[iconColor]
            : theme.palette[level ?? "primary"].text
        }
        title={iconTitle}
      />
      {typeof children === "string" ? (
        <Typography component="span">{children}</Typography>
      ) : (
        children
      )}
    </StyledIconButton>
  );
};

const StyledIconButton = styled(Button)`
  & > svg {
    margin-right: 0.3rem;
  }
`;

export default IconButton;
