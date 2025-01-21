import Metrics from "../components/Dashboard/Metrics"

const DashboardPage = () => {
  return (
    <div className='dashboard-page'>
      <div className='metrics-section'>
        <Metrics/>
      </div>
      <div className='table-section'>
        tables section
      </div>
    </div>
  )
}

export default DashboardPage