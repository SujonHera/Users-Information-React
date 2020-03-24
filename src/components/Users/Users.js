import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './Users.css'

const Users = (props) => {
    let {id,img, name, phone, email, website, address, company, salary} = props.user;
    return (
        <div className="users-container">

            <div className="user-style my-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src={img} className="img-fluid " alt="" />
                        <h2>{name} </h2>
                        <p> Phone: {phone} </p>
                        <button className="btn btn-success" onClick={() => props.handleAddUsers(props.user)}> Add List  <FontAwesomeIcon icon={faPlus} /> </button>  <span> ID: {id} </span>
                    </div>
                    <div className="col-md-6 mt-5">
                        <p>Email: {email} </p>
                        <p>Website: {website} </p>
                        <p>Company: {company.name} </p>
                        <p> Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}  </p>
                        <p> Salary: ${salary} </p>
                    </div>
                </div>
            </div>


        </div>
    )
};

export default Users;