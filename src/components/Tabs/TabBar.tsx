import React from 'react';
import './styles.css';

type Props = {
  tabName: string;
  index: number;
  active: number;
  setActive: (index: number) => void;
};

/**
 *
 * @param tabName String of tab name
 * @param index Index of tab
 * @param active Current active tab
 * @returns Tabbar component
 */
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
