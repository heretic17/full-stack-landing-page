import PropTypes from 'prop-types';
import { useNavigate } from "react-router-dom";

function Item({ data }) {
  const navigate = useNavigate();

  const handleRowClick = (id) => {
    console.log(`Navigating to item with id: ${id}`); // Debugging statement
    navigate(`/item/${id}`); // Adjust path to match your routing
  };

  return (
<div className="container">
      {data.map((item, index) => (
        <div
          key={item.id} // Use item.id as the key
          onClick={() => handleRowClick(item.id)} // Ensure correct id usage
          className="card-container"
          style={{ cursor: 'pointer' }} // Add cursor style to indicate clickable items
        >
          <h1 className="card-title">{item.title}</h1>
          <div className="card" style={{ width: '400px' }}>
            <div className="images">
              {item.images.map((image, imageIndex) => (
                <img
                  key={imageIndex}
                  className="card-img-top"
                  src={image.image} // Access the image URL from the object
                  alt="Card image"
                  style={{ width: '100%' }}
                />
              ))}
            </div>
            <div className="card-body">
              <h4 className="card-title">{item.title}</h4>
              <p className="card-text">{item.description}</p>
              <div className="tags">
                {item.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="tag">{tag}</span>
                ))}
              </div>
              <a href="#" className="btn btn-primary">Add to Cart</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

Item.propTypes = {
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

export default Item;
