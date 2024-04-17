import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';

  const CardItem = (props) => {
    return (
      <>
          <li className="cards__item">
          <Link className="cards__item__link" to={props.path}>
              <figure className="cards__item__pic-wrap" data-category={props.label}>
                  <img src={props.src} alt="" className="cards__item__img" />
              </figure>
              <div className="cards__item__info">
                  <h5 className="cards__item__text">{props.text}</h5>
              </div>
          </Link>
          </li>
      </>
    )
  }

  CardItem.propTypes = {
    path: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  };

  export default CardItem;