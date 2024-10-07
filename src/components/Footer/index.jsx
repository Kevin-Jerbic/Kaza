import './style.css';
import { IMAGES } from '../../assets/images/img';
import { STRINGS } from '../../assets/textes/constants';

const Footer = () => {
    return (
        <footer className="footer">
            <img src={IMAGES.logoFooter} alt="Logo" />
            <p>{STRINGS.COPYRIGHT}</p>
        </footer>
    );
};

export default Footer;
