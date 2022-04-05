import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';

import styles from './buttonBack.module.scss';

const ButtonBack = () => {
	const navigate = useNavigate();

	const navigateBack = () => {
		navigate(-1);
	};

	return (
		<button className={styles.btnBack} onClick={navigateBack}>
			<IoMdArrowRoundBack className={styles.iconBack} />
		</button>
	);
};
export default ButtonBack;
