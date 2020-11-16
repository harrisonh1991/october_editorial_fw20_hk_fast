import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import bit_men from './pages/bit_men';
import bit_women from './pages/bit_women';
import './App.scss';

const App = () => (
    <BrowserRouter>
        <Route path="/bit_men" component={bit_men} />
        <Route path="/bit_women" component={bit_women} />
    </BrowserRouter>
);

export default App;