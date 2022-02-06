import React from 'react';
import { Link } from 'react-router-dom';
import './stylesheets/Login.css';

const Login = () => {
  return (
    <div className="Main">
      <div>
        <h1 className="Logo">
          <Link to="/">연석이의 채팅 서비스</Link>
        </h1>
        <div>
          <a href="http://localhost:8080/oauth2/authorization/google?redirect_uri=http://localhost:3000/oauth/redirect">
            {' '}
            Sigin in with Google
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
