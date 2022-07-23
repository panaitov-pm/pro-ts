import React from 'react';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import { NavLink } from 'react-router-dom';
import { Duration } from './duration';
import { Artists } from './artists';
import { getExternalUrl } from '../../utils/get-external-track-url';
import styles from './styles.module.scss';

interface Props {
    data?: SpotifyApi.PagingObject<SpotifyApi.TrackObjectFull>;
}

export const List: React.FC<Props> = ({ data }) => {
    if (!data) return null;

    if (data.total === 0) return <>No results</>;

    return (
        <ul className={styles.list}>
            {data.items.map((item) => (
                <Card
                    style={{ backgroundImage: `url(${item.album.images[0].url})` }}
                    className={styles.card}
                    key={item.id}
                    variant="outlined"
                >
                    <div className={styles.content}>
                        <h4 className={styles.title}>
                            <Link href={getExternalUrl(item)} underline="hover" target="_blank">
                                {item.name}
                            </Link>
                            <Duration item={item} />
                        </h4>
                        <h5>
                            <Link href={getExternalUrl(item.album)} underline="hover" target="_blank">
                                Album: {item.album.name}
                            </Link>
                        </h5>
                        <Artists artists={item.artists} />
                        <div className={styles.action}>
                            <NavLink className={styles.link} to={`/about/${item.id}`}>
                                Details &gt;
                            </NavLink>
                        </div>
                    </div>
                </Card>
            ))}
        </ul>
    );
};
