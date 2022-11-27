import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

function PieChartTile(props) {
    const {icon, title, stat, goal, percent, color } = props;

    const defaultLabelStyle = {
        fontSize: '5px',
        fontFamily: 'sans-serif',
        fill: 'white',
      };

    return (
        <div className='data-tile' style={{width: '615px', maxHeight: '1000px'}}>
            <div className='row padding-ltr'>
                <div className='column' style={{width: "100%", justifyContent: 'flex-start', gap: 15}}>
                    <div className='stat-title' style={{fontSize: '1.5rem', fontWeight: '200'}}>
                        {title}
                    </div>
                    <PieChart
                        data={[
                            { title: 'One', value: 10, color: '#E38627' },
                            { title: 'Two', value: 15, color: '#C13C37' },
                            { title: 'Three', value: 20, color: '#6A2135' },
                        ]}
                        label={({ dataEntry }) => dataEntry.title}
                        style={{height: '400px'}}
                        labelStyle={defaultLabelStyle}
                    />
                </div>
            </div>
        </div>
    )
}

export default PieChartTile