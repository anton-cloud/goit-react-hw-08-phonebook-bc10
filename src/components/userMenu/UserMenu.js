import React from "react";
import { Button } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import authOperation from "../../redux/auth/authOperation";
import authSelectors from "../../redux/auth/authSelectors";
import { UserMenuStyled } from "./UserMenuStyled";

const UserMenu = () => {
  const userName = useSelector((state) => authSelectors.getUserName(state));
  const dispatch = useDispatch();

  const onHandleClick = () => {
    dispatch(authOperation.logOutOperation());
  };
  return (
    <UserMenuStyled>
      {userName && (
        <>
          <img
            src="https://icon-library.com/images/avatar-icon-png/avatar-icon-png-12.jpg"
            alt="userPhoto"
          />
          <p className="userMenuText">{userName}</p>
        </>
      )}

      <Button variant="light" type="button" onClick={onHandleClick}>
        logOut
      </Button>
    </UserMenuStyled>
  );
};

export default UserMenu;
