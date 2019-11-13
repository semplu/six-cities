import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import HotelsItem from './hotels-item';

Enzyme.configure({adapter: new Adapter()});


it(`Проверка корректности нажатия заголовков, наведения на элемент, и передачи в них функции`, () => {

  const clickHandler = jest.fn();
  const mouseEnterHandler = jest.fn();
  const mouseLeaveHandler = jest.fn();

  const hotelComponent = shallow(<HotelsItem
    key={47}
    id={47}
    name={`test_name`}
    price={0}
    type={`test_type`}
    image={`test_image_url`}
    status={`test_status`}
    rating={0}
    link={`test_link`}
    goToHotel={clickHandler}
    addActiveHotel={mouseEnterHandler.bind(null, 47)}
    removeActiveHotel={mouseLeaveHandler}
  />);

  const headingLink = hotelComponent.find(`.place-card__name`);
  const hotelItem = hotelComponent.find(`.place-card`);
  const preventDefault = jest.fn();

  headingLink.simulate(`click`, {preventDefault});
  expect(clickHandler).toHaveBeenCalledTimes(1);

  hotelItem.simulate(`mouseEnter`, {preventDefault});
  expect(mouseEnterHandler).toHaveBeenCalledTimes(1);

  hotelItem.simulate(`mouseLeave`, {preventDefault});
  expect(mouseLeaveHandler).toHaveBeenCalledTimes(1);

});
