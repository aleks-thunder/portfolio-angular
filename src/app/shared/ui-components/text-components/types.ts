export const fontWeights = {
  light: 200,
  medium: 400,
  semiBold: 600,
  bold: 700,
};

export const scales = {
  xs: '18px',
  m: '20px',
  xl: '24px',
  h1: '36px',
};

export enum TextAlign {
  start = 'start',
  center = 'center',
  end = 'end',
  left = 'left',
  right = 'right',
  justify = 'justify',
  inherit = 'inherit',
  initial = 'initial',
  revert = 'revert',
  unset = 'unset',
}

export type Scales = keyof typeof scales;
export type FontWeights = keyof typeof fontWeights;

export type TextProps = {
  fontWeight: (typeof fontWeights)[FontWeights];
  scale: (typeof scales)[Scales];
  textAlign: TextAlign;
  cursor?: string;
};
