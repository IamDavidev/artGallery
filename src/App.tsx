import { Route, Routes } from 'react-router-dom';
import Collection from './views/collection';
import Home from './views/home';

function App() {
	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/colleccion/:collection' element={<Collection />} />
			</Routes>
		</div>
	);
}

export default App;
