import React, { useEffect, useState } from 'react';
import './App.css';
import Tabs from './components/Tabs';
import Tab from './components/Tabs/Tab';
import fetchData from './services/fetchData';
import mockdata from './data/mockdata.json';
import { MockData, spaceXSite, spaceXGQLtemplate } from './common/types';

const getData = () => JSON.parse(JSON.stringify(mockdata));

const reqtemplate: spaceXGQLtemplate[] = [
  {
    alias: 'site_1',
    site_name: 'CCAFS SLC 40',
    qty: 2
  },
  {
    alias: 'site_2',
    site_name: 'VAFB SLC 4E',
    qty: 5
  },
  {
    alias: 'site_3',
    site_name: 'KSC LC 39A',
    qty: 6
  }
];

function App() {
  const [gqlData, setgqlData] = useState<spaceXSite[] | undefined>(undefined);
  const [isLoading, setisLoading] = useState<boolean>(false);
  const data: MockData = getData();

  useEffect(() => {
    fetchData(reqtemplate).then((res) => {
      const val = Object.values(res.data);
      setgqlData(val);
      setisLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <div className="container">
        {isLoading ? (
          <strong>Loading...</strong>
        ) : (
          <Tabs>
            {data.catalog.map((items) => (
              <Tab title={items.prod_group} key={items.prod_group}>
                {items.items}
              </Tab>
            ))}
          </Tabs>
        )}
      </div>
    </div>
  );
}

export default App;
