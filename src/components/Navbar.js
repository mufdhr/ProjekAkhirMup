import React from "react";
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto p-4 flex justify-between items-center">
                <Link to="/" className="text-2xl fron-blod text-pink-300">Say Management</Link>
                <div className="space-x-4">
                    <Link to="/Say" className="text-gray-600 hover:text-blue-600">Say</Link>
                    <Link to="/Create-Say" className="text-gray-600 hover:text-pink-300">Create Say</Link>
                </div>
            </div>
        </nav>
    )
}