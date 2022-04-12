import { MdPassword, MdEmail } from 'react-icons/md';

import styles from './login.module.scss';

const Login = () => {
	return (
		<section className={styles.Login}>
			<header className={styles.headerLogin}>
				<h1 className={styles.titleHeaderLogin}>iniciar sesión</h1>
			</header>

			<div className={styles.containForm}>
				<form
					className={styles.formLogin}
					onSubmit={(e: any) => {
						e.preventDefault();
					}}>
					<label className=''>
						<MdEmail />
						<input type='text' name='email' placeholder='correo' />
					</label>
					<label>
						<MdPassword />
						<input type='password' name='password' placeholder='*****' />
					</label>
					<div className={styles.optionsFormLogin}>
						<div>
							<input type='checkbox' />
							<span>Recordarme</span>
						</div>
						<a href='#'>¿Olvidaste tu contraseña?</a>
					</div>
					<button className={styles.btnFormLogin}>iniciar sesión</button>
				</form>
			</div>
		</section>
	);
};
export default Login;
