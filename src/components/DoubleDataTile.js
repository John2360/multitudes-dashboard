import React from 'react'
import ComputerIcon from '@mui/icons-material/Computer';

function DoubleDataTile(props) {
    const {icon, title, stat, goal, percent, color } = props;

    return (
        <div className='data-tile' style={{width: '615px', maxHeight: '240px'}}>
            <div className='row padding-ltr'>
                <div className='column' style={{width: "70%", justifyContent: 'flex-start', gap: 15}}>
                    <div className='stat-title' style={{fontSize: '1.5rem', fontWeight: '200'}}>
                        {title}
                    </div>
                    <div className='stat' style={{fontSize: '5rem'}}>
                        {stat}
                    </div>
                </div>
                <div className='column' style={{width: "30%", justifyContent: 'flex-start', gap: 0}}>
                    <div className='data-tile-icon'>
                        <ComputerIcon sx={{width: '100%', height: '100%', fontWeight: 100, color: '#052049'}} />
                    </div>
                </div>
            </div>
            <div>
                <div className='row' style={{justifyContent: 'flex-end', gap: 0, marginBlock: 2, paddingRight: 4}}>
                    <div className='stat-goal'>
                        of {goal}
                    </div>
                </div>
                <div className='progress-bar' style={{backgroundColor: color, width: percent*640}}></div>
            </div>
        </div>
    )
}

export default DoubleDataTile