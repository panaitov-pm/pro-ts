import React, { useContext } from 'react';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import { AUTH_ENDPOINT, CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE } from '../../api/config';
import { ShopifyContext } from '../../contexts';
import { TrackList } from '../../features/track-list';
import styles from './styles.module.scss';

const logInUrl = `${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&&show_dialog=true`;

export const Home: React.FC = () => {
    const { token } = useContext(ShopifyContext);

    return (
        <>
            <h1>Spotify searching</h1>
            <Divider />
            <br />
            {token ? (
                <TrackList />
            ) : (
                <div className={styles.action}>
                    <Button href={logInUrl} variant="contained">
                        Login to Spotify
                    </Button>
                </div>
            )}
        </>
    );
};
