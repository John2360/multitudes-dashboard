import React from 'react'
import { PieChart } from 'react-minimal-pie-chart';

function PieChartTile(props) {
    const { title } = props;

    const defaultLabelStyle = {
        fontSize: '4px',
        fontFamily: 'sans-serif',
        fill: 'white',
      };

    const colors = ["#0F388A", "#178CCB", "#B8E6FA", "#E2F4FC", "#14828C", "#16A0AC", "#60D0DA", "#B4E2E8", "#32A03E", "#84C234", "#007242", "#B4DC55"];

    return (
        <div className='data-tile' style={{width: '615px', maxHeight: '1000px'}}>
            <div className='row padding-ltr'>
                <div className='column' style={{width: "100%", justifyContent: 'flex-start', gap: 15}}>
                    <div className='stat-title' style={{fontSize: '1.5rem', fontWeight: '200'}}>
                        {title}
                    </div>
                    <PieChart
                        data={[
                            { title: 'Black', value: 2.526842103, color: colors[0] },
                            { title: 'Native American', value: 2.389209144, color: colors[1] },
                            { title: 'Asian', value: 10.50394862, color: colors[4] },
                            { title: 'Hispanic', value: 47.6733276, color: colors[5] },
                            { title: 'White', value: 25.17355784, color: colors[6] },
                            { title: 'Pacific', value: 0.280840648, color: colors[7] },
                            { title: 'Multiple', value: 5.844459276, color: colors[8] },
                        ]}
                        label={({ dataEntry }) => dataEntry.title}
                        style={{height: '380px'}}
                        labelStyle={defaultLabelStyle}
                    />
                </div>
            </div>
        </div>
    )
}

export default PieChartTile