import { Link } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';

import styles from './navbar.module.scss';

const Navbar = () => {
	return (
		<nav className={styles.containNav}>
			<ul>
				<li>
					<Link to='/'>
						<MdDashboard />
					</Link>
				</li>
				<li>
					<Link to='/'>
						<FaSearch />
					</Link>
				</li>
				<li>
					<Link to='/'>
						<CgProfile />
					</Link>
				</li>
			</ul>
		</nav>
	);
};
export default Navbar;
