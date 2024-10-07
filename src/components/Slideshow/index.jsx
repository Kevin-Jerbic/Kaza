import { useState } from 'react';
import { IMAGES } from '../../assets/images/img';
import PropTypes from 'prop-types';
import './style.css';

const SlideShow = ({ pictures }) => {
    const [index, setIndex] = useState(0);
    // Get the last index
    const lastIndex = pictures.length - 1;

    const handleClickSlideLeft = () => {
        // If index = 0, then isFirstSlide = true, I'm on the first slide
        const isFirstSlide = index === 0;
        // If I'm at the first slide, then I go to the last image of my array, otherwise I go back one image
        const newIndex = isFirstSlide ? lastIndex : index - 1;
        setIndex(newIndex);
    };

    const handleClickSlideRight = () => {
        // If index = lastIndex, then isLastSlide = true, I'm on the last slide
        const isLastSlide = index === lastIndex;
        // If I'm on the last slide, then I go to the first image of my array, otherwise I go to the next image
        const newIndex = isLastSlide ? 0 : index + 1;
        setIndex(newIndex);
    };

    return (
        <div
            className="slideshow"
            style={{ backgroundImage: `url("${pictures[index]}")` }}
        >
            <div className="slideshow__arrows">
                {pictures.length > 1 && (
                    <img
                        className="arrow_back"
                        src={IMAGES.arrowBack}
                        alt="Précédent"
                        onClick={handleClickSlideLeft}
                    />
                )}
                {pictures.length > 1 && (
                    <img
                        className="arrow_forward"
                        src={IMAGES.arrowNext}
                        alt="Suivant"
                        onClick={handleClickSlideRight}
                    />
                )}
            </div>
            {pictures.length > 1 && (
                <span>
                    {index + 1} / {pictures.length}
                </span>
            )}
        </div>
    );
};

SlideShow.propTypes = {
    pictures: PropTypes.array.isRequired,
};

export default SlideShow;
