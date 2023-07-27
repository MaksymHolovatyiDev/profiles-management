import React from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { SpinerContainer } from './Spiner.styled';
import { mainTextBlack } from 'Theme/Theme';
import { ISpinerProps } from 'components/Types/Types';

const Spiner: React.FC<ISpinerProps> = ({
  height,
  width,
  containerMargin = false,
}) => {
  return (
    <SpinerContainer style={{ marginTop: containerMargin ? '154px' : 0 }}>
      <ThreeDots
        height={`${height}`}
        width={`${width}`}
        radius="9"
        color={mainTextBlack}
        ariaLabel="three-dots-loading"
      />
    </SpinerContainer>
  );
};

export default Spiner;
