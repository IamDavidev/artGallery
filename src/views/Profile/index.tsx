import { FC } from 'react';
import Login from '../../layouts/Login';
import Navbar from '../../layouts/Navbar';

const Profile: FC = (): JSX.Element => {
	const logged = false;
	return (
		<div>
			<Navbar />
			{!logged ? <Login /> : <p>logged </p>}
		</div>
	);
};
export default Profile;
