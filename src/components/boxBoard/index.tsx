import { MdUnfoldMore } from 'react-icons/md';
import { Link } from 'react-router-dom';

import useApi from '../../lib/hooks/useApi';
import TitleApp from '../TitleApp';
import styles from './boxboard.module.scss';
import SpinnerLoading from '../SpinnerLoading';
import { CollectionPhotosType } from '../../types/types';

interface propsBoxBoard {
	collection: string;
}

const BoxBoard = ({ collection }: propsBoxBoard) => {
	const { data, loading } = useApi({
		enpoint: 'search/collections',
		query: collection,
		per_page: 3,
	});

	if (loading) return <SpinnerLoading />;

	return (
		<article className={styles.boxBoard}>
			<div className={styles.cardPhotos}>
				{data?.results.map((item: CollectionPhotosType) => {
					const img = item.preview_photos[0].urls.small;
					return (
						<Link
							to={`/foto/${item.preview_photos[0].id}`}
							className={styles.cardBox}
							key={item.id}>
							<img src={img} alt={item.title} className={styles.cardBoxImg} />
						</Link>
					);
				})}
			</div>
			<Link to={`/colleccion/${collection}`} className={styles.cardInfo}>
				<TitleApp title={collection} />
				<span className={styles.spanInfo}>
					<MdUnfoldMore />
				</span>
			</Link>
		</article>
	);
};
export default BoxBoard;
