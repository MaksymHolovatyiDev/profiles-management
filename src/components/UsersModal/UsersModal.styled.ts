import styled from 'styled-components';
import { Form, Field } from 'formik';
import {
  mainTextBlack,
  mainLabelText,
  mainBackground,
  white,
} from 'Theme/Theme';


export const UserModalContainer = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 600px;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${white};

  padding: 70px 150px;
  border-radius: 12px;

  transform: translate(-50%, -50%);

  @media screen and (max-height: 585px) {
    top: 0;
    transform: translate(-50%, 0);
  }
`;

export const UserModalForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  gap: 25px;
`;

export const UserModalField = styled(Field)`
  width: 100%;

  color: ${mainTextBlack};
  background-color: ${white};

  font-family: Poppins;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;

  border: 0;
  border-bottom: 1px solid ${mainTextBlack};
  margin-top: 5px;

  outline: none;
`;

export const UserModalLabel = styled('label')`
  width: 100%;

  color: ${mainLabelText};

  font-family: Poppins;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
`;

export const RadioWrapper = styled('div')`
  width: 100%;
`;

export const RadioContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 5px;
`;

export const RadioLabel = styled('label')`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: ${mainTextBlack};

  font-family: Poppins;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;
`;

export const RadioInput = styled(Field)`
  display: none;

  margin-right: 0;
  margin-left: 0;

  &:checked + div {
    background-color: ${mainTextBlack};
  }
`;

export const CustomRadio = styled('div')`
  box-sizing: content-box;

  height: 4px;
  width: 4px;

  background-color: transparent;

  border: 3px solid ${mainBackground};
  border-radius: 100%;
  margin-top: 3px;

  outline: 1px solid ${mainTextBlack};
`;
