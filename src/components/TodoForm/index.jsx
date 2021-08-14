import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null
}

function TodoForm(props) {
    const {onSubmit} = props;
    const [value, setValue] = useState('');

    function handleValue (e) {
        setValue(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault(); //prevent reloading browser - nhan nut enter k bi reload  
        if(!onSubmit) return;

        const formValues = { // viet ntn de sau nay de them truong du lieu 
             title: value
        };
        onSubmit(formValues);

        // reset form
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} onChange={handleValue} />
        </form>
    );
}

export default TodoForm;