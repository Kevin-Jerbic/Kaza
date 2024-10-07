import { Link, useLocation } from 'react-router-dom';
import { IMAGES } from '../../assets/images/img';
import { STRINGS } from '../../assets/textes/constants';
import './style.css';

const Header = () => {
    // Assigning location variable
    const location = useLocation();
    // Destucturing pathname from location
    const { pathname } = location;
    // JavaScript split method to get the name of the path in array
    const splitLocation = pathname.split('/');

    return (
        <header className="header">
            <div>
                <Link to="/home">
                    <img src={IMAGES.logoHeader} alt="Logo" />
                </Link>
                <nav>
                    <ul>
                        {/* Checking the current path name using JS ternary operator and if true adding className to it */}
                        <li
                            className={
                                splitLocation[1] === 'home' || pathname === '/'
                                    ? 'active'
                                    : ''
                            }
                        >
                            <Link to="/home">{STRINGS.HEADER_MENU_HOME}</Link>
                        </li>
                        <li
                            className={
                                splitLocation[1] === 'about' ? 'active' : ''
                            }
                        >
                            <Link to="/about">{STRINGS.HEADER_MENU_ABOUT}</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
