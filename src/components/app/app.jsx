import React from 'react';
import Header from '../header/header';
import Tabs from '../tabs/tabs';
import Cities from '../cities/cities';
import PropTypes from 'prop-types';

class App extends React.Component {

  _goToHotel(event) {
    event.preventDefault();
  }

  constructor(props) {
    super(props);
    this.state = {
      activeHotel: null,
    };
  }


  _handleAddActiveHotel(_id) {
    this.setState({
      activeHotel: _id
    });
  }

  _handleRemoveActiveHotel() {
    this.setState({
      activeHotel: null
    });
  }


  render() {
    return (

      <div className="page page--gray page--main">
        <Header/>
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <Tabs/>
          <Cities
            hotels={this.props.offers}
            goToHotel={this._goToHotel}
            addActiveHotel={this._handleAddActiveHotel.bind(this)}
            removeActiveHotel={this._handleRemoveActiveHotel.bind(this)}
          />
        </main>
      </div>

    );
  }


}


App.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    status: PropTypes.string,
    rating: PropTypes.number.isRequired,
    link: PropTypes.string.isRequired,
  })).isRequired,
};


export default App;
