import React from 'react';
import jsonPlacerHolder from '../apis/jsonPlaceHolder';

import PostList from './PostList'
class App extends React.Component{

    render(){
       return (
        <div className="ui container">
            <PostList />
        </div>
       )
    }
}

export default App;