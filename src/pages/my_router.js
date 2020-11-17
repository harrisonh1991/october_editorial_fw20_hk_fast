import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Loadable from 'react-loadable';

const Loading = () => { return <div></div> };

const BitMen = Loadable({
	loader() {
		return import('./bit_men');
    },
    loading: Loading
}),
BitWomen = Loadable({
	loader() {
		return import('./bit_women');
    },
    loading: Loading
}),
SitMen = Loadable({
	loader() {
		return import('./sit_men');
    },
    loading: Loading
}),
SitWomen = Loadable({
	loader() {
		return import('./sit_men');
    },
    loading: Loading
});

const MyRouter = () => (
    <BrowserRouter>
        <Route path="/bit_men" component={BitMen} />
        <Route path="/bit_women" component={BitWomen} />
        <Route path="/sit_men" component={SitMen} />
        <Route path="/sit_women" component={SitWomen} />
    </BrowserRouter>
);

export default MyRouter;