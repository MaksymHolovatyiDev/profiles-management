import React from 'react';

import svg from 'Images/symbol-defs.svg';
import {
  ModalBtnsContainer,
  ModalBtn,
  ModalImage,
} from 'components/ModalBtns/ModalBtns.styled';

const ModalBtns: React.FC<any> = ({ showModal }) => {
  const closeModal = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.currentTarget.blur();
    showModal(false);
  };

  return (
    <ModalBtnsContainer>
      <ModalBtn type="submit">
        <ModalImage>
          <use href={`${svg}#icon-check-1`}></use>
        </ModalImage>
      </ModalBtn>
      <ModalBtn type="button" onClick={closeModal}>
        <ModalImage>
          <use href={`${svg}#icon-close-2-1`}></use>
        </ModalImage>
      </ModalBtn>
    </ModalBtnsContainer>
  );
};

export default ModalBtns;
