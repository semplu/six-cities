import React from 'react';
import PropTypes from 'prop-types';

class HotelsItem extends React.Component {

  render() {

    const {
      id,
      name,
      price,
      type,
      image,
      status,
      rating,
      link,
      goToHotel,
      addActiveHotel,
      removeActiveHotel,
    } = this.props;


    return (

      <article
        className="cities__place-card place-card"
        onMouseEnter={addActiveHotel.bind(null, id)}
        onMouseLeave={removeActiveHotel}
      >
        {(status) ? <div className="place-card__mark"><span>{status}</span></div> : null}
        <div className="cities__image-wrapper place-card__image-wrapper">
          <a href={link}>
            <img className="place-card__image" src={image} width="260" height="200" alt={name}/>
          </a>
        </div>
        <div className="place-card__info">
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button className="place-card__bookmark-button button" type="button">
              <svg className="place-card__bookmark-icon" width="18" height="19">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="place-card__rating rating">
            <div className="place-card__stars rating__stars">
              <span style={{width: `${rating}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
          </div>
          <h2 className="place-card__name" onClick={goToHotel}>
            <a href={link}>{name}</a>
          </h2>
          <p className="place-card__type">{type}</p>
        </div>
      </article>

    );
  }

}


HotelsItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  status: PropTypes.string,
  rating: PropTypes.number.isRequired,
  link: PropTypes.string.isRequired,
  goToHotel: PropTypes.func.isRequired,
  addActiveHotel: PropTypes.func.isRequired,
  removeActiveHotel: PropTypes.func.isRequired,
};


export default HotelsItem;
