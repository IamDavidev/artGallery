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
					<picture key={item.id} className={styles.photoRandom}>
						<img
							src={item.urls.small}
							alt={item.alt_description}
							className={styles.imgPhotoRandom}
						/>
						<p className={styles.titlePhotoRandom}>{item.user.first_name}</p>
					</picture>
				);
			})}
		</>
	);
};
export default PhotoRandom;
