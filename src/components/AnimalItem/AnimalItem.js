import { memo } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import styles from './AnimalItem.module.scss';

function AnimalItem({ animal }) {
  const format = 'YYYY-MM-DD HH:mm:ss';
  return (
    <div className={`${styles.flex_item}`}>
      <div className={`${styles.card}`}>
        <img
          className={`${styles.card_img}`}
          src={
            animal.photos[0]
              ? animal?.photos[0]?.full
              : 'https://thumbs.dreamstime.com/b/baby-rabbit-eating-grass-outdoor-sunny-summer-day-easter-bunny-garden-home-pet-kid-cute-pets-animals-family-131767995.jpg'
          }
          alt={animal.name}
        />
        <div className={`${styles.card_content}`}>
          <h2 className={`${styles.card_header}`}>
            {animal.name.length < 10
              ? `${animal.name}`
              : `${animal.name.substring(0, 10)}...`}
          </h2>
          <p>
            <strong>Size:</strong>
            {' '}
            {animal.size}
          </p>
          <p>
            <strong>Species:</strong>
            {' '}
            {animal.species}
          </p>
          <p>
            <strong>City: </strong>
            {animal.contact.address.city}
          </p>
          <p>
            <strong>Country: </strong>
            {animal.contact.address.country}
          </p>
          <p>
            <strong>Published At: </strong>
            {moment(animal.published_at).format(format)}
          </p>
        </div>
      </div>
    </div>
  );
}

AnimalItem.propTypes = {
  animal: PropTypes.instanceOf(Object),
};

AnimalItem.defaultProps = {
  animal: {},
};

export default memo(AnimalItem);
