import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Axios from 'axios';
import { mainApiDomain } from '../../shared/config';

const initialState = {
    users: [],
    status: 'idle',
    error: null,
}

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await Axios.get(`${mainApiDomain}/api/users`);
    return response.data.data
})

const userSlice = createSlice({
    name: 'users',
    initialState,
    extraReducers: {
        [fetchUsers.pending]: (state, action) => {
            state.status = 'loading'
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.users = state.users.concat(action.payload)
        },
        [fetchUsers.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        }
    }
})
export default userSlice.reducer;
