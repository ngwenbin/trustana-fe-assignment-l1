import React, { ReactElement, useState } from 'react';
import './styles.css';
import TabBar from './TabBar';
import trustana_logo from '../../assets/images/Logo.png';

type Props = {
  children?: ReactElement[];
};

/**
 *
 * @param children Array of ReactElements as children
 * @returns Tabs component containing of a Tabbar and respective children tabs
 */
const Tabs = (props: Props) => {
  const [activeTab, setactiveTab] = useState(0);

  return (
    <div className="tab">
      <div className="tab-bar">
        <ul className="tab-bar__list">
          {props.children?.map((item, index) => (
            <TabBar
              key={index}
              tabName={item.props.title}
              index={index}
              active={activeTab}
              setActive={setactiveTab}
            />
          ))}
          <div className="tab__img">
            <img src={trustana_logo} />
          </div>
        </ul>
      </div>
      {props.children && props.children[activeTab]}
    </div>
  );
};

export default Tabs;
