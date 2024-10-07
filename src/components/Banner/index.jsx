import PropTypes from 'prop-types';
import './style.css';

const Banner = ({ banner, text }) => {
    return (
        <div className="banner">
            <img src={banner} alt="Bannière" />
            <h1>{text}</h1>
        </div>
    );
};

Banner.propTypes = {
    banner: PropTypes.string.isRequired,
    text: PropTypes.string,
};

export default Banner;
