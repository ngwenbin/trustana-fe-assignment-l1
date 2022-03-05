import React from 'react';
import Card from '../Card';
import './styles.css';
import { spaceXSitesData } from '../../common/types';

type Props = {
  title: string;
  children: spaceXSitesData[];
};
const Tab = (props: Props) => {
  return (
    <div className="tab-body">
      <p className="tab-body__category">PAST SPACEX LAUNCHES</p>
      <h2 className="tab-body__title">{props.title}</h2>
      <div className="tab-body__cards">
        {props.children.map((item, index) => (
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
    </div>
  );
};

export default Tab;
