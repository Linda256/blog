import jsonPlaceholder from '../apis/jsonPlaceHolder';

export const fetchPostsAndUsers = () => async (dispatch,getState) =>{
    await dispatch(fetchPosts());
    
    const userIds = new Set();
    getState().posts.forEach(post=>userIds.add(post.userId));
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

