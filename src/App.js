import './App.css';
import HomeScreen from './screens/HomeScreen';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import AppNav from './AppNav';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './util/Footer.js';

function App() {
  return (
    //Lets handle all navigation in app nav - we will not need to touch this file until we need to deal with protected routes, but we'll be able to prob do that in appnav
    <Router>
      <div className="App">
        <AppNav />
        <Footer />
      </div>
    </Router>
  );
}

export default App;