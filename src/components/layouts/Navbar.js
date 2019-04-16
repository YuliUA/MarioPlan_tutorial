import React from 'react';
import {Link} from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';
import {connect} from 'react-redux'

const Navbar =(props)=>{
    const {auth}=props
    const links= auth.uid ? <SignInLinks/>:<SignOutLinks/>
    return (
        <nav className="grey darken-3">
            <div className="container-fluid right">
                <Link to='/allusers' className="btn pink">All</Link>
            </div>
            <div className="container">
                <Link exact="true" to='/' className="brand-logo left">MarioPlan</Link>
                { links }
            </div>
        </nav>
    )
}
const mapStateToProps=(state)=>{
    return{
        auth: state.firebase.auth
    }
}
export default connect(mapStateToProps)(Navbar)