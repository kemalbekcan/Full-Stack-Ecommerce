import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers, deleteUsers } from '../actions/userActions';
import Loader from '../components/Loader';
import Error from '../components/Error';

const Userslist = () => {
    const getallusersstate = useSelector(state => state.getAllUsersReducer);
    const { loading, users, error } = getallusersstate;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUsers())
    }, [])
    return (
        <div>
            <h2>Users List</h2>
            <table className="table table-bordered table-responsive-sm">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {loading && (<Loader />)}
                    {error && (<Error error='Something Went Wrong !' />)}
                    {users && (users.map(user => {
                        return <tr>
                            <td>{user._id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><i className="far fa-trash-alt" onClick={() => { dispatch(deleteUsers(user._id)) }}></i></td>
                        </tr>
                    }))}
                </tbody>
            </table>
        </div>
    )
}

export default Userslist
