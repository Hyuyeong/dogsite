//import {useState} from 'react'
//import styles from './Card.module.css'

import img1 from '../assets/card-image-walking.png';
import img2 from '../assets/card-image-boarding.png';
import img3 from '../assets/card-image-sitting.png';

const DUMMY_DATA = [
  {
    id: 'd-1',
    img: img1,
    title: 'Dog Walking',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur similique aperiam sapiente corporis culpa doloremque, a molestias non vitae sed incidunt distinctio laborum consequatur id quaerat atque vero ab earum',
  },
  {
    id: 'd-2',
    img: img2,
    title: 'Dog Boarding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur similique aperiam sapiente corporis culpa doloremque, a molestias non vitae sed incidunt distinctio laborum consequatur id quaerat atque vero ab earum',
  },
  {
    id: 'd-3',
    img: img3,
    title: 'Dog Sitting',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur similique aperiam sapiente corporis culpa doloremque, a molestias non vitae sed incidunt distinctio laborum consequatur id quaerat atque vero ab earum',
  },
];

const Card = props => {
  const cardData = DUMMY_DATA.map(item => {
    return (
      <div className="card">
        <img src={item.img} alt={item.title} />

        <div className="card__description">
          <h3>{item.title}</h3>
          <h4>{item.description}</h4>

          <div className="card__description-link">Learn More &gt;</div>
        </div>
      </div>
    );
  });

  return <div className="container">{cardData}</div>;
};
export default Card;
