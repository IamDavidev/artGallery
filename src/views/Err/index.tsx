import { propsErr } from '../../types/types';
import styles from './err.module.scss';

const ErrPag = ({ msg }: propsErr): JSX.Element => {
	return (
		<div className={styles.renderPageErr}>
			<h1>{msg}</h1>
		</div>
	);
};
export default ErrPag;
// fklajsdlfj
