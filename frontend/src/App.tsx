import "./App.css";
import Table from "./components/Table";
import React from "react";

function App() {
  const [data, setData] = React.useState({});

  React.useEffect(() => {
    fetch("http://localhost:5000/api/data")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return <Table data={data} />;
}

export default App;
