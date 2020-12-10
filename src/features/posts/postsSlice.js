import { createSlice, createAsyncThunk, createEntityAdapter } from '@reduxjs/toolkit';
import Axios from 'axios';
import { mainApiDomain } from '../../shared/config';

// POST ENTITY ADAPTER
const postAdapter = createEntityAdapter({
    selectId: (post) => post._id,
    sortComparer: (a, b) => -(a.created.localeCompare(b.created)),
});

const initialState = postAdapter.getInitialState({
    status: 'idle',
    error: null,
})

// THUNKS
const asyncThunks = {
    fetchPosts: createAsyncThunk('posts/fetchPosts', async () => {
        const response = await Axios.get(`${mainApiDomain}/api/posts`);
        return response.data.data
    }),

    addNewPost: createAsyncThunk('posts/addNewPost', async initialPost => {
        const response = await Axios.post(`${mainApiDomain}/api/posts`, { post: initialPost })
        return response.data.data;
    }),

    editPost: createAsyncThunk('posts/editPost', async post => {
        const response = await Axios.put(`${mainApiDomain}/api/posts/${post._id}`, { post });
        return response.data.data;
    }),

    addReactions: createAsyncThunk('posts/addReactions', async (data, thunkApi) => {
        const { postId, reaction } = data;
        //let existingPost = thunkApi.getState().posts.posts.find(post => post._id === postId);
        let existingPost = thunkApi.getState().posts.entities[postId];

        if (existingPost) {
            let reactions = { ...existingPost.reactions };
            if (reactions !== undefined) {
                if (reactions[reaction] !== undefined) {
                    reactions[reaction]++;
                } else {
                    reactions[reaction] = 1;
                }
            } else {
                reactions = { [reaction]: 1 };
            }
            const response = await Axios.put(`${mainApiDomain}/api/posts/addReactions/${postId}`, { reactions });
            return response.data.data;
        }
    }),

    deletePost: createAsyncThunk('posts/deletePost', async postId => {
        await Axios.delete(`${mainApiDomain}/api/posts/${postId}`);
        return postId;
    })
}

export const { fetchPosts, addNewPost, deletePost, editPost, addReactions } = asyncThunks;

// CREATE SLICE
const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        testAction: (state, action) => {
            state.error = true;
        }
    },
    extraReducers: {
        // LIST
        [asyncThunks.fetchPosts.pending]: (state, action) => {
            state.status = 'loading'
        },
        [asyncThunks.fetchPosts.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            //state.posts = state.posts.concat(action.payload)
            //state.posts = state.posts
            postAdapter.upsertMany(state, action.payload);
        },
        [asyncThunks.fetchPosts.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        },

        // ADD
        [asyncThunks.addNewPost.fulfilled]: (state, action) => {
            //state.posts.unshift(action.payload)
            postAdapter.addOne(state, action.payload);
        },

        // EDIT
        [asyncThunks.editPost.fulfilled]: (state, action) => {
            const existingPost = state.entities[action.payload._id];
            existingPost.title = action.payload.title;
            existingPost.description = action.payload.description;
            existingPost.userId = action.payload.userId;
        },

        // ADD REACTIONS
        [asyncThunks.addReactions.fulfilled]: (state, action) => {
            const existingPost = state.entities[action.payload._id];
            existingPost.reactions = action.payload.reactions;
        },

        [asyncThunks.addReactions.rejected]: (state, action) => {
        },

        // DELETE
        [asyncThunks.deletePost.fulfilled]: (state, action) => {
            //let index = state.posts.findIndex((post) => {
            //return (post._id === action.payload);
            //})
            //state.posts.splice(index, 1);
            postAdapter.removeOne(state, action.payload);
        }
    }
})

// EXPORT SELECTORS
export const {
    selectAll: getAllPost,
    selectById: getPostById,
    selectIds: selectPostIds
} = postAdapter.getSelectors(state => state.posts);

// EXPORT ACTIONS
export const { testAction } = postsSlice.actions;

export default postsSlice.reducer;