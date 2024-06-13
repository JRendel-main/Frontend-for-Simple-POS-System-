import React from 'react'
import { Link } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'

function HomePage() {
    return (
        <div>
            <MainLayout>
                <h1>Welcome to Simple POS System</h1>
                <p className="lead">
                    This is a simple POS system for business. It is built using React and NodeJS.
                </p>
                <p>
                    <strong>Features:</strong>
                </p>
                <ul className="list-unstyled">
                    <li>View products</li>
                    <li>Add products to cart</li>
                    <li>Remove products from cart</li>
                    <li>View total amount</li>
                    <li>Print receipt</li>
                </ul>
                <Link to="/pos" className="btn btn-success">Go to POS</Link>
            </MainLayout>
        </div>
    )
}

export default HomePage
