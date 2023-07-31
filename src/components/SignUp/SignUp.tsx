import { Formik } from 'formik';
import React from 'react';

import {
  UserFormContainerSignUp,
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
import Spinner from 'components/Spinner/Spinner';
import { mainTextBlack } from 'Theme/Theme';
import { AuthorizationComponents } from 'components/Types/Types';

const SignUp: React.FC<AuthorizationComponents> = ({
  emailError,
  passwordError,
  onFormSubmit,
  onButtonClick,
  isFetching,
}) => {
  return (
    <UserFormContainerSignUp>
      <UserFormTitle>Create your account</UserFormTitle>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          admin: false,
          remember: false,
        }}
        onSubmit={onFormSubmit}
      >
        {() => (
          <UserForm>
            <UserFormLabel htmlFor="Username">Username</UserFormLabel>
            <UserFormField type="text" id="Username" name="name" required />

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

            <UserFormCheckboxLabel htmlFor="isAdmin">
              <UserFormCheckbox
                style={{ margin: 0 }}
                type="checkbox"
                id="isAdmin"
                name="admin"
              />
              <UserFormCustomCheckbox />
              is admin
            </UserFormCheckboxLabel>

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
                'Sign Up'
              )}
            </UserFormButton>
          </UserForm>
        )}
      </Formik>
      <UserFormLink to="/SignIn">Sign In</UserFormLink>
    </UserFormContainerSignUp>
  );
};

export default SignUp;
