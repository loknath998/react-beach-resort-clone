import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';

export default function Error(){
    return <Hero >
        <Banner title="404 Error page not found" subtitle="the page you are looking for is probably missing">
            <Link to="/" className="btn-primary">
                Take me back
            </Link>
        </Banner>
    </Hero>;
}