import React from 'react'
// import Article from './components/article/Article';
// import Brand from './components/brand/Brand';
// import CTA from './components/cta/CTA';
// import Feature from './components/Feature';
// import Navbar from './components/navbar/Navbar';
//import {Article, Brand, CTA, Feature, Navbar} from './components'

import { Blog, Footer, Header, Possibility, Features, WhatGPT3 } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css'
const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <h1>Hello all</h1>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Blog />
            <Footer />
        </div>

    )
}
export default App;