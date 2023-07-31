import 'react-datepicker/dist/react-datepicker.css';
import ReactDatePicker from 'react-datepicker';
import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

import svg from 'Images/symbol-defs.svg';
import {
  Backdrop,
  ModalContainer,
  ModalForm,
  ModalField,
  DateInput,
  ModalLabel,
  RadioWrapper,
  RadioContainer,
  RadioLabel,
  RadioInput,
  CustomRadio,
  ModalBtnsContainer,
  ModalBtn,
  ModalImage,
} from './Modal.styled';
import { getUserId } from 'Redux/user/userSelectors';
import { ProfileDataValue } from 'components/Types/Types';

const Modal: React.FC<any> = ({
  showModal,
  APIfunction,
  initialValues,
  setUserId = null,
  DateValue = null,
  ProfileID = null,
}) => {
  const [startDate, setStartDate] = useState<any>(DateValue);

  const [trigger, { isLoading }] = APIfunction();

  const userId = useSelector(getUserId);

  const handleClick = (evt: KeyboardEvent) => {
    if (evt.code === 'Escape') {
      showModal(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleClick);
    return () => {
      window.removeEventListener('keydown', handleClick);
    };
  }, []);

  const onSubmit = async (values: ProfileDataValue) => {
    if (!isLoading) {
      const bodyData = {
        userId: setUserId ? setUserId : userId,
        data: { ...values, birthdate: Date.parse(startDate) },
      };

      console.log(
        await trigger(ProfileID ? { id: ProfileID, body: bodyData } : bodyData)
      );

      showModal(false);
    }
  };

  const closeModal = (evt: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    evt.currentTarget.blur();
    showModal(false);
  };

  return (
    <Backdrop>
      <ModalContainer>
        <Formik initialValues={initialValues} onSubmit={onSubmit}>
          {() => (
            <ModalForm>
              <ModalLabel>
                name:
                <ModalField type="text" name="name" required />
              </ModalLabel>

              <RadioWrapper>
                <ModalLabel>gender:</ModalLabel>
                <RadioContainer>
                  <RadioLabel>
                    <RadioInput type="radio" name="gender" value="male" />
                    <CustomRadio />
                    male
                  </RadioLabel>
                  <RadioLabel>
                    <RadioInput type="radio" name="gender" value="female" />
                    <CustomRadio />
                    female
                  </RadioLabel>
                </RadioContainer>
              </RadioWrapper>

              <ModalLabel>
                birthdate:
                <ReactDatePicker
                  selected={startDate}
                  maxDate={new Date()}
                  dateFormat="dd.MM.yyyy"
                  shouldCloseOnSelect={true}
                  customInput={<DateInput type="text" />}
                  onChange={(date: any) => {
                    setStartDate(date);
                  }}
                  required
                />
              </ModalLabel>

              <ModalLabel>
                city:
                <ModalField type="text" name="city" required />
              </ModalLabel>

              <ModalBtnsContainer>
                <ModalBtn type="submit">
                  <ModalImage>
                    <use href={`${svg}#icon-check-1`}></use>\
                  </ModalImage>
                </ModalBtn>
                <ModalBtn type="button" onClick={closeModal}>
                  <ModalImage>
                    <use href={`${svg}#icon-close-2-1`}></use>\
                  </ModalImage>
                </ModalBtn>
              </ModalBtnsContainer>
            </ModalForm>
          )}
        </Formik>
      </ModalContainer>
    </Backdrop>
  );
};

export default Modal;
