import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';

class UserHeader extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const id=this.props.userId;
        this.props.fetchUser(id);
        console.log(id);
    }

    render(){
        const {user}=this.props;

        if(!user){
            return null;
        }
        return (
            <div>
                <p>User Id: {user.userId} User Name:{user.name}</p>
            </div>
        )
    }
   
}

const mapStateToProps=(state,ownProps)=>{
    return {user:state.users.find(user=>user.id===ownProps.userId)}
}

export default connect(mapStateToProps,{fetchUser})(UserHeader);