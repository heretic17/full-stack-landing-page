import { useParams, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Props } from '../types';

function ItemPage({ data }: Props) {
    const { id } = useParams();
    const itemId = parseInt(id, 10);
    const item = data.find(item => item.id === itemId);

    if (!item) {
        return <div>Item not found</div>;
    }

    return (
      <>
      <div>
        <h1>{item.title}</h1>
        <div className="cover-container">
          {item.images.map((img, index) => (
            <img className="item-cover" key={index} src={img.image} alt={`item ${item.title} image ${index}`} />
          ))}
        </div>
        <h3>Author: </h3> <p>{item.author.username}</p>
        <h3>Description: </h3> <p>{item.description}</p>
        <h3>Tags: </h3> <p>{item.tags}</p>
      </div>
      <button>Add to Cart</button>
      <Link className='link-home' to={'/'}>Back</Link>
    </>
    );
}

ItemPage.propTypes = {
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
}

export default ItemPage