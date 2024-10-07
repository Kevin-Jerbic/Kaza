import { useState, useEffect } from 'react';
import { IMAGES } from '../../assets/images/img';
import PropTypes from 'prop-types';
import './style.css';

const Rating = ({ rating }) => {
    const [stars, setStars] = useState([]);
    const [maxRate] = useState(5);

    useEffect(() => {
        let tmpArray = [];

        // For each rate until maxRate
        for (let i = 1; i <= maxRate; i++) {
            // We compare with the note received "rating", orange stars if it less than or equal to the note, otherwise light stars
            let starImg = i <= rating ? IMAGES.starOrange : IMAGES.starLight;
            // We push on the stars array the coded to write with the good star img
            tmpArray.push(
                <li key={i}>
                    <img src={starImg} alt="Etoile" />
                </li>
            );
        }
        setStars([...tmpArray]);
    }, [rating, maxRate]);

    return (
        <div className="rating">
            <div className="rating_stars">{stars}</div>
        </div>
    );
};

Rating.propTypes = {
    rating: PropTypes.string.isRequired,
};

export default Rating;
