import Banner from '../../components/Banner';
import Gallery from './Gallery';
import { IMAGES } from '../../assets/images/img';
import { STRINGS } from '../../assets/textes/constants';
import './style.css';

const Home = () => {
    return (
        <main className="home">
            <Banner banner={IMAGES.bannerHome} text={STRINGS.BANNER_TITLE} />
            <Gallery />
        </main>
    );
};

export default Home;
