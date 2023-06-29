
import './App.css';
import { Header } from './layout/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './Components/Homepage/HomePage';
import { LunchelloPage } from './Pages/LunchelloPage';
import { OurStoryPage } from './Pages/OurStoryPage';
import { CausesPage } from './Pages/CausesPage';
import { FoodWarriorPage } from './Pages/FoodWarriorPage';
import { Navbar } from './layout/Navbar';
import { Footer } from './layout/Footer';
import FoodWastage from './Components/FoodWastage/FoodWastage';
import FoodHunger from './Components/FoodHunger/FoodHunger';
import Header1 from './layout/Header1';
import DonationPage from './Components/DonationPage/DonationPage';


function App() {
  return (
    <div className='Apppage'>
      
      <BrowserRouter>
      <div className='header1'>
      <Header1/>
      </div>
    
      <div className='header'>
      <Header/>
      </div>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/linchello' element={<LunchelloPage/>}/>
          <Route path='/OurStory' element={<OurStoryPage/>}/>
          <Route path='/Causes' element={<CausesPage/>}/>
          <Route path='/FoodWarrior' element={<FoodWarriorPage/>}/>
          <Route path= '/FoodWastage' element={<FoodWastage/>}/>
          <Route path= '/FoodHunger' element={<FoodHunger/>}/>
          <Route path= '/DonationPage' element={<DonationPage/>}/>
        </Routes>
        <div className='footer'>
        <Footer/>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
