import { Formik } from 'formik';
import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';

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
import Spiner from 'components/Spiner/Spiner';
import { backendAPI } from 'Redux/services/backendAPI';
import { mainTextBlack } from 'Theme/Theme';
import { UserSignUpData } from 'components/Types/Types';

const SignUp: React.FC = () => {
  const [shotPassword, setShortPassword] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);

  const [trigger, { isLoading, error }]: any =
    backendAPI.endpoints.SignUp.useLazyQuery();

  useEffect(() => {
    if (error?.data?.message === 'Email already exists!') {
      setEmailError(true);

      Notify.warning(error?.data?.message, {
        timeout: 5000,
        clickToClose: true,
      });
    }
  }, [error]);

  const onFormSubmit = (values: UserSignUpData): void => {
    if (values?.password?.length < 6) {
      setShortPassword(true);

      Notify.warning('Password is too short!', {
        timeout: 5000,
        clickToClose: true,
      });
    } else {
      setShortPassword(false);

      trigger(values);
    }
  };

  const onButtonClick = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    evt.currentTarget.blur();
    evt.currentTarget.disabled = isLoading;
  };

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
                borderColor: shotPassword ? 'red' : mainTextBlack,
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
              {isLoading ? (
                <Spiner height={30} width={40} containerMargin={false} />
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
