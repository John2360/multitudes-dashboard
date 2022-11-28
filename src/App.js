import React from 'react'
import env from "react-dotenv";
import './App.css';


import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';
import { TabletMac, Computer, Equalizer, People, MilitaryTech, School, Language } from '@mui/icons-material';

import DataTile from './components/DataTile';
import DoubleDataTile from './components/DoubleDataTile';
import MapTile from './components/MapTile';
import PieChartTile from './components/PieChartTile';

import data from './assets/data.json';

const red = "RGBA(219, 127, 152, 1)";
const green = "RGBA(70, 148, 124, 1)";
const blue = "RGBA(0, 43, 79, 1)";

function App() {
    const IconStyle = {width: '100%', height: '100%', fontWeight: 100, color: '#052049'};
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };
    const api_key = process.env.REACT_APP_GOOGLE_KEY;
    console.log(api_key);

    return (
        <Container sx={{p: 10}} className="container">
            <div className="row" style={{gap: '0px', height: 'auto'}}>
                <div className='column' style={{width: "60%", flexDirection: 'row', flexWrap: 'wrap', display: `${page == 1 ? "flex" : "none"}`}}>
                    <DoubleDataTile title={"Total Multitudes Sessions"} stat={"2,000"} goal={"4,000"} percent={0.60} color={blue} icon={<Equalizer sx={IconStyle}/>} />
                    <DataTile title={"English Language Screener Sessions"} stat={"2,000"} goal={"4,000"} percent={0.60} color={red} icon={<h2 sx={IconStyle} className='text-icon'>EN</h2>} />
                    <DataTile  title={"Spanish Language Screener Sessions"} stat={"2,000"} goal={"4,000"} percent={0.80} color={green} icon={<h2 sx={IconStyle} className='text-icon'>ES</h2>} />
                    <DataTile  title={"Number of Active Proctors"} stat={"2,000"} goal={"4,000"} percent={0.80} color={green} icon={<People sx={IconStyle}/>} />
                    <DataTile  title={"Number of Fidelity Tested Proctors"} stat={"2,000"} goal={"4,000"} percent={0.80} color={green} icon={<MilitaryTech sx={IconStyle}/>} />
                </div>
                <div className='column' style={{width: "60%", flexDirection: 'row', flexWrap: 'wrap', display: `${page == 2 ? "flex" : "none"}`}}>
                    <DataTile title={"Total Number of Schools"} stat={"2,000"} goal={"4,000"} percent={0.60} color={red} icon={<School sx={IconStyle}/>}/>
                    <DataTile  title={"Number of Dual Language Schools"} stat={"2,000"} goal={"4,000"} percent={0.80} color={green} icon={<Language sx={IconStyle}/>}/>
                    <PieChartTile title={"All School Race Ethnicity Breakdown"} />
                </div>
                <div className='column' style={{width: "60%", flexDirection: 'row', flexWrap: 'wrap', display: `${page == 3 ? "flex" : "none"}`}}>
                    <DoubleDataTile title={"Total Number of iPads"} stat={"2,000"} goal={"4,000"} percent={0.60} color={blue} icon={<TabletMac sx={IconStyle}/>} />
                </div>
                <div className='column' style={{width: "40%"}}>
                    <MapTile data={data["schools"]} api_key={api_key} />
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

export default App;