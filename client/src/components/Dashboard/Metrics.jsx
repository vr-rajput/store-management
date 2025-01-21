import "./Dashboard.css"

const MetricCard = ({ title, value, icon }) => (
  <div className="metric-card">
    <div className="metric-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{value}</p>
  </div>
);

const Metrics = () => {
  return (
    <div className="metrics-container">
      <MetricCard title="Total Sales" value="$2000" icon="💰" />
      <MetricCard title="Total Orders" value="150" icon="📦" />
      <MetricCard title="Total Products" value="120" icon="📋" />
      <MetricCard title="New Customers" value="25" icon="👥" />
    </div>
  );
};

export default Metrics;
