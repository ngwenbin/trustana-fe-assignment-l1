import React, { SetStateAction } from 'react';
import './styles.css';

type Props = {
  tabName: string;
  index: number;
  active: number;
  setActive: (index: number) => void;
};

const TabBar = (props: Props) => {
  const className = props.index == props.active ? 'tab-bar__items--active' : '';

  return (
    <div className="tab-bar">
      <li className={className}>
        <button onClick={() => props.setActive(props.index)}>
          {props.tabName}
        </button>
      </li>
    </div>
  );
};

export default TabBar;
