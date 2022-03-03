import React from 'react';

type Props = {
  imguri: string;
  title: string;
  moq: number;
  price: number;
  unit: string;
};

const Card = (props: Props) => {
  return (
    <div>
      <img src={props.imguri} alt="Logo" />
      <h1>{props.title}</h1>
      <p>MOQ {props.moq} Units</p>
      <p>
        SGD {props.price.toFixed(2)} /{props.unit}
      </p>
    </div>
  );
};

export default Card;
