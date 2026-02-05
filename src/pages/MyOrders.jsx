import React, { useState, useEffect } from "react";
import CommonBanner from "./CommonBanner";
import Footer from "./Footer";
import { api } from "../services/api";

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const customerUser = JSON.parse(localStorage.getItem('customerUser'));
    const email = customerUser ? customerUser.email : null;

    useEffect(() => {
        if (!email) {
            setLoading(false);
            return;
        }
        fetchOrders();
        // Auto-refresh every 5 seconds
        const interval = setInterval(fetchOrders, 5000);
        return () => clearInterval(interval);
    }, [email]);

    const fetchOrders = async () => {
        try {
            const response = await api.getOrdersByEmail(email);
            setOrders(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching orders:', error);
            setLoading(false);
        }
    };

    const getStatusBadge = (status) => {
        const styles = {
            pending: 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 border-yellow-600',
            accepted: 'bg-gradient-to-r from-green-400 to-green-500 text-green-900 border-green-600',
            rejected: 'bg-gradient-to-r from-red-400 to-red-500 text-red-900 border-red-600'
        };

        const icons = {
            pending: '⏳',
            accepted: '✓',
            rejected: '✗'
        };

        const labels = {
            pending: 'Preparing',
            accepted: 'Delivered successfully',
            rejected: 'Canceled'
        };

        return (
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm md:text-base font-bold border-2 ${styles[status]} shadow-lg`}>
                <span className="text-lg md:text-xl">{icons[status]}</span>
                {labels[status]}
            </div>
        );
    };

    if (!email) {
        return (
            <>
                <div className="mt-20 sm:mt-32 md:mt-40 lg:mt-60 xl:mt-80">
                    <CommonBanner title="My Orders" />
                </div>
                <div className="min-h-screen flex items-center justify-center px-4 py-20">
                    <div className="text-center bg-gradient-to-br from-sky-50 to-blue-50 p-8 md:p-12 rounded-2xl shadow-2xl border-2 border-sky-200 max-w-2xl">
                        <span className="text-6xl md:text-8xl mb-6 block">🔒</span>
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">Please Log In</h2>
                        <p className="text-gray-600 text-base md:text-xl mb-6">You need to be logged in to view your orders.</p>
                        <a
                            href="/admin"
                            className="inline-block bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-3 rounded-xl text-lg font-bold shadow-lg transform transition hover:scale-105"
                        >
                            Go to Login →
                        </a>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    if (loading) {
        return (
            <>
                <div className="mt-20 sm:mt-32 md:mt-40 lg:mt-60 xl:mt-80">
                    <CommonBanner title="My Orders" />
                </div>
                <div className="min-h-screen flex items-center justify-center">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-sky-600 mx-auto mb-4"></div>
                        <div className="text-2xl font-bold text-gray-700">Loading your orders...</div>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <div className="mt-20 sm:mt-32 md:mt-40 lg:mt-60 xl:mt-80">
                <CommonBanner title="My Orders" />
            </div>

            <div className="min-h-screen bg-gradient-to-br from-gray-50 via-sky-50 to-blue-50 px-4 md:px-8 lg:px-20 xl:px-40 py-12 md:py-20">
                {/* Header */}
                <div className="mb-8 md:mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-2 flex items-center gap-3">
                        <span className="text-4xl md:text-6xl">📦</span>
                        My Orders
                    </h1>
                    <p className="text-gray-600 text-sm md:text-lg">
                        Hi, <span className="font-bold text-sky-600">{customerUser.name}</span>! Here are your orders.
                    </p>
                </div>

                {/* Total Orders Badge */}
                <div className="mb-8">
                    <div className="inline-flex items-center gap-3 bg-white px-6 py-4 rounded-2xl shadow-lg border-2 border-sky-200">
                        <span className="text-3xl">🛍️</span>
                        <div>
                            <p className="text-gray-500 text-sm font-semibold">Total Orders</p>
                            <p className="text-3xl font-bold text-sky-600">{orders.length}</p>
                        </div>
                    </div>
                </div>

                {/* Orders List */}
                {orders.length === 0 ? (
                    <div className="bg-white rounded-2xl shadow-2xl p-12 md:p-20 text-center border-2 border-gray-200">
                        <span className="text-6xl md:text-8xl mb-6 block">📭</span>
                        <h2 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">No Orders Yet</h2>
                        <p className="text-gray-600 text-base md:text-xl mb-8">You haven't placed any orders yet. Start shopping now!</p>
                        <a
                            href="/foods"
                            className="inline-block bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-bold shadow-lg transform transition hover:scale-105"
                        >
                            Browse Foods →
                        </a>
                    </div>
                ) : (
                    <div className="space-y-6 md:space-y-8">
                        {orders.map((order) => (
                            <div
                                key={order._id}
                                className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-gray-200 hover:border-sky-300 transition-all duration-300 transform hover:-translate-y-1"
                            >
                                {/* Order Header */}
                                <div className="bg-gradient-to-r from-sky-500 to-blue-600 px-6 md:px-8 py-4 md:py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div>
                                        <p className="text-white text-sm md:text-base font-semibold mb-1">ORDER #{order._id.slice(-6).toUpperCase()}</p>
                                        <p className="text-white text-xs md:text-sm">
                                            {new Date(order.orderTime).toLocaleDateString('en-IN', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                                hour: '2-digit',
                                                minute: '2-digit'
                                            })}
                                        </p>
                                    </div>
                                    {getStatusBadge(order.status)}
                                </div>

                                {/* Order Body */}
                                <div className="p-6 md:p-8">
                                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
                                        {/* Order Items */}
                                        <div className="lg:col-span-2">
                                            <h3 className="text-lg md:text-2xl font-bold mb-4 text-gray-800 border-b-2 border-sky-200 pb-2">
                                                📋 ORDER ITEMS
                                            </h3>
                                            <div className="space-y-3">
                                                {order.foods.map((food, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="flex justify-between items-center bg-gradient-to-r from-sky-50 to-blue-50 p-4 rounded-xl border border-sky-200"
                                                    >
                                                        <div className="flex items-center gap-3">
                                                            <span className="w-8 h-8 md:w-10 md:h-10 bg-sky-500 text-white rounded-full flex items-center justify-center font-bold text-sm md:text-base">
                                                                {food.quantity}x
                                                            </span>
                                                            <span className="font-semibold text-gray-800 text-sm md:text-lg">{food.name}</span>
                                                        </div>
                                                        <span className="font-bold text-sky-600 text-base md:text-xl">₹{food.price * food.quantity}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Total Amount */}
                                        <div className="bg-gradient-to-br from-sky-50 to-blue-50 p-6 rounded-xl border-2 border-sky-200 h-fit">
                                            <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-800">Total Amount</h3>
                                            <div className="text-center">
                                                <p className="text-4xl md:text-5xl font-bold text-sky-600">₹{order.totalPrice}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Auto-refresh Note */}
                {orders.length > 0 && (
                    <div className="mt-8 bg-gradient-to-r from-blue-100 to-indigo-100 border-l-4 border-indigo-500 p-4 md:p-6 rounded-xl shadow-lg">
                        <div className="flex items-start gap-3">
                            <span className="text-2xl">ℹ️</span>
                            <div>
                                <p className="text-indigo-900 font-semibold text-sm md:text-base">Auto-refresh enabled</p>
                                <p className="text-indigo-700 text-xs md:text-sm mt-1">
                                    This page automatically refreshes every 5 seconds to show the latest order status.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </>
    );
};

export default MyOrders;
