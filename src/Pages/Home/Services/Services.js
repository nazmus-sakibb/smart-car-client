import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='py-20'>
            <div className='text-center'>
                <p className="text-xl font-bold text-orange-600">Service</p>
                <h2 className="text-5xl font-semibold">Our Sercice Area</h2>
                <p>The majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable.</p>
            </div>

            {/* service card */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default Services;