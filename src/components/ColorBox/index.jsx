import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './ColorBox.scss';

ColorBox.propTypes = {
    
};

function newRandomColor() {
    const COLOR_LIST = ['deeppink', 'green', 'yellow', 'blue', 'orange'];
    const randomIndex = Math.trunc(Math.random() * 5); // math.trunc là lấy phần nguyên number, .random là lấy ngẫu nhiên số 0 <= x < 1
    return COLOR_LIST[randomIndex];
}

function ColorBox() {
    
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box-color') || 'deeppink';
        return initColor;
    });  //khởi tạo hook useState

    function handleBoxClick() {
        const newColor = newRandomColor(); // get random color -> set color
        setColor(newColor);

        // lưu giá trị lại mỗi khi load trang lưu ở localStorage
        localStorage.setItem('box-color', newColor);

    }

    return (
        <div 
            className = "color-box" 
            style={{ 
                backgroundColor: color 
            }} //kieu viet css inline style cua react
            onClick={handleBoxClick}
        >
        </div>
    );
}

export default ColorBox;

