import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import '@css/index.scss';
import Navbar from './js/component/Navbar';
import AnimatedRoute from './js/routes/AnimatedRoute';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<div className="app">
    <BrowserRouter>
        <Navbar />
        <AnimatedRoute />
    </BrowserRouter>
</div>, document.getElementById('root'));
