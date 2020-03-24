import React from 'react';
import './SiteBar.css'
const siteBar = (props) => {
    let cart = props.cart;
    let total = 0;
    for(let i = 0; i < cart.length; i++){
        const userSalary = cart[i]
        total = total + Number(userSalary.salary);
    }
    return (
        <div className="site-bar">
            <h2>Users Salary Count</h2>
            <p>Added users: {cart.length} </p>
            <h6>Total Salary: {total.toFixed(2)} </h6>
        </div>
    );
};

export default siteBar;