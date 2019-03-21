import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';

class UserHeader extends React.Component{
    render(){
        console.log("props in UH", this.props) 
        const {user}=this.props;
        if(!user){
            return null;
        }
        return (
            <div>
                <p>User Id: {user.id}  User Name:{user.name}</p>
            </div>
        )
    }
   
}

const mapStateToProps=(state,ownProps)=>{
    return {user:state.users.find(user=>user.id===ownProps.userId)}
}

export default connect(mapStateToProps,{fetchUser})(UserHeader);