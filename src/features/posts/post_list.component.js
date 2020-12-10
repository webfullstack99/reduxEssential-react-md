import React from 'react';
import { connect } from 'react-redux';
import { deletePost, fetchPosts, getPostIds, testAction } from './postsSlice';
import { NotificationManager } from 'react-notifications';
import PostExcerptComponent from './post_excerpt.component';

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
        renderedPosts = this.props.postIds.map((id) => {
            return (
                <div key={id} className="my-2">
                    <PostExcerptComponent  id={id}></PostExcerptComponent>
                </div>
            )
        })
        return renderedPosts;
    }

    showContent() {
        let content = '';
        if (this.props.status === 'succeeded') {
            content = (this.props.postIds.length > 0) ? this.renderedPosts() : 'No post to display!';
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
        postIds: getPostIds(state),
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