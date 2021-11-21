// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Login/Login/Home/Home';
import Login from './Pages/Login/Login/Login';

function App() {
  return (
    <div className="App ">
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/home' element={<Home></Home>} />
          <Route path='/login' element={<Login></Login>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
