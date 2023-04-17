// import { useDispatch } from 'react-redux';
// import { logOut } from 'redux/auth/operations';
// import { useAuth } from 'hooks';
// import css from './UserMenu.module.css';

import { MenuWrapper, UserName } from "./UserMenu.styled";

export const UserMenu = () => {
//   const dispatch = useDispatch();
//   const { user } = useAuth();

  return (
    <MenuWrapper>
      <UserName>Welcome, user</UserName>
      <button type="button">
        Logout
      </button>
    </MenuWrapper>
  );
};