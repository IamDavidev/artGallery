import { Link, useParams } from 'react-router-dom';
import useApi from '../../hooks/useApi';

import styles from './user.module.scss';
const User = () => {
	const { user } = useParams();
	const { data, loading } = useApi({
		enpoint: `/users/${user}`,
	});
	console.log(data);
	if (loading) return <h1>Cargando...</h1>;
	return (
		<div className={styles.containUser}>
			<picture className={styles.containImgUser}>
				<img
					src={data.profile_image.large}
					alt=''
					className={styles.imgContainUser}
				/>
			</picture>
			<div className={styles.cardUser}>
				<h1 className={styles.titleCardUser}>{data.name}</h1>
				<h2 className={styles.profileCardUser}>{data.username}</h2>
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
				<section className={styles.photosCardUser}>
					{data.photos.map((photo: any) => {
						return (
							<Link to={'/'} key={photo.id} className={styles.photoCardUser}>
								<img
									src={photo.urls.small}
									alt=''
									className={styles.imgCardUser}
								/>
							</Link>
						);
					})}
				</section>
			</div>
		</div>
	);
};
export default User;
