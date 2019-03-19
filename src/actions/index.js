import jsonPlaceholder from '../apis/jsonPlaceHolder';
import _ from 'lodash';

export const fetchPostsAndUsers = () => async (dispatch,getState) =>{
    console.log("About to fetch posts")
    await dispatch(fetchPosts());
    
    const userIds = new Set();
    getState().posts.forEach(post=>userIds.add(post.userId));
    console.log(userIds);
    userIds.forEach(id=> dispatch(fetchUser(id)));

}

export const fetchPosts = () =>
    async dispatch =>{
        const response=  await jsonPlaceholder.get('/posts');
        dispatch({type:'FETCH_POSTS',payload:response.data})
    }

export const fetchUser = (id) =>{
   return async (dispatch) =>{
        const response=await jsonPlaceholder.get(`users/${id}`);
        dispatch({type:"FETCH_USER", payload:response.data})
    }
}

// export const fetchUser = (id)=> (dispatch) =>{
//     return  _fetchUser(id,dispatch);
// }

// const _fetchUser = _.memoize(async (id, dispatch)=>{
//         const response = await jsonPlaceholder.get(`users/${id}`);
//         dispatch({type:'FETCH_USER',payload:response.data})
// })
