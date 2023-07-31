import styled from 'styled-components';

import { mainTextBlack } from 'Theme/Theme';

export const UserContainer = styled('div')`
  display: flex;
  align-items: center;
  gap: 25px;
`;

export const UserAvatarImg = styled('img')`
  height: 48px;
  width: 48px;
`;

export const UserName = styled('p')`
  color: ${mainTextBlack};

  font-family: Poppins;
  font-weight: 600;
  font-size: 18px;
  line-height: 1.5;
`;
