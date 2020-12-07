import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store from './app/store'
import { Provider } from 'react-redux'

import './api/server'
import { fetchUsers } from './features/users/usersSlice'
import { fetchPosts } from './features/posts/postsSlice'
import { BrowserRouter as Router } from 'react-router-dom'

store.dispatch(fetchPosts());
store.dispatch(fetchUsers());

ReactDOM.render(
    <Provider store={store}>
        <Router basename={process.env.PUBLIC_URL}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)
