import Boards from '../../layouts/Boards';
import styles from './home.module.scss';

const Home = () => {
	return (
		<div className={styles.Home}>
			<div className={styles.headerHome}>
				<h1 className={styles.titleHome}>Art Gallery</h1>
				<p className={styles.textHome}>Bienvenido a una galería de arte.</p>
			</div>
			<Boards />
		</div>
	);
};
export default Home;
