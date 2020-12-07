import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';

const initialState = {
    posts: [],
    status: 'idle',
    error: null,
}

const asyncThunks = {
    fetchPosts: createAsyncThunk('posts/fetchPosts', async () => {
        const response = await Axios.get('http://localhost:3000/api/posts');
        return response.data.data
    }),

    addNewPost: createAsyncThunk('posts/addNewPost', async initialPost => {
        const response = await Axios.post('http://localhost:3000/api/posts', { post: initialPost })
        return response.data.data;
    }),

    editPost: createAsyncThunk('posts/editPost', async post => {
        const response = await Axios.put(`http://localhost:3000/api/posts/${post._id}`, { post });
        return response.data.data;
    }),

    addReactions: createAsyncThunk('posts/addReactions', async (data, thunkApi) => {
        const { postId, reaction } = data;
        let existingPost = thunkApi.getState().posts.posts.find(post => post._id === postId);
        if (existingPost) {
            let reactions = {...existingPost.reactions};
            if (reactions !== undefined) {
                if (reactions[reaction] !== undefined) {
                    reactions[reaction]++;
                } else {
                    reactions[reaction] = 1;
                }
            } else {
                reactions = { [reaction]: 1 };
            }
            const response = await Axios.put(`http://localhost:3000/api/posts/addReactions/${postId}`, { reactions });
            return response.data.data;
        }
    }),

    deletePost: createAsyncThunk('posts/deletePost', async postId => {
        await Axios.delete(`http://localhost:3000/api/posts/${postId}`);
        return postId;
    })
}

export const { fetchPosts, addNewPost, deletePost, editPost, addReactions } = asyncThunks;


const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers: {
        // LIST
        [asyncThunks.fetchPosts.pending]: (state, action) => {
            state.status = 'loading'
        },
        [asyncThunks.fetchPosts.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.posts = state.posts.concat(action.payload)
        },
        [asyncThunks.fetchPosts.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        },

        // ADD
        [asyncThunks.addNewPost.fulfilled]: (state, action) => {
            state.posts.unshift(action.payload)
        },

        // EDIT
        [asyncThunks.editPost.fulfilled]: (state, action) => {
            const post = state.posts.find((post) => {
                return (post._id === action.payload._id);
            })
            post.title = action.payload.title;
            post.description = action.payload.description;
            post.userId = action.payload.userId;
        },

        // ADD REACTIONS
        [asyncThunks.addReactions.fulfilled]: (state, action) => {
            const post = state.posts.find((post) => {
                return (post._id === action.payload._id);
            })
            post.reactions = action.payload.reactions;
        },

        [asyncThunks.addReactions.rejected]: (state, action) => {
        },

        // DELETE
        [asyncThunks.deletePost.fulfilled]: (state, action) => {
            let index = state.posts.findIndex((post) => {
                return (post._id === action.payload);
            })
            state.posts.splice(index, 1);
        }
    }
})

// SELECTORS
const selectors = {
    getPostById: (state, id) => {
        const post = state.posts.posts.find((post) => {
            return (`${post._id}` === id);
        })
        return post;
    }
}


export const { getPostById } = selectors;
export default postsSlice.reducer;