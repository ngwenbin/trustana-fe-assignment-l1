import React from 'react';
import './App.css';
import Tabs from './components/Tabs';
import Tab from './components/Tabs/Tab';
import mockdata from './data/mockdata.json';
import { MockData } from './common/types';

const getData = () => JSON.parse(JSON.stringify(mockdata));

function App() {
  const data: MockData = getData();

  return (
    <div className="App">
      <div className="container">
        <Tabs>
          {data.catalog.map((items) => (
            <Tab title={items.prod_group} key={items.prod_group}>
              {items.items}
            </Tab>
          ))}
        </Tabs>
      </div>
    </div>
  );
}

export default App;
