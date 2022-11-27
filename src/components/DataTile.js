import React from 'react'

function DataTile(props) {
    const {icon, title, stat, goal, percent, color } = props;

    return (
        <div className='data-tile' style={{}}>
            <div className='row padding-ltr'>
                <div className='column' style={{width: "70%", justifyContent: 'flex-start', gap: 15}}>
                    <div className='stat-title'>
                        {title}
                    </div>
                    <div className='stat'>
                        {stat}
                    </div>
                </div>
                <div className='column' style={{width: "30%", justifyContent: 'flex-start', gap: 0}}>
                    <div className='data-tile-icon'>
                        {icon}
                    </div>
                </div>
            </div>
            <div>
                <div className='row' style={{justifyContent: 'flex-end', gap: 0, marginBlock: 2, paddingRight: 4}}>
                    <div className='stat-goal'>
                        of {goal}
                    </div>
                </div>
                <div className='progress-bar' style={{backgroundColor: color, width: percent*300}}></div>
            </div>
        </div>
    )
}

export default DataTile