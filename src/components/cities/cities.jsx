import React from 'react';
import FormSorting from '../form-sorting/form-sorting';
import HotelsList from '../hotels-list/hotels-list';
import PropTypes from 'prop-types';

class Cities extends React.Component {


  render() {

    const {hotels, goToHotel, addActiveHotel, removeActiveHotel} = this.props;


    return (

      <div className="cities">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 className="visually-hidden">Places</h2>
            <b className="places__found">312 places to stay in Amsterdam</b>

            <FormSorting/>

            <HotelsList
              hotels={hotels}
              goToHotel={goToHotel}
              addActiveHotel={addActiveHotel}
              removeActiveHotel={removeActiveHotel}
            />

          </section>
          <div className="cities__right-section">
            <section className="cities__map map"></section>
          </div>
        </div>
      </div>

    );
  }

}


Cities.propTypes = {
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


export default Cities;
