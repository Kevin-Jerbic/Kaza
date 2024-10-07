import { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Collapse = ({ title, arrow, text }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <div className="collapse">
            <div className="collapse__container" onClick={handleClick}>
                <h3>{title}</h3>
                <img
                    src={arrow}
                    alt="Flèche"
                    className={open ? 'arrow-down' : 'arrow-up'}
                />
            </div>

            <div className="collapse__textContent">
                {open && (
                    <div className="collapse__textContent_text">
                        <p>{text}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

Collapse.propTypes = {
    title: PropTypes.string.isRequired,
    arrow: PropTypes.string.isRequired,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
};

export default Collapse;
