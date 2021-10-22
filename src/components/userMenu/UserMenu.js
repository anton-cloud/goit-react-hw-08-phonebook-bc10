import React from "react";
import { useSelector, useDispatch } from "react-redux";
import authOperation from "../../redux/auth/authOperation";
import authSelectors from "../../redux/auth/authSelectors";
import { UserMenuStyled } from "./UserMenuStyled";

const UserMenu = () => {
  const userName = useSelector((state) => authSelectors.getUserName(state));
  const dispatch = useDispatch();

  const onHandleClick = () => {
    dispatch(authOperation.logOutOperation())
  };
  return (
    <UserMenuStyled>
      {userName && <p className = 'userMenuText'>Welcome, {userName}</p>}
      <button type="button" className = 'userMenuBtn' onClick={onHandleClick}>
        log out
      </button>
    </UserMenuStyled>
  );
};

export default UserMenu;
