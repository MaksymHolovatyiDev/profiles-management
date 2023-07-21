import { Field } from 'formik';
import styled from 'styled-components';
import { mainBackground, mainTextBlack } from 'Theme/Theme.ts';

export const SignUpContainer = styled('div')`
  width: 522px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 120px auto 0;
`;

export const AdminCheckbox = styled(Field)`
  display: none;
  &:checked + div {
    background-color: ${mainTextBlack};
  }
`;

export const AdminCustomCheckbox = styled('div')`
  box-sizing: content-box;

  height: 6px;
  width: 6px;

  background-color: transparent;

  border: 1px solid ${mainBackground};
  border-radius: 1px;
  outline: 1px solid ${mainTextBlack};
`;

export const AdminCheckboxLabel = styled('label')`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: ${mainTextBlack};

  font-family: Poppins;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.41;
`;
