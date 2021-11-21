// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Login/Login/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <div className="App ">
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>} />
          <Route path='/home' element={<Home></Home>} />
          <Route path='/login' element={<Login></Login>} />
          <Route path='/register' element={<Register></Register>} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
