import React from 'react'
import { Redirect, Route } from 'react-router-dom/cjs/react-router-dom.min';

const PublicRoute = ({path, exact, component, isAuth, isRestricted}) => {
  return isAuth && isRestricted ? (
    <Redirect to='/contacts'/>
  ) : (
    <Route path={path} exact={exact} component={component}/>
  );
}

export default PublicRoute;