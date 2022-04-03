import { collectionthemes } from '../../helpers/helpersCollections';
import useApi from '../../hooks/useApi';
import useNumRandom from '../../hooks/useNumRandom';

import styles from './photoRandom.module.scss';

const PhotosRandom = () => {
	const { data } = useApi({
		enpoint: '/search/collections',
		query: collectionthemes[useNumRandom()],
		per_page: 10,
	});
	console.log(data);
	return (
		<>
			{data?.results?.map((item: any) => {
				return (
					<article className={styles.cardPhotoRandom} key={item.id}>
						<picture className={styles.picutreCard}>
							<img
								src={item.preview_photos[0].urls.small}
								alt={item.title}
								className={styles.imgRandom}
							/>
						</picture>
						<p className={styles.title}>{item.user.name}</p>
					</article>
				);
			})}
		</>
	);
};
export default PhotosRandom;
