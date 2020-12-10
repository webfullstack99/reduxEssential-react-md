import React from 'react';
import { connect } from 'react-redux';
import { deletePost, fetchPosts, getAllPost, testAction } from './postsSlice';
import { Link } from 'react-router-dom';
import PostAuthorComponent from './post_author.component';
import ReactionButtonComponent from './ReactionButtonComponent';
import { NotificationManager } from 'react-notifications';
import TimeAgoComponent from './TimeAgoComponent';

class PostsListComponent extends React.Component {

    componentDidMount() {
    }

    onDeletePostClicked = (post) => {
        let r = window.confirm('Do you want to delete this item?');
        if (r) {
            this.props.deletePost(post._id);
            NotificationManager.success('Item deleted');
        }
    }

    testActionClicked = () => {
        this.props.testAction();
    }

    renderedPosts = () => {
        let renderedPosts = '';
        renderedPosts = this.props.posts.map((post, index) => {
            let key = post._id || Date.now();
            return (
                <article className="post-excerpt" key={key}>
                    <h3><Link to={`/posts/${post._id}`}>{post.title}</Link></h3>
                    <div className="post-content">
                        {post.description.substring(0, 100)} &nbsp;-&nbsp;
                        <PostAuthorComponent userId={post.userId}></PostAuthorComponent>
                        <ReactionButtonComponent id={post._id}></ReactionButtonComponent>
                    </div>
                    <div>
                        <button onClick={() => { this.onDeletePostClicked(post) }} className="btn btn-danger">Delete</button>
                    </div>
                </article>
            )
        })
        return renderedPosts;
    }

    showContent() {
        let content = '';
        if (this.props.status === 'succeeded') {
            content = (this.props.posts.length > 0) ? this.renderedPosts() : 'No post to display!';
        } else if (this.props.status === 'loading') {
            content = 'Loading ...';
        } else if (this.props.status === 'failed') {
            content = 'Something went wrong!';
        }
        return content;
    }

    render() {
        return (
            <section className="posts-list">
                <h2>Posts</h2>
                {this.showContent()}
            </section>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    return {
        posts: getAllPost(state),
        status: state.posts.status,
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deletePost: (id) => {
            dispatch(deletePost(id));
        },
        fetchPost: () => {
            dispatch(fetchPosts());
        },
        testAction: () => {
            dispatch(testAction());
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostsListComponent);