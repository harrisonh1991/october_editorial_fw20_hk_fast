import React from 'react';
import "core-js/stable";
import "regenerator-runtime/runtime";

import BitMen from './pages/bit_men';
import BitWomen from './pages/bit_women';
import SitMen from './pages/sit_men';
import SitWomen from './pages/sit_women';
import './App.scss';

const getPage = () => {
    switch(process.env.REACT_APP_PAGE){
        case 'bit_men':
            return <BitMen />;
        case 'bit_women':
            return <BitWomen />;
        case 'sit_men':
            return <SitMen />;
        case 'sit_women':
            return <SitWomen />;
    }
}

const App = () => (
    <article className="App">
        {getPage()}
    </article>
);

export default App;