import styled from 'styled-components';
import { Form, Field } from 'formik';
import { mainTextBlack, mainLabelText } from 'Theme/Theme';

export const Backdrop = styled('div')`
  position: fixed;
  top: 0;
  left: 0;

  height: 100%;
  width: 100%;

  background-color: rgba(0, 0, 0, 20%);
`;

export const ModalContainer = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;

  height: 575px;
  width: 600px;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;

  padding: 70px 175px;
  border-radius: 12px;

  transform: translate(-50%, -50%);
`;

export const ModalForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const ModalField = styled(Field)`
  width: 250px;

  color: ${mainTextBlack};
  background-color: #ffffff;

  font-family: Poppins;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.5;

  border: 0;
  border-bottom: 1px solid ${mainTextBlack};

  outline: none;
`;

export const ModalLabel = styled('label')`
  color: ${mainLabelText};

  font-family: Poppins;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
`;
