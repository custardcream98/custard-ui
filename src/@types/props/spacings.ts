import type { SpacingsMapType } from "../units";

export type MarginXComponentProps = {
  marginLeft?: SpacingsMapType;
  marginRight?: SpacingsMapType;
};
export type MarginYComponentProps = {
  marginTop?: SpacingsMapType;
  marginBottom?: SpacingsMapType;
};
export type MarginAllComponentProps = {
  margin?: SpacingsMapType;
};
export type MarginComponentProps = MarginAllComponentProps &
  MarginXComponentProps &
  MarginYComponentProps;
export type PaddingXComponentProps = {
  paddingLeft?: SpacingsMapType;
  paddingRight?: SpacingsMapType;
};
export type PaddingYComponentProps = {
  paddingTop?: SpacingsMapType;
  paddingBottom?: SpacingsMapType;
};
export type PaddingAllComponentProps = {
  padding?: SpacingsMapType;
};
export type PaddingComponentProps =
  PaddingAllComponentProps &
    PaddingXComponentProps &
    PaddingYComponentProps;
export type SpacingComponentProps = MarginComponentProps &
  PaddingComponentProps;
