import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
    return (
        <div className="hero py-12 overflow-hidden">
            <div className="hero-content flex-col lg:flex-row">
                <div className='w-1/2 relative h-auto'>
                    <img src={person} className="rounded-lg shadow-2xl w-4/5 h-full" alt='' />
                    <img src={parts} className="rounded-lg shadow-2xl absolute right-10 top-1/2 w-3/5 border-8" alt='' />
                </div>
                <div className='w-1/2'>
                    <p className='text-xl text-orange-600 font-bold mb-5'>About Us</p>
                    <h1 className="text-5xl font-bold">
                        We are qualified <br />
                        & of experience <br />
                        in this field
                    </h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="pb-6">The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    <button className="btn btn-primary">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;