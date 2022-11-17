import Form from './components/SearchForm';
import { RouterProvider } from 'react-router';
// import RandomPage from './components/RandomPage';
import Router from './features/routing/Router';
import './styles/app.scss';

function App() {
	return (
		<div className='App'>
			<Router></Router>
		</div>
	);
}

export default App;
