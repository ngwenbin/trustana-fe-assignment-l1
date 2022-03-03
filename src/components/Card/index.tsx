import React from 'react';
import './style.css';

type Props = {
  imguri: string;
  title: string;
  moq: number;
  price: number;
  unit: string;
};

const Card = (props: Props) => {
  return (
    <div className="card">
      <div className="card--img">
        <img src={props.imguri} alt="Logo" />
      </div>
      <div className="card--body">
        <h4>{props.title}</h4>
        <p>MOQ {props.moq} Units</p>
        <p>
          SGD {props.price.toFixed(2)} /{props.unit}
        </p>
      </div>
    </div>
  );
};

export default Card;
