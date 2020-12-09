import React from 'react'
import {
    Route,
    Redirect,
    Switch,
} from 'react-router-dom'

import Navbar from './app/Navbar'
import HomeComponent from './features/home/home.component'
import PostIndex from './features/posts/post_index.component'
import SinglePostPageComponent from './features/posts/single_post_page.component'
import PostFormComponent from './features/posts/post_form.component'
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { mainApiDomain } from './shared/config'


class AppComponent extends React.Component {

    constructor(props) {
        super(props)
        console.log(`api domain: ${mainApiDomain}`);
        
    }

    render() {
        return (
            <div className="App">
                {/* NAVBAR */}
                <Navbar></Navbar>

                <Switch>
                    {/* HOME */}
                    <Route
                        exact
                        path="/"
                        component={HomeComponent}
                    />

                    {/* POSTS */}
                    <Route
                        exact
                        path="/posts"
                        component={PostIndex}
                    />

                    {/* SINGLE POST */}
                    <Route
                        exact
                        path="/posts/:postId"
                        component={SinglePostPageComponent}
                    />
                    <Route
                        exact
                        path="/posts/form/:postId"
                        component={PostFormComponent}
                    />

                    {/* DEFAULT */}
                    <Redirect to="/posts" />
                </Switch>
                <NotificationContainer></NotificationContainer>
            </div>
        );
    }
}

export default AppComponent
