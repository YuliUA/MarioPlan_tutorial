const initState={
    authError: null
}


const authReducer = (state=initState, action)=>{
    switch(action.type){
        case 'LOGIN_ERROR':
            return {
                ...state,
                authError:'Login failed'
            };
        case 'LOGIN_SUCCESS':
            console.log('Login success');
            return {
                ...state,
                authError: null
            };
        case 'SIGNOUT_SUCCESS':
            console.log('user was signed out');
            return state;
        case 'SIGNOUT_ERROR':
            console.log('some error', action.err);
            return state;
        case 'SIGNIN_SUCCESS':
            console.log('sign up user');
            return {
                ...state,
                authError: null
            };
        case 'SIGNUP_ERROR':
            console.log('sign up failed by error')
            return{
                ...state,
                authError: action.err.message
            }
        default:
            return state
    }
}


export default authReducer