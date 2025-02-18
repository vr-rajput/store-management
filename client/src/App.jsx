import Header from './Components/Header';
import "bootstrap/dist/css/bootstrap.min.css"
import Footer from './Components/Footer';
import Sidebar from './Components/Sidebar';
import { AppRoutes } from './routes/AppRoutes'
import './App.css'


function App() {
  const handleLoginClick = (e) => {
    console.log(e)

  }
  return (
    <>
      <Header></Header>
      <div>
        <AppRoutes handleLoginClick={handleLoginClick}></AppRoutes>
      </div>
    </>


    /* <div classNameName='app-container'>
       <Sidebar></Sidebar>
       <div classNameName='app-content'>
         <Header></Header>
         <AppRoutes></AppRoutes>
         <Footer></Footer>
       </div>
     </div>*/
  );
}


export default App
