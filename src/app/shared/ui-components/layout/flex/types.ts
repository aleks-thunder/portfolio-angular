export type FlexProps = {
  flex: string;
  flexDirection: FlexDirection;
  justifyContent: JustifyContent;
  alignContent: AlignContent;
  alignItems: AlignItems;
  flexWrap: 'no-wrap' | 'wrap';
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
