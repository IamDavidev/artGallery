import { useParams } from 'react-router-dom';
import ButtonBack from '../../components/ButtonBack';

import ModalPhoto from '../../components/ModalPhoto';
import useApi from '../../hooks/useApi';

import styles from './photo.module.scss';

const Photo = () => {
	const { id } = useParams();
	const { data, loading } = useApi({
		enpoint: `/photos/${id}`,
	});

	if (loading) return <p>Loading...</p>;

	return (
		<>
			<div className='renderImg'>
				<picture className={styles.containerPhoto}>
					<ButtonBack />
					<img src={data.urls.small} alt='' className={styles.photoImg} />
				</picture>
			</div>
			<div className={styles.containerModal}>
				<ModalPhoto {...data} />
			</div>
		</>
	);
};
export default Photo;
