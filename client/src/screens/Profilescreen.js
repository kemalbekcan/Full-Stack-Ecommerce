import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../actions/userActions';
import Error from '../components/Error';
import Loader from '../components/Loader';
import Success from '../components/Success';

const Profilescreen = () => {
    const loginstate = useSelector(state => state.loginReducer);
    const updatereducer = useSelector(state => state.updateReducer);
    const { loading, error, success } = updatereducer;
    const currentUser = loginstate.currentUser;
    const dispatch = useDispatch();

    const [name, setName] = useState(currentUser.name)
    const [email, setEmail] = useState(currentUser.email)
    const [password, setPassword] = useState('')
    const [cpassword, setCpassword] = useState('')

    const update = (e) => {
        e.preventDefault();
        if (password == cpassword) {
            const updateduser = {
                name: name,
                email: email,
                password: password,
            }
            dispatch(updateUser(updateduser, currentUser._id))
        }
        else {
            alert('Password Not Matched !')
        }

    }
    return (
        <div>
            <div className="row justify-content-center">
                <div className="col-md-5 card p-3" style={{ marginTop: '150px' }}>
                    <div className="div">
                        <h2 className="text-center m-3">Update</h2>
                        {loading && (<Loader />)}
                        {error && (<Error error='Something Went Wrong !' />)}
                        {success && (<Success success='Your Details Updated Successfully, Please re-login !' />)}
                        <form onSubmit={update}>
                            <input type="text" placeholder="name" required className="form-control" value={name} onChange={(e) => { setName(e.target.value) }} />
                            <input type="text" placeholder="email" required className="form-control" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                            <input type="password" placeholder="password" required className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                            <input type="password" placeholder="confirm password" required className="form-control" value={cpassword} onChange={(e) => { setCpassword(e.target.value) }} />
                            <div className="text-end">
                                <button className="btn mt-3">UPDATE</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profilescreen
