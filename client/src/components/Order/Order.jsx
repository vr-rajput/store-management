import DataTable from "../DataTable/DataTable1";
import { useDataTable } from '../../hooks/useDataTable';

const headCells = [
    { id: 'id', label: 'ID' },
    { id: 'customerName', label: 'customer name' },
    { id: 'customerEmail', label: 'customer email' },
    { id: 'item', label: 'Item' },
    { id: 'Total', label: 'Total' },
    { id: 'action', label: 'Action' }, // New Action Column
  ]; 
  const rows = [
    {
      id: 1,
      customerName: 'John Doe',
      customerEmail: 'johndoe@example.com',
      item: 'Laptop',
      Total: '$1200',
      Action: 'View Details',
    },
    {
      id: 2,
      customerName: 'Jane Smith',
      customerEmail: 'janesmith@example.com',
      item: 'Smartphone',
      Total: '$800',
      Action: 'View Details',
    },
    {
      id: 3,
      customerName: 'Alice Johnson',
      customerEmail: 'alicejohnson@example.com',
      item: 'Headphones',
      Total: '$150',
      Action: 'View Details',
    },
    {
      id: 4,
      customerName: 'Bob Brown',
      customerEmail: 'bobbrown@example.com',
      item: 'Smartwatch',
      Total: '$250',
      Action: 'View Details',
    },
    {
      id: 5,
      customerName: 'Charlie Davis',
      customerEmail: 'charliedavis@example.com',
      item: 'Tablet',
      Total: '$600',
      Action: 'View Details',
    },
  ];
  

const Order = () => {
    
    const { data, searchTerm, setSearchTerm } = useDataTable();
  return (
    <DataTable headers={headCells} rows={rows} query={{ searchTerm, setSearchTerm }} />
  )
}

export default Order