import React from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import Userslist from './Userslist';
import Productslist from './Productslist';
import Addproduct from './Addproduct';
import Orderslist from './Orderslist';

const Adminscreen = () => {
    return (
        <div>
            <div className="row justify-content-center mt-2">
                <div className="col-md-10">
                    <h2>Admin Panel</h2>
                    <ul className="admin">
                        <li><Link to="/admin/userslist">Users List</Link></li>
                        <li><Link to="/admin/productslist">Products List</Link></li>
                        <li><Link to="/admin/addnewproduct">Add New Product</Link></li>
                        <li><Link to="/admin/orderslist">Orders List</Link></li>
                    </ul>
                    <Switch>
                        <Route path='/admin/userslist' component={Userslist} />
                        <Route path='/admin/productslist' component={Productslist} />
                        <Route path='/admin/addnewproduct' component={Addproduct} />
                        <Route path='/admin/orderslist' component={Orderslist} />
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Adminscreen
