import { FaSearch } from 'react-icons/fa';

const SearchBox = () => {
  return (
    <>
      <div className="searchBox postion-reletive d-flex align-items-center">
        <FaSearch className="me-2 mx-2" />
        <input type="text" placeholder="search here...." />
      </div>
    </>
  )
}

export default SearchBox;