
import './App.css';
import Signup from './components/signup';

import Aboutus from './pages/Aboutus';
import Home from './pages/home';
import Signin from './components/signin';
import Contactus from './pages/contactus';
import FriendList from './pages/friendlist';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './pages/navbar';
import Middle from './pages/middle';
import Layout from './components/layout';
import Test from './pages/test';
import Front from './pages/Front';
import Practice from './components/Practice';
// import Allhooks from './components/Allhooks';
// import CompB from './components/CompB';

function App() {
  return(
  <>
  <BrowserRouter>
 <Layout>
 
  <Routes >
    
   {/* <Route path="/practice" element={<Practice/>}></Route> */}
  <Route path="/" element={<Signin />}/>
    <Route path="/front" element={<Front />}/>
    <Route path="/signup" element={<Signup />}/>
    <Route path="/signin" element={<Signin />}/>
    <Route path="/contact" element={<Contactus />}/>
    <Route path="/test" element={<Test />}/>
    <Route path="/aboutus" element={<Aboutus />}/>
    <Route path="/friendlist" element={<FriendList />}/>
    <Route path="/middle" element={<Middle />}/>
    {/* {/* <Route path="/allhooks" element={<Allhooks />}/>
    <Route path="/compb" element={<CompB />}/> */} 
  </Routes>
  </Layout>
  </BrowserRouter>

</>
  );
};
export default App;

