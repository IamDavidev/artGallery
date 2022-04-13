import { FC } from 'react';
import BoxBoard from '../../components/boxBoard';
import styles from './boards.module.scss';

const Boards: FC = (): JSX.Element => {
	return (
		<div className={styles.renderBoxs}>
			<BoxBoard collection='natural' />
			<BoxBoard collection='noche' />
			<BoxBoard collection='reading' />
			<BoxBoard collection='dibujos' />
			<BoxBoard collection='gatos' />
		</div>
	);
};
export default Boards;
