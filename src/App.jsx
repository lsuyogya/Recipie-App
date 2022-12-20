import Form from './components/SearchForm';
import { RouterProvider } from 'react-router';
// import RandomPage from './components/RandomPage';
import Router from './features/routing/Router';
import './styles/app.scss';
import ScrollToTop from 'react-scroll-to-top';

function App() {
	return (
		<div className='App'>
			<ScrollToTop
				smooth
				style={{ padding: '0', backgroundColor: '#74e42e' }}
			/>
			<Router />
		</div>
	);
}

export default App;
