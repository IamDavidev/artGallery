import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import SpinnerLoading from './components/SpinnerLoading';

const Collection = lazy(() => import('./views/collection'));
const Home = lazy(() => import('./views/home'));
const Photo = lazy(() => import('./views/Photo'));
const User = lazy(() => import('./views/User'));
const Profile = lazy(() => import('./views/Profile'));
const Search = lazy(() => import('./views/Search'));

function App(): JSX.Element {
	return (
		<div className='App'>
			<Suspense fallback={<SpinnerLoading />}>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/colleccion/:collection' element={<Collection />} />
					<Route path='/foto/:id' element={<Photo />} />
					<Route path='/usuario/:user' element={<User />} />
					<Route path='/buscar' element={<Search />} />
					<Route path='/perfil' element={<Profile />} />
				</Routes>
			</Suspense>
		</div>
	);
}

export default App;
