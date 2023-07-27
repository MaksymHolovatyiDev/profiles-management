import React, { useEffect, useState } from 'react';
import { Formik } from 'formik';
import { Notify } from 'notiflix';
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
import { UserSignInData } from 'components/Types/Types';
import { backendAPI } from 'Redux/services/backendAPI';
import Spiner from 'components/Spiner/Spiner';
import { mainTextBlack } from 'Theme/Theme';

const SignIn: React.FC = () => {
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);

  const [trigger, { isLoading, error }]: any =
    backendAPI.endpoints.SignIn.useLazyQuery();

  useEffect(() => {
    if (error?.data?.message === 'Incorrect password!') {
      setPasswordError(true);
      Notify.warning(error?.data?.message, {
        timeout: 5000,
        clickToClose: true,
      });
    }

    if (error?.data?.message === 'User doesn`t exists!') {
      setEmailError(true);
      Notify.warning(error?.data?.message, {
        timeout: 5000,
        clickToClose: true,
      });
    }
  }, [error]);

  const onFormSubmit = (values: UserSignInData): void => {
    if (values?.password?.length < 6) {
      setPasswordError(true);
      Notify.warning('Password is too short!', {
        timeout: 5000,
        clickToClose: true,
      });
    } else {
      setPasswordError(false);
      trigger(values);
    }
  };

  const onButtonClick = (evt: any): void => {
    evt.currentTarget.blur();
    evt.currentTarget.disabled = isLoading;
  };

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
              {isLoading ? (
                <Spiner height={30} width={40} containerMargin={false} />
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
