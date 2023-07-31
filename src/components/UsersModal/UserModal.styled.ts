import styled from 'styled-components';
import { Form, Field } from 'formik';
import {
  mainTextBlack,
  mainLabelText,
  mainBackground,
  mainGray,
  white,
  buttonBackgroundColor,
  lightGreen,
  deleteButton,
} from 'Theme/Theme';

export const Backdrop = styled('div')`
  position: fixed;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  background-color: rgba(0, 0, 0, 20%);

  overflow: auto;
`;

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

export const UserModalBtnsContainer = styled('div')`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;

  margin-top: 25px;
`;

export const UserModalBtn = styled('button')`
  height: 38px;
  width: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${buttonBackgroundColor};

  border: 0;
  border-radius: 8px;

  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.18, 0.75, 0.95, 0.63);

  &:first-child:hover,
  &:first-child:focus {
    background-color: ${lightGreen};
  }

  &:last-child:hover,
  &:last-child:focus {
    background-color: ${deleteButton};
  }

  &:hover > svg,
  &:focus > svg {
    fill: ${white};
  }
`;

export const UserModalImage = styled('svg')`
  height: 24px;
  width: 24px;

  fill: ${mainGray};

  transition: background-color 250ms cubic-bezier(0.18, 0.75, 0.95, 0.63);
`;
