import Header from './Components/Header';
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

function App() {
  return (
    <div className='app-container'>
      <Sidebar />
      <div className='app-content'>
        <Header></Header>
        <Footer></Footer>
      </div>
    </div>
  );
}
export default App
