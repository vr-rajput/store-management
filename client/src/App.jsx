import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Header/Dashboard';
import Header from './Components/Header/Header';
import Slidebar from './Components/SlideBar/Slidebar';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='main d-flex'>
        <div className='sidebarWrapper'>
          <Slidebar />
        </div>

        <div className='content'>
          <Routes>
            <Route path="/a" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter >
  )
}


export default App
