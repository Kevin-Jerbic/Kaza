import Slideshow from '../../components/SlideShow';
import TagLocation from '../../components/TagLocation';
import Rating from '../../components/Rating';
import Collapse from '../../components/Collapse';
import Loader from '../../components/Loader';

import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import './style.css';
import arrowUp from '../../assets/images/arrow_up.svg';
import apiAparts from '../../API';

const Apart = () => {
    const { apartId } = useParams();
    const [apart, setApart] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchApart = async () => {
            try {
                //console.log(`Fetching apartment with ID: ${apartId}`);
                const json = await apiAparts().getApart(apartId);
                setApart(json);
                //console.log('Apartment data:', json);
            } catch (e) {
                setError(e);
                console.error('Error fetching apartment:', e);
            }
        };

        if (apartId) {
            fetchApart();
        } else {
            console.error('No apartment ID provided');
        }
    }, [apartId]);

    if (error) {
        return <Navigate to="/error" />;
    }

    // Build the view only if the values have been retrieved and initialized in 'apart' state
    if (apart) {
        return (
            <div className="apart">
                <div className="apart__slideshow">
                    <Slideshow
                        pictures={apart.pictures}
                        alt={apart.description}
                    />
                </div>

                <div className="apart__profil">
                    <div className="apart__profil__name">
                        <div className="apart__profil__name__title">
                            <h2>{apart.title}</h2>
                            <p>{apart.location}</p>
                        </div>

                        <div className="apart__profil__name__tags">
                            {apart.tags.map((item, index) => (
                                <TagLocation key={index} tags={item} />
                            ))}
                        </div>
                    </div>

                    <div className="apart__profil__host">
                        <Rating rating={apart.rating} />

                        <div className="apart__profil__host__hoster">
                            <p>{apart.host['name']} </p>
                            <img
                                src={apart.host['picture']}
                                alt={'proprietaire'}
                            ></img>
                        </div>
                    </div>
                </div>

                <div className="apart__collapse">
                    <Collapse
                        title="Description"
                        arrow={arrowUp}
                        text={apart.description}
                    />
                    <Collapse
                        title="Équipement"
                        arrow={arrowUp}
                        text={apart.equipments.map((equipement, index) => (
                            <li key={index}>{equipement}</li>
                        ))}
                    />
                </div>
            </div>
        );
    }
    // Call the loader component while waiting for the data to be retrieved
    else {
        return <Loader />;
    }
};

export default Apart;
