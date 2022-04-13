import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';

import ButtonBack from '../../components/ButtonBack';
import SpinnerLoading from '../../components/SpinnerLoading';
import useApi from '../../lib/hooks/useApi';
import { PhotoTypes } from '../../types/types';
import ErrPag from '../Err';
import styles from './user.module.scss';

const User: FC = (): JSX.Element => {
	const { user } = useParams();
	const { data, loading, err } = useApi({
		enpoint: `/users/${user}`,
	});

	if (err.status) return <ErrPag msg={err.message} />;

	if (loading) return <SpinnerLoading />;

	return (
		<div className={styles.containUser}>
			<ButtonBack path='/' />

			<picture className={styles.containImgUser}>
				<img
					src={data.profile_image.large}
					alt={data.name}
					className={styles.imgContainUser}
				/>
			</picture>

			<div className={styles.cardUser}>
				<h1 className={styles.titleCardUser}>{data.name}</h1>
				<h2 className={styles.profileCardUser}>@{data.username}</h2>
				<section className={styles.infoCardUser}>
					<p>
						<strong>Likes</strong>
						<span>{data.total_likes}</span>
					</p>
					<p>
						<strong>Photos</strong>
						<span>{data.total_photos}</span>
					</p>
					<p>
						<strong>Seguidores</strong>
						<span>{data.followers_count}</span>
					</p>
				</section>

				<section className={styles.descriptionCardUser}>
					<p>{data.bio}</p>
				</section>

				<picture className={styles.photosCardUser}>
					{data.photos.map((photo: PhotoTypes) => {
						return (
							<Link
								to={`/foto/${photo.id}`}
								key={photo.id}
								className={styles.photoCard}>
								<img
									loading='lazy'
									src={photo.urls.small}
									alt={photo.alt_description}
									className={styles.imgCardUser}
								/>
							</Link>
						);
					})}
				</picture>
			</div>
		</div>
	);
};
export default User;
