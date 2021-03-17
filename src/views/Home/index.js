import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil'
import { spotifyAuthCall } from '../../utils/index';

import { 
    isAuthenticated as isAuthenticatedAtom, 
    spotifyRefreshToken as spotifyRefreshTokenAtom, 
    spotifyTokenResponse as spotifyTokenResponse
} from '../../recoil/auth/atoms';

import homeImage from '../../assets/images/home.png';
import './style.css';

const spotifyUrl = `https://accounts.spotify.com/authorize?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&response_type=code&redirect_uri=${process.env.REACT_APP_SPOTIFY_CALLBACK_HOST}&scope=user-read-private`;

export const Home = () => {
    const location = useLocation();

    const [isAuthenticated, setIsAuthenticated] = useRecoilState(isAuthenticated);

    const authenticateUser = async (spotifyCode) => {
        const result = await spotifyAuthCall(spotifyCode);
        //isAuthenticated, responseToken, responseRefresh
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(location.search);
        const spotifyCode = urlParams.get('code');

        if (spotifyCode) authenticateUser(spotifyCode);
    }, [location.search])

    const handleLoginClick = () => {
        window.location.replace(spotifyUrl);
    }


    return (
        <div className="home-container">
            <div className="home-left-child">
                <h3>Bienvenido/a de nuevo</h3>
                <h6>Identificate para encontrar tu musica favorita</h6>
                <button onClick={handleLoginClick}>Iniciar sesion</button>
            </div>
            <div className="home-right-child" style={{ backgroundImage: `url(${homeImage})` }}>

            </div>
        </div>
    )
}
