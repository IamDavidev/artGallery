import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';

import styles from './buttonBack.module.scss';

const ButtonBack = ({ path }: { path: string }) => {
	const navigate = useNavigate();

	const navigateBack = () => {
		if (path === 'back') return navigate(-1);
		navigate(path);
	};

	return (
		<button className={styles.btnBack} onClick={navigateBack}>
			<IoMdArrowRoundBack className={styles.iconBack} />
		</button>
	);
};
export default ButtonBack;
