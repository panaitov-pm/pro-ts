import React, { useCallback, useContext, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useDebouncedCallback } from 'use-debounce';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import { List } from './list';
import { ShopifyContext } from '../../contexts';
import { getTracksBySearch, tracksApi } from '../../api/tracks';

export const TrackList: React.FC = () => {
    const { token } = useContext(ShopifyContext);
    const api = tracksApi(token);
    const [search, setSearch] = useState('');
    const getResult = getTracksBySearch(api);

    const { data, isFetching, refetch } = useQuery(['tracks', { search }], () => getResult(search), {
        enabled: false,
    });

    const debouncedRefetch = useDebouncedCallback(refetch, 500);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
        debouncedRefetch();
    }, []);

    return (
        <Container>
            <TextField fullWidth onChange={handleChange} label="Search tracks" variant="standard" />
            {isFetching ? 'Loading' : search ? <List data={data?.tracks} /> : null}
        </Container>
    );
};
