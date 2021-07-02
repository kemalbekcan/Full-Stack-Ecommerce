import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../actions/userActions';

const Navbar = () => {
    const cartreducer = useSelector(state => state.cartReducer)
    const { cartItems } = cartreducer;

    const currentUser = JSON.parse(localStorage.getItem('currentUser'))

    const dispatch = useDispatch();

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">Shop</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="fas fa-bars" style={{ color: 'white' }}></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">

                        <div className="navbar-nav ml-auto">

                            {currentUser ? (<div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i style={{color:'white'}} className="fas fa-user"></i> {currentUser.name}
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="/profile">Profile</a>
                                    <a className="dropdown-item" href="/orders">Orders</a>
                                    <li className="dropdown-item" onClick={() => dispatch(logoutUser())}>Logout <i class="fas fa-sign-out-alt"></i></li>
                                </div>
                            </div>) : (<li className="nav-item">
                                <a className="nav-link" href="/login">Login</a>
                            </li>)}

                            <li className="nav-item">
                                <a className="nav-link" href="/cart"><i className="fas fa-shopping-cart"></i> {cartItems.length}</a>
                            </li>

                        </div>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;