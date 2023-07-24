import React, { useState } from 'react';
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

const Modal: React.FC = () => {
  const [startDate, setStartDate] = useState<Date>();

  return (
    <Backdrop>
      <ModalContainer>
        <Formik
          initialValues={{
            name: '',
            gender: 'male',
            city: '',
          }}
          onSubmit={(values: any) => {
            console.log(values, startDate);
          }}
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
                <ModalBtn type="button">
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
