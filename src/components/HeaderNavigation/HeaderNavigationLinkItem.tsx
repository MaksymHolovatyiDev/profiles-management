import React from 'react';

import svg from 'Images/symbol-defs.svg';
import {
  NavigationLink,
  NavigationImg,
} from 'components/HeaderNavigation/HeaderNavigation.styled';
import { HeaderNavigationLinkItemTypes } from 'components/Types/Types';

const HeaderNavigationLinkItem: React.FC<HeaderNavigationLinkItemTypes> = ({
  linkData,
}) => {
  const { route, click, text, image } = linkData;
  return (
    <NavigationLink to={route} onClick={click}>
      {text}
      <NavigationImg>
        <use href={`${svg}#${image}`}></use>
      </NavigationImg>
    </NavigationLink>
  );
};

export default HeaderNavigationLinkItem;
