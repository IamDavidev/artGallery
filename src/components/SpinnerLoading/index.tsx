import { FC } from 'react';
import styles from './spinner.module.scss';
const SpinnerLoading: FC = (): JSX.Element => {
	return (
		<div className={styles.ldsRing}>
			<div></div>
			<div></div>
			<div></div>
			<div></div>
		</div>
	);
};
export default SpinnerLoading;
