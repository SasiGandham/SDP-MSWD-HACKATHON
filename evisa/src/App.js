import './App.css';
import {Routes, Route} from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Footer from './components/Footer';
import CustomRoutes from './components/CustomRoutes';
import Sidebar  from './components/Sidebar';

function App({store}) {
  return (
    < div className='App'>
      <Routes>
      <Route exact path='/' element={<Home/>}/>
        <Route exact path='/Login' element={<Login store={store}/>}/>
      </Routes> 
      {/* <Footer/> */}
      {/* <Sidebar/> */}
      <CustomRoutes/>
  </div>
  );
}

export default App;
