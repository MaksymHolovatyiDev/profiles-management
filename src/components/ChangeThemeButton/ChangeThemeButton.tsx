import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTheme } from 'Redux/user/userSelectors';
import { changeTheme } from 'Redux/user/userSlice';

import svg from 'Images/symbol-defs.svg';
import {
  ThemeContainer,
  ThemeInput,
  ThemeCustomInput,
  ThemeImg,
} from './ChangeThemeButton.styled';

const ChangeThemeButton: React.FC = () => {
  const dispatch = useDispatch();
  const Theme = useSelector(getTheme);

  const onThemeClick = (evt: any) => {
    dispatch(changeTheme(evt.target.checked));
  };

  return (
    <ThemeContainer>
      <ThemeInput
        type={'checkbox'}
        defaultChecked={Theme}
        onClick={onThemeClick}
      />
      <ThemeCustomInput>
        <ThemeImg>
          <use href={`${svg}#icon-wb_sunny`}></use>
          <use href={`${svg}#icon-moon`}></use>
        </ThemeImg>
      </ThemeCustomInput>
    </ThemeContainer>
  );
};

export default ChangeThemeButton;
