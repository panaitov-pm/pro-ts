import React from 'react';
import Link from '@mui/material/Link';
import { getExternalUrl } from '../../../utils/get-external-track-url';
import styles from './styles.module.scss';

interface Props {
    artists: SpotifyApi.ArtistObjectSimplified[];
}

export const Artists: React.FC<Props> = ({ artists }) => {
    return (
        <>
            <h5>Artists:</h5>
            <ul className={styles.list}>
                {artists.map((artist) => (
                    <li key={artist.id}>
                        <Link href={getExternalUrl(artist)} underline="hover" target="_blank">
                            {artist.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};
