import { useContext, useState, useEffect } from 'react';
import { Routes, Route } from 'react-router'; 
import NavBar from './components/NavBar/NavBar';
import SignUpForm from './components/SignUpForm/SignUpForm';
import Landing from './components/Landing/Landing';
import SignInForm from './components/SignInForm/SignInForm';
import Dashboard from './components/Dashboard/Dashboard';
import { UserContext } from './contexts/UserContext';
import * as hootService from "./services/hootService"
import HootList from './components/HootList/HootList';

const App = () => {

  const { user } = useContext(UserContext);
  const [ hoots, setHoots ]=useState([])

  useEffect(()=> {

const fetchAllHoots =async () => {
  const hootsData = await hootService.index()
  setHoots(hootsData)
}
fetchAllHoots()

  },[])

  return (
    <>
      <NavBar />
      <Routes>
      <Route path='/hoots' element={ <HootList hoots={hoots}/> } />
      <Route path='/' element={user ? <Dashboard /> : <Landing /> } />
        <Route path='/sign-up' element={<SignUpForm />} />
        <Route path="/sign-in" element={<SignInForm />} />
      </Routes>
    </>
  );
};

export default App;
