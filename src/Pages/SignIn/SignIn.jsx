import { Formik } from 'formik';
import {
  UserFormTitle,
  UserForm,
  UserFormField,
  UserFormLabel,
  UserFormButton,
} from '../../components/UserFrom/UserFrom.styled';
import { SignInContainer } from './SignIn.styled';

export default function SignIn() {
  return (
    <SignInContainer>
      <UserFormTitle>Sign in</UserFormTitle>
      <Formik initialValues={{ email: '', password: '' }} onSubmit>
        {({ isSubmiting, values }) => (
          <UserForm>
            <UserFormLabel htmlFor="UserEmail">Email</UserFormLabel>
            <UserFormField type="email" id="UserEmail" name="email" required />
            <UserFormLabel htmlFor="UserPassword">Password</UserFormLabel>
            <UserFormField
              type="password"
              id="UserPassword"
              name="password"
              required
            />
            <UserFormButton style={{ marginTop: '90px' }} type="submit">
              Sign In
            </UserFormButton>
          </UserForm>
        )}
      </Formik>
      <UserFormButton>Sign Up</UserFormButton>
    </SignInContainer>
  );
}
