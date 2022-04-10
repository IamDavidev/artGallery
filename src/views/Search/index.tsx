import { useState } from 'react';
import { GrFormSearch } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import SpinnerLoading from '../../components/SpinnerLoading';
import useApi from '../../hooks/useApi';

import Navbar from '../../layouts/Navbar';
import styles from './search.module.scss';

const Searcn = () => {
	const [search, setSearch] = useState('');
	//React.FormEvent<HTMLFormElement>
	const { data, loading } = useApi({
		enpoint: 'search/photos',
		query: search,
		per_page: 10,
	});

	const hadleSearch = (e: any) => {
		e.preventDefault();
		const value: any = e.target[0].value;
		setSearch(value);
	};

	if (loading) return <SpinnerLoading />;
	console.log(data?.results);

	return (
		<div className={styles.search}>
			<section className={styles.containSearch}>
				<h1 className={styles.titleSearch}>Photos</h1>
				<form className={styles.formSearch} onSubmit={hadleSearch}>
					<label>
						<span className={styles.iconFormSearch}>
							<GrFormSearch />
						</span>
						<input type='text' className={styles.inputFormSearch} />
					</label>
					<button type='submit' className={styles.btnFormSearch}>
						buscar
					</button>
				</form>
			</section>
			<section className={styles.renderPhotos}>
				{data ? (
					data.results.map((item: any) => {
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

			<Navbar />
		</div>
	);
};
export default Searcn;
