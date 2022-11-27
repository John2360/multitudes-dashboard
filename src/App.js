import React from 'react'
import './App.css';

import Container from '@mui/material/Container';
import Pagination from '@mui/material/Pagination';

import DataTile from './components/DataTile';
import DoubleDataTile from './components/DoubleDataTile';
import MapTile from './components/MapTile';
import PieChartTile from './components/PieChartTile';

import data from './assets/data.json';

const red = "RGBA(219, 127, 152, 1)";
const green = "RGBA(70, 148, 124, 1)";
const blue = "RGBA(0, 43, 79, 1)";

function App() {
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <Container sx={{p: 10}} className="container">
            <div className="row" style={{gap: '0px', height: 'auto'}}>
                <div className='column' style={{width: "60%", flexDirection: 'row', flexWrap: 'wrap', display: `${page == 1 ? "flex" : "none"}`}}>
                    <DoubleDataTile title={"Total Multitudes Sessions"} stat={"2,000"} goal={"4,000"} percent={0.60} color={blue} />
                    <DataTile title={"English Language Screener Sessions"} stat={"2,000"} goal={"4,000"} percent={0.60} color={red} />
                    <DataTile  title={"Spanish Language Screener Sessions"} stat={"2,000"} goal={"4,000"} percent={0.80} color={green} />
                    <DataTile  title={"Number of Active Proctors"} stat={"2,000"} goal={"4,000"} percent={0.80} color={green} />
                    <DataTile  title={"Number of Fidelity Tested Proctors"} stat={"2,000"} goal={"4,000"} percent={0.80} color={green} />
                </div>
                <div className='column' style={{width: "60%", flexDirection: 'row', flexWrap: 'wrap', display: `${page == 2 ? "flex" : "none"}`}}>
                    <DataTile title={"Total Number of Schools"} stat={"2,000"} goal={"4,000"} percent={0.60} color={red} />
                    <DataTile  title={"Number of Dual Language Schools"} stat={"2,000"} goal={"4,000"} percent={0.80} color={green} />
                    <PieChartTile title={"All School Race Ethnicity Breakdown"} stat={"2,000"} goal={"4,000"} percent={0.80} color={green} />
                </div>
                <div className='column' style={{width: "60%", flexDirection: 'row', flexWrap: 'wrap', display: `${page == 3 ? "flex" : "none"}`}}>
                    <DoubleDataTile title={"Total Number of iPads"} stat={"2,000"} goal={"4,000"} percent={0.60} color={blue} />
                </div>
                <div className='column' style={{width: "40%"}}>
                    <MapTile data={data["schools"]} />
                </div>
            </div>
            <Pagination sx={{marginTop: 3}}
                count={3}
                page={page}
                onChange={handleChange}
            />
        </Container>
    );
}

export default App;