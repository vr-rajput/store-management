import style from './Header.module.css';
import { MdMenuOpen, MdLightMode } from "react-icons/md";
import SearchBox from './SearchBox';

const Header = () => {
  return (
    <header className={style.Header}>
      <div className="container-fluid w-100">
        <div className="row d-flex align-items-center">
          <div className='col-sm-2 d-flex align-items-center'>
            <h2>StoreName</h2>
          </div>


          <div className='col-sm-4 d-flex align-items-center pl-2 '>
            <button className='rounded-circle me-4'><MdMenuOpen /></button>
            <SearchBox />
          </div>

          <div className='col-sm-5 d-flex align-items-center justify-content-end'>
            <button className='rounded-circle'><MdLightMode /></button>
            <button className='rounded-circle mx-3 userInfor'>
              <img src="" alt="er" />
            </button>
            <samp>userName</samp>
          </div>

        </div>

      </div>
    </header>
  )
}

export default Header;