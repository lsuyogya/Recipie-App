import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	Routes,
	RouterProvider,
} from 'react-router-dom';
import Layout from '../../components/Layout';
import RandomPage from '../../components/RandomPage';

const Router = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<>
				<Route path='/' element=<Layout />>
					<Route path='/random' element=<RandomPage /> />
				</Route>
			</>
		)
	);

	return <RouterProvider router={router} />;
};

export default Router;
