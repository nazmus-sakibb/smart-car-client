import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/orders?email=${user?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [url]);


    return (
        <div>
            <h2 className="text-5xl">You have {orders.length}</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow
                                key={order._id}
                                order={order}
                            />)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Orders;