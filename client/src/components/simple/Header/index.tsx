import React from 'react';
import { Link } from 'react-router-dom';

import { RoutesName } from '../../../App';
import { Wrapper } from '../../UI';

import logo from '../../../assets/Logo.png';

import { HeaderColor, HeaderWrapper, HeaderTitle } from './Header.styled';

const Header: React.FC = () => {
  return (
    <HeaderColor>
      <Wrapper>
        <HeaderWrapper>
          <Link to={RoutesName.LIST}>
            <img src={logo} alt="Logo" />
          </Link>
          <Link to={RoutesName.LIST}>
            <HeaderTitle>Бронирование Автомобилей</HeaderTitle>
          </Link>
        </HeaderWrapper>
      </Wrapper>
    </HeaderColor>
  );
};

export default Header;
