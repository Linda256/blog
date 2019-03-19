import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions';


class UserHeader extends React.Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        const id=this.props.userId;
        // //console.log(this.props.users)
        // const currUser=this.props.users.find(user=>user.id===id);
        // //console.log(currUser,'currUser')
        // if(!currUser) this.props.fetchUser(id);
        
        // //console.log(id);

        this.props.fetchUser(id);
    }

    render(){
        const {user}=this.props;
        //const id=this.props.userId;
       // const user=this.props.users.find(user=>user.id===id);
        //console.log(this.props.users);
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
// const mapStateToProps=(state)=>{
//     return{users:state.users}
// }

export default connect(mapStateToProps,{fetchUser})(UserHeader);