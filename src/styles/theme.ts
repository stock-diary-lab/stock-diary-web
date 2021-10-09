import baseStyled, {
  css,
  CSSProp,
  ThemedStyledInterface,
} from 'styled-components';

const sizes = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
};

type BackQuoteArgs = string[];

interface Media {
  mobile: (...args: BackQuoteArgs) => CSSProp | undefined;
  tablet: (...args: BackQuoteArgs) => CSSProp | undefined;
  desktop: (...args: BackQuoteArgs) => CSSProp | undefined;
}

const media: Media = {
  mobile: (...args) => undefined,
  tablet: (...args) => undefined,
  desktop: (...args) => undefined,
};

Object.keys(sizes).reduce((acc: Media, label: string) => {
  switch (label) {
    case 'desktop':
      acc.desktop = (...args: BackQuoteArgs) =>
        css`
          @media only screen and (min-width: ${sizes.desktop}px) {
            ${args}
          }
        `;
      break;
    case 'tablet':
      acc.tablet = (...args: BackQuoteArgs) =>
        css`
          @media only screen and (max-width: ${sizes.desktop}px) and (min-width: ${sizes.tablet}px) {
            ${args}
          }
        `;
      break;
    case 'mobile':
      acc.mobile = (...args: BackQuoteArgs) =>
        css`
          @media only screen and (max-width: ${sizes.mobile}) {
            ${args}
          }
        `;
      break;
    default:
      break;
  }
  return acc;
}, media);

const colors = {
  white: '#ffffff',
  black: '#000000',
  gray: '#F9F9F9',
  main: '#6CA4F4',
  red: '#F36874',
  sky: '#B9D6FF',
};

const secondaryColors = {
  gray: '#EDEDED',
};

const fontSizes: string[] = [];

const theme = {
  colors,
  secondaryColors,
  fontSizes,
  media,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
