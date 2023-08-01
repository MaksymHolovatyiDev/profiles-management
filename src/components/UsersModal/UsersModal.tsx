import 'react-datepicker/dist/react-datepicker.css';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  UserModalContainer,
  UserModalForm,
  UserModalField,
  UserModalLabel,
  RadioWrapper,
  RadioContainer,
  RadioLabel,
  RadioInput,
  CustomRadio,
} from 'components/UsersModal/UsersModal.styled';
import { getUserId } from 'Redux/user/userSelectors';
import { resetUser } from 'Redux/currentUser/currentUserSlice';
import { useUpdateUserMutation } from 'Redux/services/backendAPI';
import { UpdateUser } from 'components/Types/Types';
import { changeMainUserData, logOut } from 'Redux/user/userSlice';
import { PathRoutes } from 'environment/routes';
import ModalBtns from 'components/ModalBtns/ModalBtns';

const UserModal: React.FC<any> = ({ data }) => {
  const {
    initialState: { name, email, role },
    _id,
    showModal,
  } = data;
  const [trigger, { isLoading }] = useUpdateUserMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mainUserId = useSelector(getUserId);

  const onSubmit = async (values: UpdateUser) => {
    if (!isLoading) {
      const { name, email, admin } = values;
      await trigger({
        _id,
        body: { name, email, admin: admin === 'admin' },
      });

      if (_id === mainUserId) {
        dispatch(
          changeMainUserData({
            name,
            admin: admin === 'admin',
          })
        );
        if (admin === 'user') {
          dispatch(resetUser());
          dispatch(logOut());
          navigate(PathRoutes.RouteDefault);
          localStorage.removeItem('user');
          document!.body!.style!.overflow = 'auto';
        }
      }

      showModal(false);
    }
  };

  return (
    <UserModalContainer>
      <Formik
        initialValues={{
          name,
          email,
          admin: role === 'admin' ? 'admin' : 'user',
        }}
        onSubmit={onSubmit}
      >
        {() => (
          <UserModalForm>
            <UserModalLabel>
              user name:
              <UserModalField type="text" name="name" required />
            </UserModalLabel>

            <UserModalLabel>
              email:
              <UserModalField type="email" name="email" required />
            </UserModalLabel>

            <RadioWrapper>
              <UserModalLabel>role:</UserModalLabel>
              <RadioContainer>
                <RadioLabel>
                  <RadioInput type="radio" name="admin" value="user" />
                  <CustomRadio />
                  user
                </RadioLabel>
                <RadioLabel>
                  <RadioInput type="radio" name="admin" value="admin" />
                  <CustomRadio />
                  admin
                </RadioLabel>
              </RadioContainer>
            </RadioWrapper>

            <ModalBtns showModal={showModal} />
          </UserModalForm>
        )}
      </Formik>
    </UserModalContainer>
  );
};

export default UserModal;
