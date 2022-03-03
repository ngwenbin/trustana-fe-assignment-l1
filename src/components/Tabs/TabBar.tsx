import React, { SetStateAction } from 'react';
import './styles.css';

type Props = {
  tabName: string;
  index: number;
  active: number;
  setActive: (index: number) => void;
};

const TabBar = (props: Props) => {
  let className = 'tab-bar';
  if (props.index == props.active) {
    className += ' tab-bar-active';
  }

  return (
    <li className={className}>
      <button onClick={() => props.setActive(props.index)}>
        {props.tabName}
      </button>
    </li>
  );
};

export default TabBar;
