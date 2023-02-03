import { css } from "@emotion/react";
import type { SerializedStyles } from "@emotion/serialize";
import styled from "@emotion/styled";
import { isNumber } from "lodash";
import type { ComponentProps, FC } from "react";
import type {
  FontSizes,
  FontWeights,
  Spacings,
} from "../../@types";

import { theme } from "../../styles";
import { resolveNumaricStyle } from "../../utils";

type TypographyComponents =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span";

type TypographyThemeProps = {
  component?: TypographyComponents;
};
type StyledTypographyProps = {
  component: TypographyComponents;
  fontSize?: FontSizes | number;
  fontWeight?: FontWeights | number;
  marginTop?: Spacings | number;
  marginBottom?: Spacings | number;
};
const isDefinedFontSize = (
  fontSize: FontSizes | number
): fontSize is FontSizes =>
  typeof fontSize === "string" &&
  fontSize in theme.fontSizes;
const isDefinedFontWeight = (
  fontWeight: FontWeights | number
): fontWeight is FontWeights =>
  typeof fontWeight === "string" &&
  fontWeight in theme.fontWeights;
const isDefinedSpacing = (
  spacing: Spacings | number
): spacing is Spacings =>
  typeof spacing === "string" && spacing in theme.spacing;

type TypographyProps =
  ComponentProps<TypographyComponents> &
    TypographyThemeProps &
    Partial<StyledTypographyProps>;

const Typography: FC<TypographyProps> = ({
  component = "span",
  fontSize,
  fontWeight,
  marginTop,
  marginBottom,
  children,
  ...rest
}) => {
  if (
    !fontSize &&
    !fontWeight &&
    !marginTop &&
    !marginBottom
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

  const resolvedFontSize = fontSize ?? "medium";
  const resolvedFontWeight = fontWeight ?? "regular";
  const resolvedMarginTop = marginTop ?? 0;
  const resolvedMarginBottom = marginBottom ?? 0;

  return (
    <StyledTypography
      as={component}
      component={component}
      fontSize={resolvedFontSize}
      fontWeight={resolvedFontWeight}
      marginTop={resolvedMarginTop}
      marginBottom={resolvedMarginBottom}
      {...rest}
    >
      {children}
    </StyledTypography>
  );
};

const typographyStyles: Record<
  TypographyComponents,
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

const StyledTypography = styled.span<StyledTypographyProps>`
  ${({ component }) => typographyStyles[component]};

  ${({ fontSize }) =>
    fontSize &&
    css`
      font-size: ${isDefinedFontSize(fontSize)
        ? theme.fontSizes[fontSize]
        : resolveNumaricStyle(fontSize)};
    `};

  ${({ fontWeight }) =>
    fontWeight &&
    css`
      font-weight: ${isDefinedFontWeight(fontWeight)
        ? theme.fontWeights[fontWeight]
        : isNumber(fontWeight)
        ? fontWeight
        : theme.fontWeights.regular};
    `};

  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: ${isDefinedSpacing(marginTop)
        ? theme.spacing[marginTop]
        : resolveNumaricStyle(marginTop)};
    `};

  ${({ marginBottom }) =>
    marginBottom &&
    css`
      margin-bottom: ${isDefinedSpacing(marginBottom)
        ? theme.spacing[marginBottom]
        : resolveNumaricStyle(marginBottom)};
    `};
`;

export default Typography;
