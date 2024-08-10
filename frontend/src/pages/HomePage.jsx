import PropTypes from 'prop-types';
import Items from '../components/Item';

function HomePage({ data }) {
  return (
    <div>
      <h1>Home Page</h1>
      <Items data={data} />
    </div>
  );
}

HomePage.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      images: PropTypes.arrayOf(
        PropTypes.shape({
          image: PropTypes.string.isRequired,
        })
      ).isRequired,
      description: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default HomePage;
