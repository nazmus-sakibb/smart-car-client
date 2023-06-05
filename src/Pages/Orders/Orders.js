import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const { user, logout } = useContext(AuthContext);


    useEffect(() => {
        fetch(`http://localhost:5000/orders?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logout();
                }
                return res.json();
            })
            .then(data => {
                // console.log('received', data);
                setOrders(data);
            });
    }, [user?.email, logout]);

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure, you want to cancel this order?");
        if (proceed) {
            fetch(`http://localhost:5000/orders/${id}`, {
                method: "DELETE",
                headers: {
                    authorization: `Bearer ${localStorage.getItem('token')}`
                }
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
    };


    const handleStatusUpdate = id => {
        fetch(`http://localhost:5000/orders/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(odr => odr._id !== id);
                    const approving = orders.find(odr => odr._id === id);
                    approving.status = 'Approved';

                    const newOrders = [approving, ...remaining];
                    setOrders(newOrders);
                }
            })
    }


    return (
        <div>
            <h2 className="text-5xl"> You have: {orders.length} orders</h2>

            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Service</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map(order => <OrderRow
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                            />)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default Orders;