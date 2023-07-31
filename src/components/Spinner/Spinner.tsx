import React from 'react';
import { ThreeDots } from 'react-loader-spinner';

import { mainTextBlack } from 'Theme/Theme';
import { SpinnerContainer } from './Spinner.styled';
import { SpinnerProps } from 'components/Types/Types';

const Spinner: React.FC<SpinnerProps> = ({
  height,
  width,
  containerMargin = false,
}) => {
  return (
    <SpinnerContainer style={{ marginTop: containerMargin ? '154px' : 0 }}>
      <ThreeDots
        height={`${height}`}
        width={`${width}`}
        radius="9"
        color={mainTextBlack}
        ariaLabel="three-dots-loading"
      />
    </SpinnerContainer>
  );
};

export default Spinner;
