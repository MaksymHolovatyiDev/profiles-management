import 'react-datepicker/dist/react-datepicker.css';
import React from 'react';

import { Backdrop } from './Modal.styled';
import { useModal } from 'components/customHooks/modalHooks';
import MainModal from 'components/MainModal/MainModal';
import UserModal from 'components/UsersModal/UsersModal';

const Modal: React.FC<any> = data => {
  const { showModal } = data;

  useModal(showModal);

  return (
    <Backdrop>
      {data?.UserModal ? <UserModal data={data} /> : <MainModal data={data} />}
    </Backdrop>
  );
};

export default Modal;
