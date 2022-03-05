import React from 'react';
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
    <>
      <li className={className}>
        <button onClick={() => props.setActive(props.index)}>
          {props.tabName}
        </button>
      </li>
    </>
  );
};

export default TabBar;
