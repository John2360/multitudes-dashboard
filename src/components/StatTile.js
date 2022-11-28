import React from 'react'

function StatTile(props) {
    const {stat, title} = props;
    
    return (
        <div className='cta-stat-box'>
            <h2>{stat}</h2>
            <p>{title}</p>
        </div>
    )
}

export default StatTile