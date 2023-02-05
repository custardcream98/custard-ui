import type { SpacingsMapType } from "../units";

export type MarginXComponentProps = {
  marginLeft?: SpacingsMapType;
  marginRight?: SpacingsMapType;
};
export type MarginYComponentProps = {
  marginTop?: SpacingsMapType;
  marginBottom?: SpacingsMapType;
};
export type MarginComponentProps = MarginXComponentProps &
  MarginYComponentProps;
export type PaddingXComponentProps = {
  paddingLeft?: SpacingsMapType;
  paddingRight?: SpacingsMapType;
};
export type PaddingYComponentProps = {
  paddingTop?: SpacingsMapType;
  paddingBottom?: SpacingsMapType;
};
export type PaddingComponentProps = PaddingXComponentProps &
  PaddingYComponentProps;
export type SpacingComponentProps = MarginComponentProps &
  PaddingComponentProps;
