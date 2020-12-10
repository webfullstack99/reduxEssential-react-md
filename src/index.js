import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './app/store'
import { Provider } from 'react-redux'

import './api/server'
import { fetchUsers } from './features/users/usersSlice'
import { fetchPosts } from './features/posts/postsSlice'
import { HashRouter } from 'react-router-dom'

store.dispatch(fetchPosts());
store.dispatch(fetchUsers());

ReactDOM.render(
    <Provider store={store}>
        <HashRouter >
            <App />
        </HashRouter>
    </Provider>,
    document.getElementById('root')
)
