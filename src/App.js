import logo from './logo.svg';
import './App.css';
import TaxClearance from './components/TaxClearance';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import TopNav from './components/TopNav';
import AddTaxClearance from './components/AddTaxClearance';
import Profile from './components/Profile';
import Register from './components/Register';
import Login from './components/Login';
import TaxClearances from './components/TaxClearances';
import UpdateTaxClearance from './components/UpdateTaxClearance';
import FloatingComponent from './components/FloatingComponent';

function App() {
  
  return (
    <>
     
 
    <FloatingComponent/>


     <Routes>
<Route path='/tax-clearances'  element={<TaxClearances/>}/>
<Route path='/tax-clearance/:id'  element={<TaxClearance/>}/>
<Route path='/add-tax-clearance' element={<AddTaxClearance/>}/>
<Route path='/update-tax-clearance/:id' element={<UpdateTaxClearance/>}/>
<Route path='/profile' element={<Profile/>}/>
<Route path='/' exact element={<Login/>}/>
<Route path='/register' strict element={<Register/>}/>



</Routes>
    

    


    
    </>

   
  );
}

export default App;



