import React, { ReactElement, useState } from 'react';
import './styles.css';
import TabBar from './TabBar';

type Props = {
  children: ReactElement[];
};

const Tabs = (props: Props) => {
  const [activeTab, setactiveTab] = useState(0);

  return (
    <div className="tab">
      <ul>
        {props.children.map((item, index) => (
          <TabBar
            key={index}
            tabName={item.props.title}
            index={index}
            active={activeTab}
            setActive={setactiveTab}
          />
        ))}
      </ul>
      {props.children[activeTab]}
    </div>
  );
};

export default Tabs;
