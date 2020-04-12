import React from 'react';
import './sass-style.scss'
const SassComponent = () => {
    return (
        <div className="SassComponent">
            <div className="box red" />
            <div className="box orange" />
            <div className="box yellow" />
            <div className="box green" />
        </div>
    )
}
const Chapter9 = () => {
    return (
        <div>
            <h1> Chapter 9 - Styled Components </h1>

            <SassComponent />
        </div>
    );
};

export default Chapter9;