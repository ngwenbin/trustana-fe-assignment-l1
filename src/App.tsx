import React, { useEffect, useState } from 'react';
import './App.css';
import Tabs from './components/Tabs';
import Tab from './components/Tabs/Tab';
import fetchData from './services/fetchData';
import { spaceXSite, spaceXGQLtemplate } from './common/types';

const reqtemplate: spaceXGQLtemplate[] = [
  {
    alias: 'site_1',
    site_name: 'CCAFS SLC 40',
    qty: 10
  },
  {
    alias: 'site_2',
    site_name: 'VAFB SLC 4E',
    qty: 10
  },
  {
    alias: 'site_3',
    site_name: 'KSC LC 39A',
    qty: 10
  }
];

function App() {
  const [gqlData, setgqlData] = useState<spaceXSite[] | undefined>(undefined);
  const [isLoading, setisLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchData(reqtemplate).then((res) => {
      const val = Object.values(res.data);
      val.map((items) =>
        items.data.map((launchdata) => {
          const date = parseInt(launchdata.launch_date_unix);
          const dateObj = new Date(date * 1000);
          launchdata.launch_date_unix = dateObj.toLocaleString();
        })
      );
      console.log('load');
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
            {gqlData?.map((items, index) => (
              <Tab
                title={reqtemplate[index].site_name}
                key={reqtemplate[index].site_name}>
                {items.data}
              </Tab>
            ))}
          </Tabs>
        )}
      </div>
    </div>
  );
}

export default App;
