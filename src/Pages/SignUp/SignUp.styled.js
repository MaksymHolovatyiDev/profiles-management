import { Field } from 'formik';
import styled from 'styled-components';

export const SignUpContainer = styled('div')`
  width: 522px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 3vh auto 0;
`;

export const AdminCheckboxContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 10px;
`;

export const AdminCheckbox = styled(Field)`
  /* visibility: hidden; */
`;

export const AdminCheckboxLabel = styled('label')`
  color: #14142b;

  font-family: Poppins;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.41;
`;
