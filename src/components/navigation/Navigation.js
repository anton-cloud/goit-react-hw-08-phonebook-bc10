import React from "react";
import mainRoutes from "../routes/mainRoutes";
import { NavigationContainer } from "./NavigationStyled";
import UserMenu from "../userMenu/UserMenu";
import NavigationItem from "./NavigationItem";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/authSelectors";


const Navigation = ({routes = mainRoutes}) => {

  const isAuth = useSelector((state) => authSelectors.getToken(state))

  return (
    <NavigationContainer>
      <ul className="navList">
        {routes.map(({name, path, exact, isPrivate, isRestricted}) => (
          <NavigationItem 
          key={path}
          name={name}
          path={path}
          exact={exact}
          isPrivate={isPrivate}
          isRestricted={isRestricted}
          isAuth={isAuth}
          />
        ))}
        {isAuth && (<UserMenu />)}
      </ul>
    </NavigationContainer>
  );
};

export default Navigation;
