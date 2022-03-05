import React, { ReactElement, useState } from 'react';
import './styles.css';
import TabBar from './TabBar';
import trustana_logo from '../../assets/images/Logo.png';

type Props = {
  children: ReactElement[];
};

const Tabs = (props: Props) => {
  const [activeTab, setactiveTab] = useState(0);

  return (
    <div className="tab">
      <div className="tab-bar">
        <ul className="tab-bar__list">
          {props.children.map((item, index) => (
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
      {props.children[activeTab]}
    </div>
  );
};

export default Tabs;
