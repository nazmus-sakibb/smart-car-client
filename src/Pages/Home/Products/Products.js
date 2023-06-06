import React from 'react';

const Products = () => {
    return (
        <div className='py-20'>
            <div className='text-center'>
                <p className="text-xl font-bold text-orange-600">Service</p>
                <h2 className="text-5xl font-semibold">Our Sercice Area</h2>
                <p>The majority have suffered alteration in some form, by injected humour, <br /> or randomised words which don't look even slightly believable.</p>
            </div>

            {/* service card */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
                <div className="card card-compact w-96 bg-base-100 shadow-xl">
                    <figure><img src='' alt="Product" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">title</h2>
                        <p className='text-xl text-orange-600 font-semibold'>Price: $</p>
                        {/* <div className="card-actions justify-end">
                            <Link to={`/checkout/${_id}`}>
                                <button className="btn btn-primary">Order</button>
                            </Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;