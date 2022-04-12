import { GrCloudDownload } from 'react-icons/gr';
import { useParams } from 'react-router-dom';

import ButtonBack from '../../components/ButtonBack';
import ModalPhoto from '../../components/ModalPhoto';
import SpinnerLoading from '../../components/SpinnerLoading';
import useApi from '../../lib/hooks/useApi';
import styles from './photo.module.scss';

const Photo = () => {
	const { id } = useParams();

	const { data, loading } = useApi({
		enpoint: `/photos/${id}`,
	});

	const isImgContain = data.width > data.height;

	if (loading) return <SpinnerLoading />;

	return (
		<div className={styles.containViewFoto}>
			<div className='renderImg'>
				<picture className={styles.containerPhoto}>
					<div className={styles.optionsPhoto}>
						<ButtonBack path='back' />
						<a href={data.links.download} target='_blank'>
							<GrCloudDownload />
						</a>
					</div>
					<img
						src={data.urls.small}
						alt=''
						className={`${isImgContain ? styles.imgContain : styles.imgFit}`}
					/>
				</picture>
			</div>
			<div className={styles.containerModal}>
				<ModalPhoto
					user={data.user}
					width={data.width}
					height={data.height}
					createdAt={data.created_at}
					likes={data.likes}
					views={data.views}
					contain={isImgContain}
					description={data?.description}
				/>
			</div>
		</div>
	);
};
export default Photo;
