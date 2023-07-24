import { Formik } from 'formik';
import {
  Backdrop,
  UserModalContainer,
  UserModalForm,
  UserModalField,
  UserModalLabel,
  RadioWraper,
  RadioContainer,
  RadioLabel,
  RadioInput,
  CustomRadio,
  UserModalBtnsContainer,
  UserModalBtn,
  UserModalImage,
} from './UserModal.styled';
import svg from 'Images/symbol-defs.svg';
import 'react-datepicker/dist/react-datepicker.css';

const UserModal: React.FC = () => {
  return (
    <Backdrop>
      <UserModalContainer>
        <Formik
          initialValues={{
            name: '',
            email: 'male',
            role: '',
          }}
          onSubmit={(values: any) => {
            console.log(values);
          }}
        >
          {() => (
            <UserModalForm>
              <UserModalLabel>
                user name:
                <UserModalField type="text" name="name" required />
              </UserModalLabel>

              <UserModalLabel>
                email:
                <UserModalField type="emial" name="emial" required />
              </UserModalLabel>

              <RadioWraper>
                <UserModalLabel>role:</UserModalLabel>
                <RadioContainer>
                  <RadioLabel>
                    <RadioInput type="radio" name="role" value="user" checked />
                    <CustomRadio />
                    user
                  </RadioLabel>
                  <RadioLabel>
                    <RadioInput type="radio" name="role" value="admin" />
                    <CustomRadio />
                    admin
                  </RadioLabel>
                </RadioContainer>
              </RadioWraper>

              <UserModalBtnsContainer>
                <UserModalBtn type="submit">
                  <UserModalImage>
                    <use href={`${svg}#icon-check-1`}></use>\
                  </UserModalImage>
                </UserModalBtn>
                <UserModalBtn type="button">
                  <UserModalImage>
                    <use href={`${svg}#icon-close-2-1`}></use>\
                  </UserModalImage>
                </UserModalBtn>
              </UserModalBtnsContainer>
            </UserModalForm>
          )}
        </Formik>
      </UserModalContainer>
    </Backdrop>
  );
};

export default UserModal;
