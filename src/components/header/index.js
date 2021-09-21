/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import React from 'react';
import { Link } from 'react-router-dom';

import { Background, Container, Logo, ButtonLink } from './styles/header';

const Header = ({ children, bg = true, ...restProps }) =>
  bg ? <Background {...restProps}> {children} </Background> : children;

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}> {children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <Link to={to}>
      <Logo {...restProps} />
    </Link>
  );
};

Header.ButtonLink = function HeaderButtonLink({ to, children, ...restProps }) {
  return (
    <ButtonLink to={to} {...restProps}>
      {children}
    </ButtonLink>
  );
};

export default Header;
