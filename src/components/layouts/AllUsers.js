import React from 'react';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {firestoreConnect} from 'react-redux-firebase';

const AllUsers = (props) =>{
    const users = props.collection.ordered.users;
    console.log()
    
    return (
        <div className="container row">
            All Users:
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">User ID</th>
                    <th scope="col">First name</th>
                    <th scope="col">Last name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map((el)=>{
                        return (
                             <tr key={el.id}>
                                <th scope="row">{el.id}</th>
                                <td>{el.firstName}</td>
                                <td>{el.lastName}</td>
                                {/* <td>{}</td>
                                <td>{}</td> */}
                            </tr> 
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state =>{
    return{
        collection: state.firestore
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'users'}
    ])
)(AllUsers)