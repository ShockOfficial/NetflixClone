/* eslint-disable object-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
import React from 'react';
import { Link } from 'react-router-dom';

import {
  Background,
  Container,
  Logo,
  ButtonLink,
  Feature,
  Text,
  TextLink,
  FeatureCallOut,
  Group,
  Picture,
  Profile,
  Dropdown,
} from './styles/header';

const Header = ({ children, bg = true, ...restProps }) =>
  bg ? <Background {...restProps}> {children} </Background> : children;

Header.FeatureCallOut = function HeaderFeature({ children, ...restProps }) {
  return <FeatureCallOut {...restProps}> {children}</FeatureCallOut>;
};

Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return <Feature {...restProps}> {children}</Feature>;
};

Header.Text = function HeaderText({ children, ...restProps }) {
  return <Text {...restProps}> {children}</Text>;
};

Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return <Dropdown {...restProps}> {children}</Dropdown>;
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return <TextLink {...restProps}> {children}</TextLink>;
};

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}> {children}</Profile>;
};

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}> {children}</Container>;
};

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}> {children}</Group>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <Link to={to}>
      <Logo {...restProps} />
    </Link>
  );
};

Header.Picture = function HeaderPicture({ src, ...restProps }) {
  return <Picture {...restProps} src={`/images/users/${src}.png`} />;
};

Header.ButtonLink = function HeaderButtonLink({ to, children, ...restProps }) {
  return (
    <ButtonLink to={to} {...restProps}>
      {children}
    </ButtonLink>
  );
};

export default Header;
