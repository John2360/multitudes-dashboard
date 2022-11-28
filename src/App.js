import React from 'react'

import Dashboard from './components/Dashboard';
import CallToAction from './components/CallToAction';

import './App.css';

function App() {
    const queryParams = new URLSearchParams(window.location.search);
    const isCTA = queryParams.get('cta') != undefined;

    if (isCTA) {
        return <CallToAction />
    } else {
        return <Dashboard />
    }
}

export default App;