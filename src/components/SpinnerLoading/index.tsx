import styles from './spinner.module.scss';
const SpinnerLoading = () => {
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
