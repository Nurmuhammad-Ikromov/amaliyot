import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Header } from './components/Header/Header';
import { Cart } from './Pages/Cart/Cart';
import { Home } from './Pages/Home/Home';
import { Products } from './Pages/Products/Products';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/products' element={<Products />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
		</div>
	);
}

export default App;
