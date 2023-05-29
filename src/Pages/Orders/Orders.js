import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user } = useContext(AuthContext);

    // const url = `http://localhost:5000/orders?email=${user?.email}`
    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user?.email]);

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure, you want to cancel this order?");
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert("deleted successfully");
                        const remaining = orders.filter(odr => odr._id !== id);
                        setOrders(remaining);
                    }
                })

        }
    }


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
                                handleDelete={handleDelete}
                            />)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Orders;