import React, {Suspense} from "react";
import { useSelector } from "react-redux";
import { Switch } from "react-router-dom";
import mainRoutes from "../routes/mainRoutes";
import PrivateRoute from "../routes/PrivateRoute";
import PublicRoute from "../routes/PublicRoute";
import { MainContainer } from "./MainStyled";

const Main = () => {
  const isAuth = useSelector((state) => state.auth.token)
  return (
    <MainContainer>
      <Suspense fallback={<h2>...Loading</h2>}>
      <Switch>
        {mainRoutes.map(({path, exact, component, isPrivate, isRestricted}) => (
          isPrivate ? (<PrivateRoute
          path={path}
          exact={exact}
          component={component}
          isAuth={isAuth}
          key={path}
          />) : 
          (<PublicRoute
            path={path}
            exact={exact}
            component={component}
            isAuth={isAuth}
            isRestricted={isRestricted}
            key={path}
          />)
        ))}
      </Switch>
      </Suspense>
    </MainContainer>
  );
};

export default Main;
