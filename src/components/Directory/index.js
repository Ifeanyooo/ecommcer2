import React from 'react';
import Ifeanyi from './../../assets/ifeanyi.jpg';
import Titi from './../../assets/titi.jpg';
import './styles.scss';

const Directory = props => {
    return (
        <div className="directory">
            <div className="wrap">
            <div className="item"
                style={{
                    backgroundImage: `url(${Titi})`
                }}
            >
                <a>
                    Shop Womens
                </a>
            </div>
            <div className="item"
                style={{
                    backgroundImage: `url(${Ifeanyi})`
                }}
            >
                <a>
                    Shop Mens
                </a>
            </div>
            </div>

        </div>
    );
};

export default Directory;
