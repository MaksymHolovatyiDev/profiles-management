import React from 'react';
import { Formik } from 'formik';
import {
  UserFormContainer,
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
import { UserSignInData } from 'components/Types/Types';

const SignIn: React.FC = () => {
  return (
    <UserFormContainer>
      <UserFormTitle>Sign in</UserFormTitle>
      <Formik
        initialValues={{ email: '', password: '', remember: false }}
        onSubmit={(values: UserSignInData): void => {
          console.log(values);
        }}
      >
        {() => (
          <UserForm>
            <UserFormLabel htmlFor="UserEmail">Email</UserFormLabel>
            <UserFormField type="email" id="UserEmail" name="email" required />

            <UserFormLabel htmlFor="UserPassword">Password</UserFormLabel>
            <UserFormField
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

            <UserFormButton style={{ marginTop: '90px' }} type="submit">
              Sign In
            </UserFormButton>
          </UserForm>
        )}
      </Formik>
      <UserFormLink to="/SignUp">Sign Up</UserFormLink>
    </UserFormContainer>
  );
};

export default SignIn;
