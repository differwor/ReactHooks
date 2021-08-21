import React from 'react';
import PropTypes from 'prop-types';
import useClock from '../../hooks/useClock';
import './main.scss';

Clock.propTypes = {};

function Clock(props) {
    const { timeString } = useClock();

    return (
        <p className="magic">{timeString}</p>
    );
}

export default Clock;