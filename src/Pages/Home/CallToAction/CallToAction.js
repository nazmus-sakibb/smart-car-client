import React from 'react';
import time from '../../../assets/icons/time.svg';
import phone from '../../../assets/icons/phone.svg';
import location from '../../../assets/icons/location.svg';

const CallToAction = () => {
    return (
        <div className="card w-full bg-zinc-950 text-primary-content my-10">
            <div className="card-body">
                <div className='md:flex justify-evenly'>
                    <div className='flex justify-between items-center'>
                        <img src={time} alt="" className='h-9 inline-block'/>
                        <div className='ml-2'>
                            <p><small>We are open monday-friday</small></p>
                            <h4 className="text-2xl">7:00 am - 9:00 pm</h4>
                        </div>
                    </div>

                    <div className='flex justify-between items-center'>
                        <img src={phone} alt="" className='h-9 inline-block'/>
                        <div className='ml-2'>
                            <p><small>Have a question?</small></p>
                            <h4 className="text-2xl">+2546 251 2658</h4>
                        </div>
                    </div>

                    <div className='flex justify-between items-center'>
                        <img src={location} alt="" className='h-9 inline-block'/>
                        <div className='ml-2'>
                            <p><small>Need a repair? our address</small></p>
                            <h4 className="text-2xl">Liza Street, New York</h4>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CallToAction;