import styles from './modalphoto.module.scss';
import { MdOutlineExpandLess } from 'react-icons/md';
const ModalPhoto = (props: any) => {
	console.log(props);
	return (
		<div className={styles.containerModal}>
			<h1 className={styles.title}>Digital Art</h1>
			<p>
				<span>Artista</span>
				<span>{props.user.name}</span>
			</p>
			<p>
				<span>size</span>
				<span>
					{props.width} x {props.height}
				</span>
			</p>
			<p>
				<span>subida</span>
				<span>{props.created_at.split('T')[0]}</span>
			</p>
			<div className={styles.modalDescription}>
				<p>{props.description}</p>
			</div>
			<section className={styles.modalInfoPhoto}>
				<p>
					<span>Likes</span>
					<span>{props.likes}</span>
				</p>
				<p>
					<span>Views</span>
					<span>{props.views}</span>
				</p>
			</section>
			<section className={styles.modalUser}>
				<picture>
					<img src={props.user.profile_image.small} alt={props.user.username} />
					<span>{props.user.username}</span>
				</picture>
				{props.user.bio && <p>{props.user.bio.substring(0, 50) + '...'}</p>}
			</section>
		</div>
	);
};
export default ModalPhoto;
