import React from 'react';
import PropTypes from 'prop-types';
import useColorMagic from '../../hooks/useColorMagic';
import './main.scss';

MagicBox.propTypes = {};

function MagicBox() {
    const color = useColorMagic();

    return (
        <div className="magic-box" style={{ backgroundColor: color }}>

        </div>
    );
}

export default MagicBox;