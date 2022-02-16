import React, { Component } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { isAuthenticated } from '.';

const PrivateRoute = ({ children }) => {
  const auth = isAuthenticated();

  return auth ? children : <Navigate to="/signin" />
};

// const PrivateRoute = ({ children }) => (
//   <Route 
//     {...rest}
//     render={props =>
//       isAuthenticated() ? (
//         <Component {...props} />
//       ) : (
//         <Navigate 
//           to={{
//             pathname: "/signin",
//             state: { from: props.location }
//           }}
//         />
//       )
//     }
//   />
// );



export default PrivateRoute;
