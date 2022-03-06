import React, { useState, useCallback } from 'react';
import Card from '../Card';
import './styles.css';
import Pagination from '../Pagination';
import { spaceXSitesData } from '../../common/types';

type Props = {
  title: string;
  data: spaceXSitesData[];
  max_items_page: number;
};

/**
 *
 * @param title String of tab name
 * @param data Array of spaceXSitesData Objects
 * @param max_items_page Max number of items per page
 * @returns Tab component containing a list of Cards and a Pagination bar
 */
const Tab = (props: Props) => {
  const [pagenum, setpageNum] = useState<number>(0);
  const totalpages = Math.ceil(props.data.length / props.max_items_page);
  const start_index = pagenum * props.max_items_page; // Calculates starting index to slice
  const last_index = start_index + props.max_items_page; // Calculates last index to slice

  console.log('Tab render');
  const changePage = useCallback((num: number) => {
    setpageNum(num);
  }, []);

  return (
    <div className="tab-body">
      <p className="tab-body__category">PAST SPACEX LAUNCHES</p>
      <h2 className="tab-body__title">{props.title}</h2>
      <div className="tab-body__cards">
        {props.data.slice(start_index, last_index).map((item, index) => (
          <Card
            key={index}
            launch_date_unix={item.launch_date_unix}
            launch_site={item.launch_site}
            links={item.links}
            rocket={item.rocket}
            mission_name={item.mission_name}
          />
        ))}
      </div>
      <div>
        <Pagination pages={totalpages} onClick={changePage} active={pagenum} />
      </div>
    </div>
  );
};

export default Tab;
