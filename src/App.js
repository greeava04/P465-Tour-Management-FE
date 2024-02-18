import './App.css';
import HomeScreen from './screens/HomeScreen';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import AppNav from './AppNav';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="">
        <AppNav />
      </div>
    </Router>
  );
}

export default App;
