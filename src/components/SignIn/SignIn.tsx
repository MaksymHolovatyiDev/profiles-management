import { Formik } from 'formik';
import React from 'react';

import Spinner from 'components/Spinner/Spinner';
import {
  UserFormContainerSignIn,
  UserFormTitle,
  UserForm,
  UserFormField,
  UserFormLabel,
  UserFormButton,
  UserFormLink,
  UserFormCheckboxLabel,
  UserFormCheckbox,
  UserFormCustomCheckbox,
} from 'components/UserFrom/UserFrom.styled';
import { mainTextBlack } from 'Theme/Theme';
import { AuthorizationComponents } from 'components/Types/Types';

const SignIn: React.FC<AuthorizationComponents> = ({
  emailError,
  passwordError,
  onFormSubmit,
  onButtonClick,
  isFetching,
}) => {
  return (
    <UserFormContainerSignIn>
      <UserFormTitle>Sign in</UserFormTitle>
      <Formik
        initialValues={{ email: '', password: '', remember: false }}
        onSubmit={onFormSubmit}
      >
        {() => (
          <UserForm>
            <UserFormLabel htmlFor="UserEmail">Email</UserFormLabel>
            <UserFormField
              style={{
                borderColor: emailError ? 'red' : mainTextBlack,
              }}
              type="email"
              id="UserEmail"
              name="email"
              required
            />

            <UserFormLabel htmlFor="UserPassword">Password</UserFormLabel>
            <UserFormField
              style={{
                borderColor: passwordError ? 'red' : mainTextBlack,
              }}
              type="password"
              id="UserPassword"
              name="password"
              required
            />

            <UserFormCheckboxLabel htmlFor="rememberMe">
              <UserFormCheckbox
                style={{ margin: 0 }}
                type="checkbox"
                id="rememberMe"
                name="remember"
              />
              <UserFormCustomCheckbox />
              remember me
            </UserFormCheckboxLabel>

            <UserFormButton
              style={{ marginTop: '90px' }}
              type="submit"
              onClick={onButtonClick}
            >
              {isFetching ? (
                <Spinner height={30} width={40} containerMargin={false} />
              ) : (
                'Sign In'
              )}
            </UserFormButton>
          </UserForm>
        )}
      </Formik>
      <UserFormLink to="/SignUp">Sign Up</UserFormLink>
    </UserFormContainerSignIn>
  );
};

export default SignIn;
