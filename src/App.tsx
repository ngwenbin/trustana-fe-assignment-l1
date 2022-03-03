import React from 'react';
import './App.css';
import Card from './components/Card';
import Tabs from './components/Tabs';
import Tab from './components/Tabs/Tab';
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
      <div className="container">
        <Tabs>
          <Tab title="Korean products">Lorem ipsum</Tab>
          <Tab title="Chinese products">Lorem ipsum</Tab>
          <Tab title="Japanese products">Lorem ipsum</Tab>
        </Tabs>
      </div>
    </div>
  );
}

export default App;
