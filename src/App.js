import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import BitMen from './pages/bit_men';
import BitWomen from './pages/bit_women';
import SitMen from './pages/sit_men';
import SitWomen from './pages/sit_women';
import './App.scss';

const App = () => (
    <BrowserRouter>
        <Route path="/bit_men" component={BitMen} />
        <Route path="/bit_women" component={BitWomen} />
        <Route path="/sit_men" component={SitMen} />
        <Route path="/sit_women" component={SitWomen} />
    </BrowserRouter>
);

export default App;