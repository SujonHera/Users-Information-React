import React,{useState,useEffect} from 'react';
import Users from '../Users/Users';
import usersInformation from '../UserInformation/users'
import './Body.css'
import SiteBar from '../SiteBar/SiteBar';

const Body = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch(usersInformation)
            .then(response => response.json())
            .then(data => setUsers(data))
    }, [])

    
    const [cart, setCart] = useState([])
    const handleAddUsers = (user) =>{
        const newCart = [...cart, user]
        setCart(newCart)
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7 margin">
                    {
                        users.map(user => <Users className="my-5" user = {user} handleAddUsers = {handleAddUsers}></Users>)
                    }
                </div>
                <div className="col-md-5 ">
                    <div className="add-user margin-2 fixed-top-2">
                        <SiteBar cart= {cart}></SiteBar>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;