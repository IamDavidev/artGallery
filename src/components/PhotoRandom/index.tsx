import { Link } from 'react-router-dom';
import useApi from '../../lib/hooks/useApi';
import { PhotoTypes } from '../../types/types';
import SpinnerLoading from '../SpinnerLoading';
import styles from './photorandom.module.scss';

const PhotoRandom = ({}) => {
	const { data, loading } = useApi({
		enpoint: 'photos/random',
		count: 10,
	});

	if (loading) return <SpinnerLoading />;

	return (
		<>
			{data?.map((item: PhotoTypes) => {
				console.log(item.user);
				return (
					<Link
						to={`/foto/${item.id}`}
						key={item.id}
						className={styles.photoRandom}>
						<img
							src={item.urls.small}
							alt={item.alt_description}
							className={styles.imgPhotoRandom}
						/>
						<p className={styles.titlePhotoRandom}>
							{item.user.first_name || 'no name'}
						</p>
					</Link>
				);
			})}
		</>
	);
};
export default PhotoRandom;
