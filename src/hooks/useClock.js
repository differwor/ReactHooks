import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

useClock.propTypes = {};

function formatDate(date) {

    const hours = `0${date.getHours()}`.slice(-2);
    const minutes = `0${date.getMinutes()}`.slice(-2);
    const seconds = `0${date.getSeconds()}`.slice(-2);

    return `${hours}:${minutes}:${seconds}`;
}

function useClock() {
    const [timeString, setTimeString] = useState('');

    useEffect(() => {

        const interval = setInterval(() => {
            const now = new Date();
            const newTimeString = formatDate(now);
            setTimeString(newTimeString);
        }, 1000)

        //cleanup
        return () => {
            console.log('Clock clean up');
            clearInterval(interval);
        }

    }, [])

    return { timeString };
}

export default useClock;