import React, { useEffect, useState } from 'react';
import { loginUser } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import Error from '../components/Error';
import Loader from '../components/Loader';

const Loginscreen = () => {
    const loginreducer = useSelector(state => state.loginReducer)

    const { error, loading } = loginreducer

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const login = (e) => {
        e.preventDefault();

        const user = {
            email: email,
            password: password
        }
        dispatch(loginUser(user))
    }


    useEffect(() => {
        if (localStorage.getItem('currentUser')) {
            window.location.href = '/'
        }
    }, [])

    return (
        <div>
            <div className="row justify-content-center m-3">
                <div className="col-md-4 card p-3 shadow p-3 mb-5 bg-white rounded" style={{ marginTop: '100px' }}>
                    <div className="div">
                        <h2 className="text-center m-3" style={{ display: 'inline' }}>Login</h2><i style={{ fontSize: '20px' }} class="fas fa-sign-in-alt"></i>
                        {error && (<Error error='Invalid Credentials !' />)}
                        {loading && (<Loader />)}
                        <form onSubmit={login}>
                            <input type="text" placeholder="email" required className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            <input type="password" placeholder="password" required className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            <div className="text-end">
                                <button className="btn mt-3">LOGIN</button>
                            </div>
                        </form>
                    </div>
                    <a style={{ color: 'black' }} href="/register" className="m-3">Click Here To Register</a>
                </div>
            </div>
        </div>
    )
}

export default Loginscreen
