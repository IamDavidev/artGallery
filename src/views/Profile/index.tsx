import { useState } from 'react';
import Login from '../../layouts/Login';
import Navbar from '../../layouts/Navbar';

const Profile = () => {
	const [logged, setLogged] = useState(false);
	return (
		<div>
			{!logged ? <Login /> : <p>logged </p>}
			<Navbar />
		</div>
	);
};
export default Profile;
