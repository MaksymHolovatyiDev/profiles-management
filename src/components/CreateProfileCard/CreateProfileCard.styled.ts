import styled from 'styled-components';

import { mainGray, buttonHoverColor, lightGreen } from 'Theme/Theme';

export const ProfileAddBtn = styled('button')`
  height: 70px;
  width: 70px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Poppins;
  font-size: 42px;

  color: ${mainGray};
  background-color: transparent;

  border: 1px solid ${mainGray};
  border-radius: 100%;
  margin-bottom: 30px;

  transition: background-color 250ms cubic-bezier(0.18, 0.75, 0.95, 0.63);

  cursor: pointer;

  &:hover,
  &:focus {
    background-color: ${lightGreen};
  }

  &:hover > svg,
  &:focus > svg {
    stroke: ${buttonHoverColor};
  }
`;

export const ProfileAddBtnImg = styled('svg')`
  height: 42px;
  width: 42px;

  stroke: ${mainGray};

  transition: stroke 250ms cubic-bezier(0.18, 0.75, 0.95, 0.63);
`;

export const CreateProfileText = styled('p')`
  color: ${mainGray};

  font-family: Poppins;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5;
`;
