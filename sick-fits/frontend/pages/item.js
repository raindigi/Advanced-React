import SingleItem from '../components/SingleItem';
import PropTypes from 'prop-types';

const Item = props => (
  <div>
    <SingleItem id={props.query.id} />
  </div>
);

Item.propTypes = {
  query: PropTypes.object,
};

export default Item;
