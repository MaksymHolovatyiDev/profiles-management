import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Formik } from 'formik';
import ReactDatePicker from 'react-datepicker';
import {
  Backdrop,
  ModalContainer,
  ModalForm,
  ModalField,
  DateInput,
  ModalLabel,
  RadioWraper,
  RadioContainer,
  RadioLabel,
  RadioInput,
  CustomRadio,
  ModalBtnsContainer,
  ModalBtn,
  ModalImage,
} from './Modal.styled';
import svg from 'Images/symbol-defs.svg';
import 'react-datepicker/dist/react-datepicker.css';
import { backendAPI } from 'Redux/services/backendAPI';
import { ProfileDataValue } from 'components/Types/Types';
import { getUserId } from 'Redux/user/userSelectors';

const Modal: React.FC<any> = ({ showModal }) => {
  const [startDate, setStartDate] = useState<any>();
  const [trigger, { isLoading }]: any =
    backendAPI.endpoints.CreateProfiles.useLazyQuery();
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
      await trigger({
        userId,
        data: { ...values, birthdate: Date.parse(startDate) },
      });
      showModal(false);
    }
  };

  const closeModal = (evt: any) => {
    evt.currentTarget.blur();
    showModal(false);
  };

  return (
    <Backdrop>
      <ModalContainer>
        <Formik
          initialValues={{
            name: '',
            gender: 'male',
            city: '',
          }}
          onSubmit={onSubmit}
        >
          {() => (
            <ModalForm>
              <ModalLabel>
                name:
                <ModalField type="text" name="name" required />
              </ModalLabel>

              <RadioWraper>
                <ModalLabel>gender:</ModalLabel>
                <RadioContainer>
                  <RadioLabel>
                    <RadioInput
                      type="radio"
                      name="gender"
                      value="male"
                      checked
                    />
                    <CustomRadio />
                    male
                  </RadioLabel>
                  <RadioLabel>
                    <RadioInput type="radio" name="gender" value="female" />
                    <CustomRadio />
                    female
                  </RadioLabel>
                </RadioContainer>
              </RadioWraper>

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
