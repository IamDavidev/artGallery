import { Route, Routes } from 'react-router-dom';
import Collection from './views/collection';
import Home from './views/home';
import Photo from './views/Photo';
import User from './views/User';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/colleccion/:collection' element={<Collection />} />
				<Route path='/foto/:id' element={<Photo />} />
				<Route path='/usuario/:user' element={<User />} />
			</Routes>
		</div>
	);
}

export default App;
