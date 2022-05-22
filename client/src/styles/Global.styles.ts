import { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    font-family: Arial, Georgia, sans-serif;
    font-size: 16px;
    color: #000000;
}
`;

export const theme = {
  colors: {
    mainText: '#000000',
    otherText: 'rgba(0, 0, 0, 0.35)',
    lightText: '#FFFFFF',
    colorBtn: '#15A4FA',
    gray: '#F6F9F9',
    green: '#008736',
  },
  media: {
    phone: '(max-width: 425px)',
    tablet: '(max-width: 768px) and (min-width: 425px)',
    medium: '(max-width: 992px) and (min-width: 768px)',
    large: '(max-width: 1200px) and (min-width: 992px)',
  },
};
