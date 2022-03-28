import React from 'react';
import './style.css';

const Pie = ({type, size, value}) => {
    const pieClass = "ui pie w" + size + (type==='empty'?' empty':'');
    return (
        <div className={pieClass} data-value={value}>
            <span className='left' />
            <span className='right' />
        </div>
    )
}

export default Pie