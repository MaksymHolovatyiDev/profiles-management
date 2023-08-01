import 'react-datepicker/dist/react-datepicker.css';
import ReactDatePicker from 'react-datepicker';
import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import React, { useState } from 'react';

import {
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
} from 'components/MainModal/MainModal.styled';
import { getUserId } from 'Redux/user/userSelectors';
import { ProfileDataValue } from 'components/Types/Types';
import ModalBtns from 'components/ModalBtns/ModalBtns';

const MainModal: React.FC<any> = ({ data }) => {
  const {
    showModal,
    APIfunction,
    initialValues,
    setUserId = null,
    DateValue = null,
    ProfileID = null,
  } = data;

  const [startDate, setStartDate] = useState<any>(DateValue);

  const [trigger, { isLoading }] = APIfunction();

  const userId = useSelector(getUserId);

  const onSubmit = async (values: ProfileDataValue) => {
    if (!isLoading) {
      const bodyData = {
        userId: setUserId ? setUserId : userId,
        data: { ...values, birthdate: Date.parse(startDate) },
      };

      await trigger(ProfileID ? { id: ProfileID, body: bodyData } : bodyData);

      showModal(false);
    }
  };

  return (
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

            <ModalBtns showModal={showModal} />
          </ModalForm>
        )}
      </Formik>
    </ModalContainer>
  );
};

export default MainModal;
