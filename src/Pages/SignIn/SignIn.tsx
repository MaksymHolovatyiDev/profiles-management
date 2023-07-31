import { Formik } from 'formik';
import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';

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
import { useSignInMutation } from 'Redux/services/backendAPI';
import { mainTextBlack } from 'Theme/Theme';
import { UserSignInData } from 'components/Types/Types';

const SignIn: React.FC = () => {
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);

  const [trigger, { isLoading, error }]: any = useSignInMutation();

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

  const onFormSubmit = async (values: UserSignInData): Promise<void> => {
    if (values?.password?.length < 6) {
      setPasswordError(true);

      Notify.warning('Password is too short!', {
        timeout: 5000,
        clickToClose: true,
      });
    } else {
      setPasswordError(false);

      await trigger(values);
    }
  };

  const onButtonClick = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
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
