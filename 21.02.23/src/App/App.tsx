import { AddStore, TableFilter, PerformTable } from "../components";

const App = () => {

  const stores = [
    {
      id: 1,
      name: "Aliexpress",
      openTime: 0.00,
      closeTime: 0.00,
      Special: true,
      DeliveryWay: 1000,
    },
    {
      id: 2,
      name: "Itstep",
      openTime: 9.00,
      closeTime: 21.50,
      Special: true,
      DeliveryWay: 20,
    }
  ]

  return (
    <div>
      <AddStore />
      <TableFilter />
      <PerformTable stores={stores}/>
    </div>
  );
}

export default App;