import axios from 'axios';

export const registerNewUser = (user) => dispatch => {
    dispatch({ type: "USER_REGISTER_REQUEST" })

    axios.post("/api/users/register", user)
        .then(res => {
            dispatch({ type: "USER_REGISTER_SUCCESS" })
            console.log(res)
        })
        .catch(err => {
            dispatch({ type: "USER_REGISTER_FAILED", payload: err })
            console.log(err)
        })
}

export const loginUser = (user) => dispatch => {

    dispatch({ type: "USER_LOGIN_REQUEST" })

    axios.post("/api/users/login", user)
        .then(res => {
            dispatch({ type: "USER_LOGIN_SUCCESS" })
            localStorage.setItem('currentUser', JSON.stringify(res.data))
            window.location.href = '/'
        })
        .catch(err => {
            dispatch({ type: "USER_LOGIN_FAILED", payload: err })
            console.log(err)
        })

}

export const logoutUser = () => dispatch => {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('cartItems');
    dispatch({ type: "USER_LOGOUT" })

    window.location.href = '/login'
}

export const updateUser = (updateduser, userid) => dispatch => {
    dispatch({ type: "USER_UPDATE_REQUEST" })

    axios.post("/api/users/update", { updateduser, userid })
        .then(res => {
            dispatch({ type: "USER_UPDATE_SUCCESS" })
            console.log(res)
            window.location.reload()
        })
        .catch(err => {
            dispatch({ type: "USER_UPDATE_FAILED", payload: err })
            console.log(err)
        })
}

export const getAllUsers = () => dispatch => {

    dispatch({ type: "GET_ALLUSERS_REQUEST" })

    axios.post('/api/users/getallusers')
        .then(res => {
            console.log(res)
            dispatch({ type: "GET_ALLUSERS_SUCCESS", payload: res.data })
        })
        .catch(err => {
            dispatch({ type: "GET_ALLUSERS_FAILED", payload: err })
            console.log(err)
        })
}

export const deleteUsers = (userid) => dispatch => {

    dispatch({ type: "DELETE_USER_REQUEST" })

    axios.post('/api/users/deleteuser', { userid })
        .then(res => {
            dispatch({ type: "DELETE_USER_SUCCESS", payload: res.data })
            alert('User Deleted Successfuly !')
            window.location.reload()
        })
        .catch(err => {
            dispatch({ type: "DELETE_USER_FAILED", payload: err })
        })
}