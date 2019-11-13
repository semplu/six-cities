import React from 'react';
import HotelsItem from '../hotels-item/hotels-item';
import PropTypes from 'prop-types';

class HotelsList extends React.Component {

  render() {

    const {hotels, goToHotel, addActiveHotel, removeActiveHotel} = this.props;


    return (

      <div className="cities__places-list places__list tabs__content">
        {
          hotels.map(function (hotel) {
            return (
              <HotelsItem
                key={`hotel-${hotel.id}`}
                id={hotel.id}
                name={hotel.name}
                price={hotel.price}
                type={hotel.type}
                image={hotel.image}
                status={hotel.status}
                rating={hotel.rating}
                link={hotel.link}
                goToHotel={goToHotel}
                addActiveHotel={addActiveHotel}
                removeActiveHotel={removeActiveHotel}
              />
            );
          })
        }
      </div>

    );
  }

}

HotelsList.propTypes = {
  hotels: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    status: PropTypes.string,
    rating: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
  goToHotel: PropTypes.func.isRequired,
  addActiveHotel: PropTypes.func.isRequired,
  removeActiveHotel: PropTypes.func.isRequired,
};

export default HotelsList;
