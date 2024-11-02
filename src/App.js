import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Routes/Home';
import HomePage from './Routes/HomePage';
import Services from "./Routes/Services";
import Login from './Routes/Login';
import Signup from "./Routes/Signup";
import OTP from './Routes/OTP';
import { AuthProvider } from './AuthContext/AuthContext';
import Collection from './Routes/Collection';
import AddCollection from './Routes/AddCollection';
import Collection_List from './Routes/Collection_List';

function App() {
  return (
   <div className='  h-screen no-scrollbar DEFAULT-FONT text-white w-full overflow-auto bg-[#000720]  ' >

      <AuthProvider>
          <Routes>

            <Route path='/generate-image' element={<Home/>} />
            <Route path='/' element={<HomePage/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/verifyEmail' element={<OTP/>}/>
            <Route path='/collection/:id' element={<Collection/>} />
            <Route path='/addCollection' element={<AddCollection/>} />
            <Route path='/collectionList' element={<Collection_List/>} />


          </Routes>
      </AuthProvider>
   </div>
  );
}

export default App;
