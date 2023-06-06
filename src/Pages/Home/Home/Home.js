import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import CallToAction from '../CallToAction/CallToAction';
import Products from '../Products/Products';

const Home = () => {
    return (
        <div>
            <Banner />
            <About />
            <Services />
            <CallToAction />
            <Products />
        </div>
    );
};

export default Home;