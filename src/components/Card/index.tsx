import React from 'react';
import { spaceXSitesData } from '../../common/types';
import './styles.css';
import spacexlogo from '../../assets/images/spacex.png';

/**
 *
 * @param props spaceXSitesData
 * @returns Card component displaying details
 */
const Card = (props: spaceXSitesData) => {
  return (
    <div className="card">
      <div className="card__img">
        <img
          src={
            props.links.flickr_images.length
              ? props.links.flickr_images[0]
              : spacexlogo
          }
        />
      </div>
      <div className="card__body">
        <h4>{props.mission_name}</h4>
        <p>Rocket: {props.rocket.rocket_name}</p>
        <p>Datetime: {props.launch_date_unix}</p>
      </div>
    </div>
  );
};

export default Card;
