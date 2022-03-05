import React from 'react';
import { MockItem } from '../../common/types';
import './styles.css';

const Card = (props: MockItem) => {
  return (
    <div className="card">
      <div className="card__img">
        <img src={props.img} alt="Logo" />
      </div>
      <div className="card__body">
        <h4>{props.prod_name}</h4>
        <p>MOQ {props.moq} Units</p>
        <p>
          SGD {props.price.toFixed(2)} /{props.unit}
        </p>
      </div>
    </div>
  );
};

export default Card;
