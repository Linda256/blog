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
    }

    render(){
        return (
            <div>
                <p>User Id: {this.props.userId} User Name:{this.props.user.name}</p>
            </div>
        )
    }
   
}

const mapStateToProps=(state)=>{
    return {user:state.user}
}

export default connect(mapStateToProps,{fetchUser})(UserHeader);