import { useEffect, useState } from 'react';
import { getReturnedParamsFromSpotifyAuth } from './helpers';

export const useToken = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    if (window.location.hash) {
      //eslint-disable-next-line @typescript-eslint/naming-convention
      const { access_token, expires_in, token_type } = getReturnedParamsFromSpotifyAuth(window.location.hash);

      localStorage.clear();

      localStorage.setItem('accessToken', access_token);
      localStorage.setItem('tokenType', token_type);
      localStorage.setItem('expiresIn', expires_in);

      setToken(access_token);
    }
  }, []);

  return token;
};
