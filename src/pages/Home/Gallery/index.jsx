import { useState, useEffect } from 'react';
import apiAparts from '../../../API';
import Card from '../../../components/Card';
import './style.css';

const Gallery = () => {
    const [aparts, setAparts] = useState([]);
    const [isData, setIsData] = useState(false);

    useEffect(() => {
        const fetchAparts = async () => {
            try {
                if (!isData) {
                    const { getAparts } = apiAparts();
                    const json = await getAparts();
                    setAparts(json);
                    setIsData(true);
                }
            } catch (error) {
                console.error('==============', error);
            }
        };

        fetchAparts();
    }, [isData]);

    return (
        <div className="gallery">
            <div className="gallery__content">
                {aparts &&
                    aparts.map(apart => <Card key={apart.id} {...apart} />)}
            </div>
        </div>
    );
};

export default Gallery;
