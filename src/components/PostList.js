import React from 'react';
import {connect} from 'react-redux';
import {fetchPostsAndUsers} from '../actions';

import UserHeader from './UserHeader';

class PostList extends React.Component{
    componentDidMount(){
        this.props.fetchPostsAndUsers();
    }

    renderList(){
        return this.props.posts.map(post=>{
            return(
                <div className="item" key={post.id}> 
                    <i className="large middle aligned icon user"/>
                    <div className="content">
                        <div className="description">
                            <h3>title: {post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId}/>
                    </div>
                </div>
            )
        })
    }

    render(){ 
        console.log("posts:",this.props.posts);
        console.log("props in postlist:",this.props);
        return(
            <div className="ui relaxed divided list">{this.renderList()}</div>
        )
    }

}

const mapStateToProps=(state)=>{
    return {posts:state.posts}
}
export default connect(mapStateToProps, {fetchPostsAndUsers})(PostList);