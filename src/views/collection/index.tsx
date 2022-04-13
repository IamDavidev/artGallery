import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';

import ButtonBack from '../../components/ButtonBack';
import PhotoRandom from '../../components/PhotoRandom';
import SpinnerLoading from '../../components/SpinnerLoading';
import TitleApp from '../../components/TitleApp';
import useApi from '../../lib/hooks/useApi';
import { CollectionPhotosType } from '../../types/types';
import ErrPag from '../Err';
import styles from './collection.module.scss';

const Collection: FC = (): JSX.Element => {
	const { collection } = useParams() || '';

	const title = collection || 'No collection';
	const { data, loading, err } = useApi({
		enpoint: 'search/collections',
		query: collection,
		per_page: 10,
	});

	if (err.status) return <ErrPag msg={err.message} />;

	if (loading) return <SpinnerLoading />;

	return (
		<div className={styles.collection}>
			<div className='renderBtn'>
				<ButtonBack path='back' />
			</div>

			<h1 className={styles.titleCollection}>
				<TitleApp title={title} />
			</h1>

			<section className={styles.containerPhotos}>
				<PhotoRandom />
			</section>

			<section className={styles.containerImgs}>
				{data?.results?.map((item: CollectionPhotosType) => {
					const idImg = item.preview_photos[0].id;

					return (
						<Link to={`/foto/${idImg}`} key={item.id}>
							<img
								loading='lazy'
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
