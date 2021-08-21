import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

useColorMagic.propTypes = {};

function randomColor(currentColor) {
    const list = ['red', 'orange', 'blue', 'yellow', 'purple']
    const currentIndex = list.indexOf(currentColor);
    let newIndex = currentIndex;

    while (newIndex === currentIndex) {
        newIndex = Math.trunc(Math.random() * 5); // random : 0 - 4
    }

    return list[newIndex];
}

function useColorMagic() {
    const [color, setColor] = useState('transparent');
    const colorRef = useRef('');

    //change color every 1 second
    useEffect(() => {
        const colorInterval = setInterval(() => {
            const newColor = randomColor(colorRef.current);
            colorRef.current = newColor;

            setColor(newColor);
        }, 500)

        //cleanupp
        return () => {
            clearInterval(colorInterval);
        }
    }, [])

    return color;
}

export default useColorMagic;