import React from 'react';
import { Header } from '../components';
import logo from '../logo.svg';
import * as ROUTES from '../constants/routes';

export const HeaderContainer = ({ children }) => (
  <Header>
    <Header.Frame>
      <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo} />
      <Header.ButtonLink to={ROUTES.SIGN_IN}> Sign In</Header.ButtonLink>
    </Header.Frame>
    {children}
  </Header>
);
