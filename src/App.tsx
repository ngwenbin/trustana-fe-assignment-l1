import React from 'react';
import './App.css';
import mockdata from './data/mockdata.json';

const getData = () => JSON.parse(JSON.stringify(mockdata));

interface MockItem {
  prod_name: string;
  img: string;
  moq: number;
  price: number;
  unit: string;
}

interface MockCatalog {
  items: MockItem[];
  prod_group: string;
}

interface MockData {
  catalog_count: number;
  catalog: MockCatalog[];
}

function App() {
  const data: MockData = getData();

  return (
    <div className="App">
      <div className="container">Hello World</div>
    </div>
  );
}

export default App;
