import { useState } from 'react';
import jwt from 'jsonwebtoken';

export const useAuthed = () => {
  const [authed] = useState(() => {
    try {
      const token = localStorage.getItem('token');

      const key = process.env.REACT_APP_JWT_SECRET;
      const res = jwt.verify(token, key);

      return res;
    } catch (err) {
      return false;
    }
  });

  return authed;
};
