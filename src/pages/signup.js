/* eslint-disable operator-linebreak */
import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase';
import { HeaderContainer } from '../containers/header';
import { FooterContainer } from '../containers/footer';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

const Signup = () => {
  const history = useHistory();

  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const isInvalid =
    firstName === '' ||
    password === '' ||
    emailAddress === '' ||
    password.trim().length < 6;

  const handleSignup = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) => {
        result.user.updateProfile({
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1,
        });
      })
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((err) => {
        setEmailAddress('');
        setPassword('');
        setFirstName('');
        setError(err.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error} </Form.Error>}

          <Form.Base onSubmit={handleSignup} mehtod="POST">
            <Form.Input
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder="Email address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              autoComplete="off"
              placeholder="Password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign In
            </Form.Submit>

            <Form.Text>
              Already a user? <Form.Link to="/signin">Sign in now</Form.Link>
            </Form.Text>

            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. Learn more.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default Signup;
