import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import { IMAGES } from '../../assets/images/img';
import { ABOUT_TXT } from '../../assets/textes/constants';
import './style.css';

const About = () => {
    return (
        <div className="about">
            <Banner banner={IMAGES.bannerAbout} />
            <div className="aboutBody">
                <Collapse
                    arrow={IMAGES.arrowUp}
                    title={ABOUT_TXT.first.title}
                    text={ABOUT_TXT.first.text}
                />
                <Collapse
                    arrow={IMAGES.arrowUp}
                    title={ABOUT_TXT.second.title}
                    text={ABOUT_TXT.second.text}
                />
                <Collapse
                    arrow={IMAGES.arrowUp}
                    title={ABOUT_TXT.third.title}
                    text={ABOUT_TXT.third.text}
                />
                <Collapse
                    arrow={IMAGES.arrowUp}
                    title={ABOUT_TXT.fourth.title}
                    text={ABOUT_TXT.fourth.text}
                />
            </div>
        </div>
    );
};

export default About;
