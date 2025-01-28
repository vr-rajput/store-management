import Metrics from "../components/Dashboard/Metrics"
import BasicTable from "../components/DataTable"
// import BasicTable from "../components/DataTable1"

const DashboardPage = () => {
  return (
    <div className='dashboard-page'>
      <div className='metrics-section'>
        <Metrics/>
      </div>
      <div className='table-section'>
        <BasicTable/>
      </div>
    </div>
  )
}

export default DashboardPage