import styles from './modalphoto.module.scss';
import { MdOutlineExpandLess, MdOutlineExpandMore } from 'react-icons/md';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const ModalPhoto = ({ data, contain }: any) => {
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
			<h1 className={styles.modalTitle}>Digital Art</h1>
			<p>
				<span>Artista</span>
				<span>{data.user.name}</span>
			</p>
			<p>
				<span>size</span>
				<span>
					{data.width} x {data.height}
				</span>
			</p>
			<p>
				<span>subida</span>
				<span>{data.created_at.split('T')[0]}</span>
			</p>
			<div className={styles.modalDescription}>
				<p>{data.description}</p>
			</div>
			<section className={styles.modalInfoPhoto}>
				<p>
					<span>Likes</span>
					<span>{data.likes}</span>
				</p>
				<p>
					<span>Views</span>
					<span>{data.views}</span>
				</p>
			</section>
			<section className={styles.modalUser}>
				<Link to='/usuario/'>
					<img src={data.user.profile_image.small} alt={data.user.username} />
					<span>{data.user.username}</span>
				</Link>
				{data.user.bio && <p>{data.user.bio.substring(0, 50) + '...'}</p>}
			</section>
		</div>
	);
};
export default ModalPhoto;
