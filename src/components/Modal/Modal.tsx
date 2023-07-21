import { Formik } from 'formik';
import {
  Backdrop,
  ModalContainer,
  ModalForm,
  ModalField,
  ModalLabel,
} from './Modal.styled';

export default function Modal() {
  return (
    <Backdrop>
      <ModalContainer>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values, { resetForm }) => {}}
        >
          {({ isSubmitting, values }) => (
            <ModalForm>
              <ModalLabel htmlFor="ProfileName">name:</ModalLabel>
              <ModalField type="text" id="ProfileName" name="name" required />

              <ModalLabel>gender:</ModalLabel>
              <ModalField />
              <ModalLabel>birthdate:</ModalLabel>
              <ModalField />
              <ModalLabel htmlFor="City">city:</ModalLabel>
              <ModalField />
            </ModalForm>
          )}
        </Formik>
      </ModalContainer>
    </Backdrop>
  );
}
