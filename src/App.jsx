import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import HomePage from './HomePage';
import Instructions from './Instructions';

const App = () => {
	return (
		<Router>
			<div className='App'>
				<Navbar></Navbar>
				<div className='content'>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route
							path='/memory-game/instructions'
							element={<Instructions />}
						/>
					</Routes>
				</div>
			</div>
		</Router>
	);
};

export default App;
