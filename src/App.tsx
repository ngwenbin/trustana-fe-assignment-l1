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
    qty: 50
  },
  {
    alias: 'site_2',
    site_name: 'VAFB SLC 4E',
    qty: 30
  },
  {
    alias: 'site_3',
    site_name: 'KSC LC 39A',
    qty: 40
  }
];

function App() {
  //Store GraphQL data
  const [gqlData, setgqlData] = useState<spaceXSite[] | undefined>(undefined);
  // State to store loading status
  const [isLoading, setisLoading] = useState<boolean>(true);

  // UseEffect hook that calls the fetch function
  useEffect(() => {
    fetchData(reqtemplate).then((res) => {
      // Because returned Object is an Object of Objects,
      // It has to be converted to an array of objects.
      const val = Object.values(res.data);
      val.map((items) =>
        items.data.map((launchdata) => {
          const date = parseInt(launchdata.launch_date_unix); //Converts timestamp string to int
          const dateObj = new Date(date * 1000);
          launchdata.launch_date_unix = dateObj.toLocaleString(); // Overwrite UNIX timestamp with dateObj string
          if (launchdata.links.flickr_images.length) {
            launchdata.links.flickr_images[0] =
              launchdata.links.flickr_images[0]?.slice(0, -5) + 'n.jpg'; //Last character specifies image size for Flickr image request
          }
        })
      );
      console.log(val);
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
                key={reqtemplate[index].site_name}
                data={items.data}
                max_items_page={10}
              />
            ))}
          </Tabs>
        )}
      </div>
    </div>
  );
}

export default App;
