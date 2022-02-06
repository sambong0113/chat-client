/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuthed } from './hooks';

export const AuthedRoute = ({ component: Component, ...rest }) => {
  const isAuthed = useAuthed();
  return (
    <Route
      render={props => {
        if (isAuthed) {
          return <Component {...rest} {...props} />;
        }
        return (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        );
      }}
    />
  );
};

export const UnAuthedRoute = ({ component: Component, ...rest }) => {
  const isAuthed = useAuthed();
  return (
    <Route
      {...rest}
      render={props => {
        if (isAuthed) {
          if (rest.path === '/login') {
            alert('이미 로그인이 되어있습니다.');
            return (
              <Redirect
                to={{ pathname: '/', state: { from: props.location } }}
              />
            );
          }
        }
        return <Component {...props} />;
      }}
    />
  );
};
