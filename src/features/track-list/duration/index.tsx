import { humanizeMS } from '../../../utils/humanizeMS';
import styles from './styles.module.scss';

interface Props {
  item: SpotifyApi.TrackObjectFull;
}
export const Duration: React.FC<Props> = ({ item }) => {
  const time = humanizeMS(item.duration_ms);

  return <span className={styles.text}>{time}</span>;
};
