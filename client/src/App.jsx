import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Header/Dashboard';
import Header from './Components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter >
  )
}


export default App
