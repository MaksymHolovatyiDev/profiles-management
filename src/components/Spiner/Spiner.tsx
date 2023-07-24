import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { SpinerContainer } from './Spiner.styled';
import { mainTextBlack } from 'Theme/Theme';

const Spiner: React.FC = () => {
  return (
    <SpinerContainer>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color={mainTextBlack}
        ariaLabel="three-dots-loading"
      />
    </SpinerContainer>
  );
};

export default Spiner;
