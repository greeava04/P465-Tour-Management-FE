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
<<<<<<< HEAD
    <>
      <HomeScreen />
    </>

=======
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
>>>>>>> 9113b45e74e31cb31838e9fcfdab0611fe96f213
  );
}

export default App;
