import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.css';

const Card = ({ id, cover, title }) => {
    return (
        <Link className="card" to={'../logements/' + id}>
            <img src={cover} alt={'Photo de ' + title} />
            <h2 className="card__title">{title}</h2>
        </Link>
    );
};

Card.propTypes = {
    id: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default Card;
