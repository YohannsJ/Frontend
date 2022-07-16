import React from 'react';
import {Routes,Route} from 'react-router-dom'
import IndexLayout from './layout';
import NavBar from './components/Navbar/navbar';
import LoginLayout from './layout/Login/Login.layout';
import QuestionsLayout from './layout/Questions/Questions.layout.js';
import SignUp from './layout/SignUp/SignUp.layout';
import ShowAllUsers  from './components/Users/users';
import NotFound from './layout/Error/404';
import InfoUser from './layout/User/User.layout';

function App() {
  return ( 
    <div className='App'>
      <NavBar/> 
      <Routes>
        {/* <IndexLayout/>  */}
        <Route path='/' element = {<IndexLayout/>} />
        {/* <Link path='/' element = {<App/>} /> */}
       
        {/* <Route path = '/SearchUser' element = {<SearchUser/>}/> */}
        <Route path='/Login' element = {<LoginLayout/>} />
        <Route path = '/SignUP' element = {<SignUp/>}/>
        <Route path = '/Questions' element = {<QuestionsLayout/>}/>
        <Route path='/ShowAllUsers' element = {<ShowAllUsers/>} />
        <Route path='/InfoUser' element = {<InfoUser/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </div>
  );
}

export default App;
