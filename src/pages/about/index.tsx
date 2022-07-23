import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import { useQuery } from '@tanstack/react-query';
import Container from '@mui/material/Container';
import { ShopifyContext } from '../../contexts';
import { getTracksById, tracksApi } from '../../api/tracks';
import { Track } from '../../features/track';
import styles from './styles.module.scss';

export const About: React.FC = () => {
    const history = useHistory();
    const { id } = useParams<{ id: string | undefined }>();
    const { token } = useContext(ShopifyContext);
    const api = tracksApi(token);
    const getResult = getTracksById(api);

    const { data, isFetching, refetch } = useQuery(['tracks', { id }], () => getResult(id || ''), {
        enabled: false,
    });

    useEffect(() => {
        if (id) refetch();
    }, [id]);

    if (isFetching) return <>Loading</>;

    return (
        <Container>
            <h1 className={styles.title}>
                <span>About</span>{' '}
                <Button variant="contained" onClick={() => history.push('/')}>
                    Go back
                </Button>
            </h1>
            {data ? <Track track={data} /> : 'There is no info, please try again'}
        </Container>
    );
};
