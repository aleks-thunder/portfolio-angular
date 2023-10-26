export type FlexProps = {
  flex: string;
  flexDirection: FlexDirection;
  justifyContent: JustifyContent;
  alignContent: AlignContent;
  alignItems: AlignItems;
  flexWrap: 'no-wrap' | 'wrap';
  dimensions: DimensionProps;
  spacing: SpacingProps;
};

export type DimensionProps = {
  width?: string;
  maxWidth?: string;
  height?: string;
  maxHeight?: string;
};

export type SpacingProps = {
  m?: string;
  mx?: string;
  my?: string;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  p?: string;
  px?: string;
  py?: string;
  pt?: string;
  pr?: string;
  pb?: string;
  pl?: string;
};

export type FlexWrap = 'no-wrap' | 'wrap';
export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';
export type AlignContent =
  | 'normal'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-around'
  | 'space-between'
  | 'stretch';

export type JustifyContent =
  | 'normal'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly';
export type AlignItems =
  | 'normal'
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'stretch'
  | 'baseline';
