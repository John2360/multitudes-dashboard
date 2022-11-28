import React from 'react'

import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import { TabletMac, Computer, Equalizer, People, MilitaryTech, School, Language } from '@mui/icons-material';

import DataTile from './DataTile';
import DoubleDataTile from './DoubleDataTile';
import MapTile from './MapTile';
import PieChartTile from './PieChartTile';

import data from '../assets/data.json';

const red = "RGBA(219, 127, 152, 1)";
const green = "RGBA(70, 148, 124, 1)";
const blue = "RGBA(0, 43, 79, 1)";

function Dashboard() {
    const IconStyle = {width: '100%', height: '100%', fontWeight: 100, color: '#052049'};
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const api_key = process.env.REACT_APP_GOOGLE_KEY;
   
    return (
        <Container sx={{p: 10}} className="container">
            <div className="row" style={{gap: '0px', height: 'auto'}}>
                <div className='column' style={{width: "60%",  display: `${page == 1 ? "flex" : "none"}`}}>
                    <DoubleDataTile title={"Total Multitudes Sessions"} stat={"2,237"} goal={"3,600"} percent={2237/3600} color={green} icon={<Equalizer sx={IconStyle}/>} />
                    <div style={{display: 'flex', flexDirection: 'row', gap: 20}}>
                        <DataTile title={"English Language Screener Sessions"} stat={"1,585"} goal={"3,600"} percent={1585/3600} color={blue} icon={<h2 sx={IconStyle} className='text-icon'>EN</h2>} />
                        <DataTile  title={"Spanish Language Screener Sessions"} stat={"782"} goal={"1,200"} percent={782/1200} color={green} icon={<h2 sx={IconStyle} className='text-icon'>ES</h2>} />
                    </div>
                </div>
                <div className='column' style={{width: "60%", flexDirection: 'row', flexWrap: 'wrap', display: `${page == 2 ? "flex" : "none"}`}}>
                    <DataTile title={"Total Number of Schools"} stat={"37"} goal={"40"} percent={37/40} color={green} icon={<School sx={IconStyle}/>}/>
                    <DataTile  title={"Number of Dual Language Schools"} stat={"2,000"} goal={"4,000"} percent={0.80} color={green} icon={<Language sx={IconStyle}/>}/>
                    <PieChartTile title={"All School Race Ethnicity Breakdown"} />
                </div>
                <div className='column' style={{width: "60%", display: `${page == 3 ? "flex" : "none"}`}}>
                    <DoubleDataTile title={"Total Number of iPads"} stat={"2,000"} goal={"4,000"} percent={0.60} color={blue} icon={<TabletMac sx={IconStyle}/>} />
                    <div style={{display: 'flex', flexDirection: 'row', gap: 20}}>
                        <DataTile  title={"Number of Active Proctors"} stat={"288"} goal={"288"} percent={1} color={green} icon={<People sx={IconStyle}/>} />
                        <DataTile  title={"Fidelity Tested and Passed Proctors"} stat={"200"} goal={"600"} percent={.33} color={red} icon={<MilitaryTech sx={IconStyle}/>} />
                    </div>
                </div>
                <div className='column' style={{width: "40%", position: "relative"}}>
                    <MapTile data={data["schools"]} api_key={api_key} />
                    <div className='ucsf-logo'></div>
                </div>
            </div>
            <div className='footer'>
                <Pagination sx={{marginTop: 3}}
                    count={3}
                    page={page}
                    onChange={handleChange}
                />
                <p>Last updated on November, 27th, 2022</p>
            </div>
        </Container>
    );
}

export default Dashboard