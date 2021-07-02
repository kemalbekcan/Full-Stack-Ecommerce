import React, { useState } from 'react';
import { registerNewUser } from '../actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import Error from '../components/Error';
import Success from '../components/Success';

const Registerscreen = () => {

    const registerstate = useSelector(state => state.registerNewUserReducer);
    const { loading, error, success } = registerstate;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');

    const dispatch = useDispatch();

    const register = (e) => {
        e.preventDefault();

        const user = {
            name: name,
            email: email,
            password: password
        }

        if (password == cpassword) {
            dispatch(registerNewUser(user))
        }
        else {
            alert('Password not matched')
        }

    }
    return (
        <div>
            <div className="row justify-content-center m-3">
                <div className="col-md-5 card p-3 shadow p-3 mb-5 bg-white rounded" style={{ marginTop: '100px' }}>
                    <div className="div">
                        <h2 style={{ display: 'inline' }} className="text-center m-3">Register</h2><i style={{ fontSize: '20px' }} class="fas fa-user-plus"></i>
                        {loading && (<Loader />)}
                        {error && (<Error error='User already registered !' />)}
                        {success && (<Success success='You are registration is successfull !' />)}
                        <form onSubmit={register}>
                            <input type="text" placeholder="name" required className="form-control" value={name} onChange={(e) => { setName(e.target.value) }} />
                            <input type="text" placeholder="email" required className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            <input type="password" placeholder="password" required className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            <input type="password" placeholder="confirm password" required className="form-control" value={cpassword} onChange={(e) => { setCpassword(e.target.value) }} />
                            <div className="text-end">
                                <button className="btn mt-3">REGISTER</button>
                            </div>
                        </form>
                    </div>
                    <a style={{ color: 'black' }} href="/login" className="m-3">Click To Login</a>
                </div>
            </div>
        </div>
    )
}

export default Registerscreen
