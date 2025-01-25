import Button from '@mui/material/Button';
import { RxDashboard } from "react-icons/rx";
import { BsClockHistory } from "react-icons/bs";
import { AiOutlineLogout } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
const Slidebar = () => {
  return (
    <>
      <div className="sidebar">
        <ul className='p-2'>
          <li>
            <Button className='w-100 d-flex justify-content-start'>
              <span className='icon mx-4'><RxDashboard /></span>
              DashBoard
            </Button>

            <Button className='w-100 d-flex justify-content-start'>
              <span className='icon mx-4'><MdProductionQuantityLimits /></span>
              Product
            </Button>

            <Button className='w-100 d-flex justify-content-start'>
              <span className='icon mx-4'><BsClockHistory /></span>
              Sales history
            </Button>


            <Button className='w-100 d-flex justify-content-start'>
              <span className='icon mx-4'><AiOutlineLogout /></span>
              Logout
            </Button>

          </li>
        </ul>
      </div>
    </>
  )
}

export default Slidebar;