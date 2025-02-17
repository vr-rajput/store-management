import Header from './Components/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import { Login } from './pages/Login';
import { AppRoutes } from './routes/AppRoutes';


function App() {
  return (
    <div className='app-container'>
      <Sidebar></Sidebar>
      <div className='app-content'>
        <Header></Header>
        <AppRoutes></AppRoutes>
        <Footer></Footer>
      </div>
    </div>
  );
}


export default App
