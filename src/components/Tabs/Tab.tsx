import React, { ReactNode } from 'react';

type Props = {
  title: string;
  children: ReactNode;
};

const Tab = (props: Props) => {
  return (
    <div>
      <p>CATALOG</p>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
};

export default Tab;
