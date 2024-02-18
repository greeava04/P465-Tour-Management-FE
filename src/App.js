// import './App.css';
// import HomeScreen from './screens/HomeScreen';
// import SignIn from './screens/SignIn'
// import SignUp from './screens/SignUp'
// import AppNav from './AppNav';

// function App() {
//   return (
//     <div className="App">
//       <HomeScreen />
//       <SignIn />
//       <SignUp />
//     </div>
//   );
// }

// export default App;
import './App.css';
import HomeScreen from './screens/HomeScreen';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import AppNav from './AppNav';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <AppNav />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
