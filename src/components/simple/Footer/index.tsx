import React from 'react';

import { Wrapper } from '../../UI';

import { FooterColor, FooterText } from './Footer.style';

const Footer: React.FC = () => {
  return (
    <FooterColor>
      <Wrapper>
        <FooterText>Copyritht 2022, Бронирование автомобилей</FooterText>
      </Wrapper>
    </FooterColor>
  );
};

export default Footer;
