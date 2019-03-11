import jsonPlaceholder from '../apis/jsonPlaceHolder';


export const fetchPosts =   () =>
    async dispatch =>{
        const posts=  await jsonPlaceholder.get('/posts');
        dispatch({type:'FETCH_POSTS',posts:posts})
    }