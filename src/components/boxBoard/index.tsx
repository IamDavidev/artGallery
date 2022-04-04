import { MdUnfoldMore } from 'react-icons/md';
import { Link } from 'react-router-dom';

import useApi from '../../hooks/useApi';
import styles from './boxboard.module.scss';

interface propsBoxBoard {
	collection: string;
}

const BoxBoard = ({ collection }: propsBoxBoard) => {
	const { data, loading } = useApi({
		enpoint: 'search/collections',
		query: collection,
		per_page: 3,
	});

	if (loading) return <p>Loading...</p>;

	return (
		<article className={styles.boxBoard}>
			<div className={styles.cardPhotos}>
				{data?.results.map((item: any) => {
					const img = item.preview_photos[0].urls.small;
					return (
						<img
							src={img}
							alt={item.title}
							className={styles.boxImg}
							key={item.id}
						/>
					);
				})}
			</div>
			<Link to={`/colleccion/${collection}`} className={styles.cardInfo}>
				<p className={styles.boxTitle}>{collection}</p>
				<MdUnfoldMore />
			</Link>
		</article>
	);
};
export default BoxBoard;
