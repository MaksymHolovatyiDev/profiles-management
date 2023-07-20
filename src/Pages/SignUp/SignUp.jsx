import { Formik } from 'formik';
import {
  UserFormTitle,
  UserForm,
  UserFormField,
  UserFormLabel,
  UserFormButton,
} from '../../components/UserFrom/UserFrom.styled';
import {
  SignUpContainer,
  AdminCheckbox,
  AdminCheckboxLabel,
  AdminCheckboxContainer,
} from './SignUp.styled';

export default function SignIn() {
  return (
    <SignUpContainer>
      <UserFormTitle>Create your account</UserFormTitle>
      <Formik initialValues={{ email: '', password: '' }} onSubmit>
        {({ isSubmiting, values }) => (
          <UserForm>
            <UserFormLabel htmlFor="Username">Username</UserFormLabel>
            <UserFormField type="text" id="Username" name="name" required />
            <UserFormLabel htmlFor="UserEmail">Email</UserFormLabel>

            <UserFormField type="email" id="UserEmail" name="email" required />
            <UserFormLabel htmlFor="UserPassword">Password</UserFormLabel>
            <UserFormField
              type="password"
              id="UserPassword"
              name="password"
              required
            />

            <AdminCheckboxContainer>
              <AdminCheckbox
                style={{ margin: 0 }}
                type="checkbox"
                id="isAdmin"
                name="admin"
              />
              <AdminCheckboxLabel htmlFor="isAdmin">
                is admin
              </AdminCheckboxLabel>
            </AdminCheckboxContainer>

            <UserFormButton style={{ marginTop: '90px' }} type="submit">
              Sign Up
            </UserFormButton>
          </UserForm>
        )}
      </Formik>
      <UserFormButton>Sign In</UserFormButton>
    </SignUpContainer>
  );
}
