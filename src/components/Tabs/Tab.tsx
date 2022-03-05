import React from 'react';
import Card from '../Card';
import './styles.css';
import { MockItem } from '../../common/types';

type Props = {
  title: string;
  children: MockItem[];
};
const Tab = (props: Props) => {
  return (
    <div className="tab-body">
      <p className="tab-body__category">CATALOG</p>
      <h2 className="tab-body__title">{props.title}</h2>
      <div className="tab-body__cards">
        {props.children.map((item) => (
          <Card
            key={item.prod_name}
            img={item.img}
            prod_name={item.prod_name}
            moq={item.moq}
            price={item.price}
            unit={item.unit}
          />
        ))}
      </div>
    </div>
  );
};

export default Tab;
