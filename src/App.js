import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';

function App() {
  return (
   <div className=' h-screen text-white w-full overflow-auto bg-[#000720]  ' >

      <Routes>

          <Route path='/' element={<Home/>} />




      </Routes>
   </div>
  );
}

export default App;
