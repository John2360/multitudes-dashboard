import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from './components/Dashboard';
import CallToAction from './components/CallToAction';

import './App.css';

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/cta" element={<CallToAction />} />
                <Route path="*" element={<Dashboard />} />
            </Routes>
        </Router>
    );
}

export default App;