
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
// import css from './UserMenu.module.css';

import { MenuWrapper, UserName } from "./UserMenu.styled";
import { useAuth } from "hooks/useAuth";
import { useDispatch } from 'react-redux';
import { logOut } from "redux/auth/authOperarions";

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () =>  dispatch(logOut())


  return (
    <MenuWrapper>
      <UserName>Welcome, {user.name}</UserName>
      <button type="button"  onClick={ handleLogout }>
        Logout
      </button>
    </MenuWrapper>
  );
};