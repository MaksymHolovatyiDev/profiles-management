import { Notify } from 'notiflix';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import SignUp from 'components/SignUp/SignUp';
import SignIn from 'components/SignIn/SignIn';
import { useAuthorizationMutation } from 'Redux/services/backendAPI';
import { UserSignInData, UserSignUpData } from 'components/Types/Types';
import { setUser } from 'Redux/user/userSlice';
import { PathRoutes } from 'environment/routes';

const Authorization: React.FC = () => {
  const [emailError, setEmailError] = useState<boolean>(false);
  const [passwordError, setPasswordError] = useState<boolean>(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const isSignUpPage = pathname === PathRoutes.RouteSignUp;

  const [trigger, { isFetching, error, isSuccess, data }]: any =
    useAuthorizationMutation();
  console.log(error, data);
  useEffect(() => {
    if (isSignUpPage) {
      if (error?.data?.message === 'Email already exists!') {
        setEmailError(true);

        Notify.warning(error?.data?.message, {
          timeout: 5000,
          clickToClose: true,
        });
      }
    } else {
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
    }
  }, [error]);

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUser(data));
      navigate(PathRoutes.RouteDefault);
    }
  }, [isSuccess]);

  useEffect(() => {
    setEmailError(false);
    setPasswordError(false);
  }, [pathname]);

  const onFormSubmit = async (
    values: UserSignInData | UserSignUpData
  ): Promise<void> => {
    if (values?.password?.length < 6) {
      setPasswordError(true);

      Notify.warning('Password is too short!', {
        timeout: 5000,
        clickToClose: true,
      });
    } else {
      setPasswordError(false);
      await trigger({
        route: isSignUpPage ? 'signup' : 'signin',
        body: values,
      });
    }
  };

  const onButtonClick = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    evt.currentTarget.blur();
    evt.currentTarget.disabled = isFetching;
  };

  return isSignUpPage ? (
    <SignUp
      emailError={emailError}
      passwordError={passwordError}
      onFormSubmit={onFormSubmit}
      onButtonClick={onButtonClick}
      isFetching={isFetching}
    />
  ) : (
    <SignIn
      emailError={emailError}
      passwordError={passwordError}
      onFormSubmit={onFormSubmit}
      onButtonClick={onButtonClick}
      isFetching={isFetching}
    />
  );
};

export default Authorization;
