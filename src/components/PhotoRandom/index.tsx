import { Link } from 'react-router-dom';
import useApi from '../../hooks/useApi';
import styles from './photorandom.module.scss';

const PhotoRandom = ({}) => {
	const { data, loading } = useApi({
		enpoint: 'photos/random',
		count: 10,
	});

	if (loading) return <h1>Loading...</h1>;

	return (
		<>
			{data?.map((item: any) => {
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
						<p className={styles.titlePhotoRandom}>{item.user.first_name}</p>
					</Link>
				);
			})}
		</>
	);
};
export default PhotoRandom;
