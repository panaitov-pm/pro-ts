import Link from '@mui/material/Link';
import { getExternalUrl } from '../../utils/get-external-track-url';
import styles from './styles.module.scss';

interface Props {
    track: SpotifyApi.TrackObjectFull;
}
export const Track: React.FC<Props> = ({ track }) => {
    const [image] = track.album.images;
    return (
        <figure>
            <div className={styles.imageWrap}>
                <img className={styles.image} src={image.url} alt={track.name} />
            </div>
            <h2>
                <Link href={getExternalUrl(track)}>{track.name}</Link>
            </h2>
            <h3>Audio preview:</h3>
            <audio controls src={track.preview_url ?? undefined}></audio>
        </figure>
    );
};
