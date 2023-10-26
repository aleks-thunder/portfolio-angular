export type FlexProps = {
  flexPosition: FlexPositionProps;
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

export type FlexPositionProps = {
  flex?: string;
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexWrap?: 'no-wrap' | 'wrap';
  alignContent?:
    | 'normal'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-around'
    | 'space-between'
    | 'stretch';
  justifyContent?:
    | 'normal'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?:
    | 'normal'
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'stretch'
    | 'baseline';
};
