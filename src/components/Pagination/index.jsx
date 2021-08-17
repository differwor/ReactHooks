import React from 'react';
import PropTypes from 'prop-types';

Pagination.propTypes = {
    pagination: PropTypes.object.isRequired, //bat buoc
    onPageChange : PropTypes.func,
};

Pagination.defaultProps = {
    onPageChange: null
}

function Pagination(props) {
    const {pagination, onPageChange} = props;
    const {_page, _limit, _totalRows} = pagination; //_totalRows la tong so item, _limit so item tren moi trang
    const totalPages = Math.ceil(_totalRows / _limit ); //math.ceil la 41/10 = 4.1 no se lay ket qua la 5 ( lay gia tri len)

    function handlePageChange(newPage) {
        if(onPageChange) {
            onPageChange(newPage);
        }
    }

    return (
        <div>
            <button 
                disabled = {_page <= 1} 
                onClick = {() => handlePageChange(_page - 1 )} 
            > Prev </button>
            <button 
                disabled = {_page === totalPages} 
                onClick = {() => handlePageChange(_page + 1 )} 
            > Next </button>
        </div>
    );
}

export default Pagination;