import { Form, Field } from 'formik';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import {
  mainBackground,
  mainTextBlack,
  mainGray,
  mainLabelText,
  lightGray,
  buttonBackgroundColor,
  white,
} from 'Theme/Theme';

const MainUserContainer = css`
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const UserFormContainerSignUp = styled('div')`
  ${MainUserContainer};

  padding: 120px 0 0;
`;

export const UserFormContainerSignIn = styled('div')`
  ${MainUserContainer};

  padding: 150px 0 0;
`;

export const UserFormTitle = styled('p')`
  color: ${mainTextBlack};

  font-family: Poppins;
  font-weight: 600;
  font-size: 48px;
  line-height: 1.5;
`;

export const UserForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 130px 0 15px;
`;

export const UserFormField = styled(Field)`
  color: ${mainTextBlack};
  background-color: ${mainBackground};

  font-family: Poppins;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.41;

  border: 0;
  border-bottom: 1px solid ${mainTextBlack};
  margin: 5px 0 25px;

  outline: none;

  transition: color 250ms cubic-bezier(0.18, 0.75, 0.95, 0.63);
`;

export const UserFormLabel = styled('label')`
  align-self: flex-start;

  color: ${mainLabelText};

  font-family: Poppins;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.88;
`;

const buttonsStyles = css`
  height: 56px;
  width: 135px;

  color: ${mainGray};
  background-color: ${buttonBackgroundColor};

  font-family: Poppins;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;

  border: 0;
  border-radius: 12px;

  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.18, 0.75, 0.95, 0.63),
    color 250ms cubic-bezier(0.18, 0.75, 0.95, 0.63);

  &:hover,
  &:focus {
    color: ${white};
    background-color: ${lightGray};
  }
`;

export const UserFormButton = styled('button')`
  ${buttonsStyles}

  &:disabled {
    background-color: ${lightGray};
  }
`;

export const UserFormLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;
  ${buttonsStyles}
`;

export const UserFormCheckbox = styled(Field)`
  display: none;
  &:checked + div {
    background-color: ${mainTextBlack};
  }
`;

export const UserFormCustomCheckbox = styled('div')`
  box-sizing: content-box;

  height: 6px;
  width: 6px;

  background-color: transparent;

  border: 1px solid ${mainBackground};
  border-radius: 1px;
  outline: 1px solid ${mainTextBlack};
`;

export const UserFormCheckboxLabel = styled('label')`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: ${mainTextBlack};

  font-family: Poppins;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.41;

  cursor: pointer;

  & + & {
    margin-top: 15px;
  }
`;
