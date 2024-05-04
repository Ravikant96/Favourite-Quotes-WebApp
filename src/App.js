import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Header from './Components/Header'
import { useSelector } from 'react-redux';

function App() {

	const user = useSelector((state) => state.userData);
	
	return (
		<div className="App">
			{user.data.name ? <Login /> : <Header />}
		</div>
	);
}

export default App;
