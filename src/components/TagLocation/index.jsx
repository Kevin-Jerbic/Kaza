import PropTypes from 'prop-types';
import './style.css';

const TagLocation = ({ tags }) => {
    return (
        <div className="tagLocation">
            <p>{tags}</p>
        </div>
    );
};

TagLocation.propTypes = {
    tags: PropTypes.string.isRequired,
};

export default TagLocation;
