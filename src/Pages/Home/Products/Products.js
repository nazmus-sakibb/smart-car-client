import React from 'react';
import engine from '../../../assets/images/products/engine.png';
import airFilter from '../../../assets/images/products/air-filter.png';
import break1 from '../../../assets/images/products/break.png';
import break2 from '../../../assets/images/products/break2.png';
import tire from '../../../assets/images/products/tire.png';
import battery from '../../../assets/images/products/battery.png';

const Products = () => {
    return (
        <div className='py-20'>
            <div className='text-center'>
                <p className="text-xl font-bold text-orange-600">Popular Products</p>
                <h2 className="text-5xl font-semibold mt-3 mb-5">Browse Our Products</h2>
                <p>The majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable.</p>
            </div>

            {/* products card */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mt-12'>
                {/* product card */}
                <div className='p-5 border shadow-xl rounded-xl'>
                    <div className="card card-compact">
                        <figure className='bg-base-200 py-7 rounded-lg'><img src={engine} alt="Product" className='h-40' /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center">Car Engine Plug</h2>
                            <p className='text-xl text-orange-600 font-semibold text-center'>$20.00</p>

                        </div>
                    </div>
                </div>
                <div className='p-5 border shadow-xl rounded-xl'>
                    <div className="card card-compact">
                        <figure className='bg-base-200 py-7 rounded-lg'><img src={airFilter} alt="Product" className='h-40' /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center">Car Air Filter</h2>
                            <p className='text-xl text-orange-600 font-semibold text-center'>$20.00</p>

                        </div>
                    </div>
                </div>
                <div className='p-5 border shadow-xl rounded-xl'>
                    <div className="card card-compact">
                        <figure className='bg-base-200 py-7 rounded-lg'><img src={break1} alt="Product" className='h-40' /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center">Car Break</h2>
                            <p className='text-xl text-orange-600 font-semibold text-center'>$20.00</p>

                        </div>
                    </div>
                </div>
                <div className='p-5 border shadow-xl rounded-xl'>
                    <div className="card card-compact">
                        <figure className='bg-base-200 py-7 rounded-lg'><img src={break2} alt="Product" className='h-40' /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center">Car Break</h2>
                            <p className='text-xl text-orange-600 font-semibold text-center'>$20.00</p>

                        </div>
                    </div>
                </div>
                <div className='p-5 border shadow-xl rounded-xl'>
                    <div className="card card-compact">
                        <figure className='bg-base-200 py-7 rounded-lg'><img src={tire} alt="Product" className='h-40' /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center">Car Tires</h2>
                            <p className='text-xl text-orange-600 font-semibold text-center'>$20.00</p>

                        </div>
                    </div>
                </div>
                <div className='p-5 border shadow-xl rounded-xl'>
                    <div className="card card-compact">
                        <figure className='bg-base-200 py-7 rounded-lg'><img src={battery} alt="Product" className='h-40' /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center">Car Battery</h2>
                            <p className='text-xl text-orange-600 font-semibold text-center'>$20.00</p>

                        </div>
                    </div>
                </div>
                




            </div>
        </div>
    );
};

export default Products;