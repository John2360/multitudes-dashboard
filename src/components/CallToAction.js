import React from 'react';
import StatTile from './StatTile';

function CallToAction() {
    return (
        <div className='cta-wrapper'>
            <h1 style={{width: '400px'}}>HOW ARE WE DOING?</h1>
            <StatTile title={"Total Multitudes Sessions"} stat={"2,237"} />
            <StatTile title={"Number of Active Proctors"} stat={"288"} />
            <div className='fireworks'></div>
            <div className='fireworks' style={{right: '490px', top: '-60px'}}></div>
        </div>
    )
}

export default CallToAction