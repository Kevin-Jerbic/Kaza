/* eslint-disable react/no-unescaped-entities */
import { Link } from 'react-router-dom';
import './style.css';

const NotFound = () => {
    return (
        <div className="error_container">
            <div className="error_container__body">
                <p className="error_container__body__message_number">404</p>
                <p className="error_container__body__message_oups">
                    Oupsi ! La page que vous demandez n'existe pas.
                </p>
                <p className="error_container__body__message_back">
                    <Link to="/home">Retourner sur la page d'accueil</Link>
                </p>
            </div>
        </div>
    );
};

export default NotFound;
