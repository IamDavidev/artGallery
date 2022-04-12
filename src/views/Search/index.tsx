import { SyntheticEvent, useState } from 'react';
import { GrFormSearch } from 'react-icons/gr';
import { Link } from 'react-router-dom';

import ButtonBack from '../../components/ButtonBack';
import SpinnerLoading from '../../components/SpinnerLoading';
import useApi from '../../lib/hooks/useApi';
import styles from './search.module.scss';
import { PhotoTypes } from '../../types/types';

const Searcn = () => {
	const [search, setSearch] = useState('');
	//React.FormEvent<HTMLFormElement>
	const { data, loading } = useApi({
		enpoint: 'search/photos',
		query: search,
		per_page: 10,
	});

	const hadleSearch = (e: SyntheticEvent): void => {
		e.preventDefault();

		const target = e.target as typeof e.target & {
			collection: { value: string };
		};

		const value = target.collection.value;

		setSearch(value);
	};

	if (loading) return <SpinnerLoading />;

	return (
		<div className={styles.search}>
			<div className={styles.renderSearch}>
				<section className={styles.containSearch}>
					<ButtonBack path='back' />
					<h1 className={styles.titleSearch}>Photos</h1>
					<form className={styles.formSearch} onSubmit={hadleSearch}>
						<label>
							<span className={styles.iconFormSearch}>
								<GrFormSearch />
							</span>
							<input
								type='text'
								name='collection'
								className={styles.inputFormSearch}
							/>
						</label>
						<button type='submit' className={styles.btnFormSearch}>
							buscar
						</button>
					</form>
				</section>
				<section className={styles.renderPhotos}>
					{data ? (
						data.results.map((item: PhotoTypes) => {
							return (
								<Link
									to={`/foto/${item.id}`}
									className={styles.linkPhoto}
									key={item.id}>
									<img
										src={item.urls.regular}
										alt={item.alt_description}
										className={styles.imgPhoto}
									/>
								</Link>
							);
						})
					) : (
						<span>No hay resultados</span>
					)}{' '}
				</section>
			</div>
		</div>
	);
};
export default Searcn;
