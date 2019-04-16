/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {signOut} from '../../store/actions/authActions'

const SignInLinks =(props)=>{
    return (
        <ul className="right">
            <li><NavLink to='/create'>New Project</NavLink></li>
            <li><a href='' onClick={props.signOut}>LogOut</a></li>
            <li><NavLink to='/' className="btn btn-floating pink lighten-1">{props.auth.initials}</NavLink></li>
        </ul>
    )
}
const mapStateToProps = (state) =>{
    return{
        auth: state.firebase.profile
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        signOut: ()=>dispatch(signOut())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignInLinks)