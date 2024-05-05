import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Main from './Components/Main';
import { useSelector } from 'react-redux';

function App() {

	const user = useSelector((state) => state.userData);
	
	return (
		<div className="App">
			{!user.data.name ? <Login /> : <Main />}
		</div>
	);
}

export default App;
