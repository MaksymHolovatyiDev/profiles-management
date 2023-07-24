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
import { UserSignUpData } from 'components/Types/Types';
import { useNavigate } from 'react-router-dom';

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  return (
    <UserFormContainer>
      <UserFormTitle>Create your account</UserFormTitle>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          admin: false,
          remember: false,
        }}
        onSubmit={(values: UserSignUpData): void => {
          navigate('/');
          console.log(values);
        }}
      >
        {() => (
          <UserForm>
            <UserFormLabel htmlFor="Username">Username</UserFormLabel>
            <UserFormField type="text" id="Username" name="name" required />

            <UserFormLabel htmlFor="UserEmail">Email</UserFormLabel>
            <UserFormField type="email" id="UserEmail" name="email" required />

            <UserFormLabel htmlFor="UserPassword">Password</UserFormLabel>
            <UserFormField
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

            <UserFormButton style={{ marginTop: '90px' }} type="submit">
              Sign Up
            </UserFormButton>
          </UserForm>
        )}
      </Formik>
      <UserFormLink to="/SignIn">Sign In</UserFormLink>
    </UserFormContainer>
  );
};

export default SignIn;
