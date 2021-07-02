export const registerNewUserReducer = (state = {}, action) => {

    switch (action.type) {
        case "USER_REGISTER_REQUEST": return {
            ...state,
            loading: true
        }
        case "USER_REGISTER_SUCCESS": return {
            ...state,
            loading: false,
            success: true
        }
        case "USER_REGISTER_FAILED": return {
            ...state,
            loading: false,
            error: 'User already registered'
        }
        default: return state
    }

}


export const loginReducer = (state = {}, action) => {

    switch (action.type) {
        case "USER_LOGIN_REQUEST": return {
            ...state,
            loading: true
        }
        case "USER_LOGIN_SUCCESS": return {
            ...state,
            loading: false,
            success: true
        }
        case "USER_LOGIN_FAILED": return {
            ...state,
            loading: false,
            error: 'Invalid Credentials !'
        }

        case "USER_LOGOUT": return {
            ...state
        }
        default: return state
    }

}

export const updateReducer = (state = {}, action) => {

    switch (action.type) {
        case "USER_UPDATE_REQUEST": return {
            ...state,
            loading: true
        }
        case "USER_UPDATE_SUCCESS": return {
            ...state,
            loading: false,
            success: true
        }
        case "USER_UPDATE_FAILED": return {
            ...state,
            loading: false,
            error: 'User already registered'
        }
        default: return state
    }

}

export const getAllUsersReducer = (state = {}, action) => {

    switch (action.type) {
        case "GET_ALLUSERS_REQUEST": return {
            ...state,
            loading: true
        }
        case "GET_ALLUSERS_SUCCESS": return {
            ...state,
            loading: false,
            users: action.payload
        }
        case "GET_ALLUSERS_FAILED": return {
            ...state,
            loading: false,
            error: action.payload
        }
        default: return state
    }

}

export const deleteUserReducer = (state = {}, action) => {

    switch (action.type) {
        case "DELETE_USER_REQUEST": return {
            ...state,
            loading: true
        }
        case "DELETE_USER_SUCCESS": return {
            ...state,
            loading: false,
            success: true
        }
        case "DELETE_USER_FAILED": return {
            ...state,
            loading: false,
            error: action.payload
        }
        default: return state
    }

}