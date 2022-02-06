import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//защищенный роут, дающий доступ к главной форме только при успешной авторизации, иначе скидывает на компонент для повторного входа
const ProtectedRoute = ({ component: Component, ...props }) => {
  return <Route>{() => (props.loggedIn ? <Component {...props} /> : <Redirect to="./sign-in" />)}</Route>;
};

export default ProtectedRoute;
