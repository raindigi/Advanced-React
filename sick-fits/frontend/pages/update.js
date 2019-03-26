import UpdateItem from '../components/UpdateItem';
import PropTypes from 'prop-types';

const Sell = ({ query }) => (
  <div>
    <UpdateItem id={query.id} />
  </div>
);

Sell.propTypes = {
  query: PropTypes.object,
};

export default Sell;
