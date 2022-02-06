import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import qs from 'qs';
import './stylesheets/Login.css';

const LoginRedirect = ({ location }) => {
  const history = useHistory();

  useEffect(() => {
    const { token } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });

    localStorage.setItem('token', token);

    history.replace('/');
  });

  return null;
};

export default LoginRedirect;
