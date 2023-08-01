import 'react-datepicker/dist/react-datepicker.css';
import { Formik } from 'formik';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import svg from 'Images/symbol-defs.svg';
import {
  Backdrop,
  UserModalContainer,
  UserModalForm,
  UserModalField,
  UserModalLabel,
  RadioWrapper,
  RadioContainer,
  RadioLabel,
  RadioInput,
  CustomRadio,
  UserModalBtnsContainer,
  UserModalBtn,
  UserModalImage,
} from 'components/UsersModal/UsersModal.styled';
import { getUserId } from 'Redux/user/userSelectors';
import { resetUser } from 'Redux/currentUser/currentUserSlice';
import { useUpdateUserMutation } from 'Redux/services/backendAPI';
import { UpdateUser } from 'components/Types/Types';
import { changeMainUserData, logOut } from 'Redux/user/userSlice';
import { PathRoutes } from 'environment/routes';

const UserModal: React.FC<any> = ({ name, email, role, _id, showModal }) => {
  const [trigger, { isLoading }] = useUpdateUserMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const mainUserId = useSelector(getUserId);

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

  const closeModal = () => {
    showModal(false);
  };

  return (
    <Backdrop>
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

              <UserModalBtnsContainer>
                <UserModalBtn type="submit">
                  <UserModalImage>
                    <use href={`${svg}#icon-check-1`}></use>\
                  </UserModalImage>
                </UserModalBtn>
                <UserModalBtn type="button" onClick={closeModal}>
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
