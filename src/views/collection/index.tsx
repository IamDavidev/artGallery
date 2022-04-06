import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';

import ButtonBack from '../../components/ButtonBack';
import PhotoRandom from '../../components/PhotoRandom';
import TitleApp from '../../components/TitleApp';
import useApi from '../../hooks/useApi';
import styles from './collection.module.scss';

const Collection: FC = () => {
	const { collection } = useParams();

	const { data, loading } = useApi({
		enpoint: 'search/collections',
		query: collection,
		per_page: 10,
	});

	if (loading) return <h1>Loading...</h1>;

	return (
		<div className={styles.collection}>
			<div className='renderBtn'>
				<ButtonBack />
			</div>
			<h1 className={styles.titleCollection}>
				<TitleApp title={collection} />
			</h1>
			<section className={styles.containerPhotos}>
				<PhotoRandom />
			</section>
			<section className={styles.containerImgs}>
				{data?.results?.map((item: any) => {
					const idImg = item.preview_photos[0].id;
					return (
						<Link to={`/foto/${idImg}`} key={item.id}>
							<img
								src={item.preview_photos[0].urls.small}
								alt={item.title}
								className={styles.imgCollection}
							/>
						</Link>
					);
				})}
			</section>
		</div>
	);
};
export default Collection;
