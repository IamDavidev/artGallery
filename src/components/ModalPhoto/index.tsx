import styles from './modalphoto.module.scss';
import { MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { InfoPhotoType } from '../../types/types';
const ModalPhoto = ({
	user,
	width,
	height,
	createdAt,
	description,
	likes,
	views,
	contain,
}: InfoPhotoType) => {
	const [modalState, setModalState] = useState(false);
	const viweModal = () => {
		setModalState(!modalState);
	};

	return (
		<div
			className={`${styles.containerModal} ${
				modalState || contain ? styles.modalActive : styles.modalInactive
			}`}>
			<button
				className={`${styles.modalBtn} ${contain ? styles.btnNone : ''}`}
				onClick={viweModal}>
				{modalState ? <MdOutlineExpandMore /> : <MdOutlineExpandLess />}
			</button>
			<h1 className={styles.modalTitle}>Arte Digital</h1>
			<p>
				<span>Artista</span>
				<span>{user.name}</span>
			</p>
			<p>
				<span>size</span>
				<span>
					{width} x {height}
				</span>
			</p>
			<p>
				<span>subida</span>
				<span>{createdAt.split('T')[0]}</span>
			</p>
			<div className={styles.modalDescription}>
				<p>{description && description?.substring(0, 50) + '...'}</p>
			</div>
			<section className={styles.modalInfoPhoto}>
				<p>
					<span>Likes</span>
					<span>{likes}</span>
				</p>
				<p>
					<span>Views</span>
					<span>{views}</span>
				</p>
			</section>
			<section className={styles.modalUser}>
				<Link to={`/usuario/${user.username}`} className={styles.modalCardUser}>
					<img src={user.profile_image.small} alt={user.username} />
					<span>{user.username}</span>
				</Link>
			</section>
		</div>
	);
};
export default ModalPhoto;
