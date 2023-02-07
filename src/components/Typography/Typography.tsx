import { css } from "@emotion/react";
import type { SerializedStyles } from "@emotion/serialize";
import styled from "@emotion/styled";
import type { FC } from "react";
import type {
  BlockComponentProps,
  InlineLevelComponentProps,
  TextProps,
} from "../../@types";

import { theme } from "../../styles";
import {
  cssBoxSize,
  cssColor,
  cssFontSize,
  cssFontWeight,
  cssSpacingX,
  cssSpacingY,
  cssTextAlign,
  cssTextTransform,
} from "../../styles/interpolate";

type TypographyBlockComponents =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p";
type TypographyInlineLevelComponents = "span";

type TypographyComponents =
  | TypographyBlockComponents
  | TypographyInlineLevelComponents;

type BlockTypographyProps = {
  component: TypographyComponents;
} & BlockComponentProps;
type InlineLevelTypographyProps = {
  component: TypographyInlineLevelComponents;
} & InlineLevelComponentProps;

type TypographyProps = TextProps &
  (BlockTypographyProps | InlineLevelTypographyProps);

const Typography: FC<TypographyProps> = ({
  component = "span",
  children,
  ...rest
}) => {
  const isInline = component === "span";
  const isInlineLevelStyleDefined =
    !rest.fontSize &&
    !rest.fontWeight &&
    !rest.textAlign &&
    !rest.width &&
    !rest.marginLeft &&
    !rest.marginRight &&
    !rest.paddingLeft &&
    !rest.paddingRight;

  const isBlockLevelStyleDefined =
    !isInline &&
    !isInlineLevelStyleDefined &&
    !rest.marginTop &&
    !rest.marginBottom &&
    !rest.paddingTop &&
    !rest.paddingBottom;

  if (
    (isInline && !isInlineLevelStyleDefined) ||
    (!isInline && !isBlockLevelStyleDefined)
  ) {
    return (
      <StyledTypography
        as={component}
        component={component}
        {...rest}
      >
        {children}
      </StyledTypography>
    );
  }

  return (
    <StyledTypography
      as={component}
      component={component}
      {...rest}
    >
      {children}
    </StyledTypography>
  );
};

const typographyStyles: Record<
  TypographyComponents | "span",
  SerializedStyles
> = {
  h1: css`
    font-size: ${theme.fontSizes.xxlarge};
    font-weight: ${theme.fontWeights.extraBold};
    margin-top: ${theme.spacing.large};
    margin-bottom: ${theme.spacing.medium};
  `,
  h2: css`
    font-size: ${theme.fontSizes.xlarge};
    font-weight: ${theme.fontWeights.extraBold};
    margin-top: ${theme.spacing.medium};
    margin-bottom: ${theme.spacing.small};
  `,
  h3: css`
    font-size: ${theme.fontSizes.large};
    font-weight: ${theme.fontWeights.semiBold};
    margin-top: ${theme.spacing.medium};
    margin-bottom: ${theme.spacing.small};
  `,
  h4: css`
    font-size: ${theme.fontSizes.medium};
    font-weight: ${theme.fontWeights.regular};
    margin-top: ${theme.spacing.small};
    margin-bottom: ${theme.spacing.xsmall};
  `,
  h5: css`
    font-size: ${theme.fontSizes.small};
    font-weight: ${theme.fontWeights.regular};
    margin-top: ${theme.spacing.xsmall};
    margin-bottom: ${theme.spacing.xxsmall};
  `,
  h6: css`
    font-size: ${theme.fontSizes.xsmall};
    font-weight: ${theme.fontWeights.regular};
    margin-top: ${theme.spacing.xsmall};
    margin-bottom: ${theme.spacing.xxsmall};
  `,
  p: css`
    font-size: ${theme.fontSizes.medium};
    font-weight: ${theme.fontWeights.regular};
    margin-top: ${theme.spacing.xxsmall};
    margin-bottom: ${theme.spacing.xxsmall};
  `,
  span: css`
    font-size: ${theme.fontSizes.medium};
    font-weight: ${theme.fontWeights.regular};
    margin-top: ${theme.spacing.none};
    margin-bottom: ${theme.spacing.none};
  `,
};

const StyledTypography = styled.span<TypographyProps>`
  ${({ component }) => typographyStyles[component]};

  ${cssFontSize}
  ${cssFontWeight}

  ${cssColor}
  ${cssTextAlign}
  ${cssTextTransform}
  ${cssSpacingX}
  ${cssSpacingY}

  ${cssBoxSize}
`;

export default Typography;