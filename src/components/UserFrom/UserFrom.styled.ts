import { Form, Field } from 'formik';
import styled from 'styled-components';
import {
  mainBackground,
  mainTextBlack,
  mainGray,
  mainLabelText,
} from 'Theme/Theme.ts';

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
`;

export const UserFormLabel = styled('label')`
  align-self: flex-start;

  color: ${mainLabelText};

  font-family: Poppins;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.88;
`;

export const UserFormButton = styled('button')`
  height: 56px;
  width: 135px;

  color: ${mainGray};

  font-family: Poppins;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;

  border: 0;
  border-radius: 12px;
`;
