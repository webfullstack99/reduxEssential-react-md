import React from 'react';
import { connect } from 'react-redux';
import { getPostById } from './postsSlice';
import { Link } from 'react-router-dom';
import PostAuthorComponent from './post_author.component';
import TimeAgoComponent from './TimeAgoComponent';
import ReactionButtonComponent from './ReactionButtonComponent';
class PostExcerptComponent extends React.Component {

    render() {
        const post = this.props.post;
        return (
            <article >
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
    }


}
const mapStateToProps = (state, ownProps) => {
    return {
        post: getPostById(state, ownProps.id),
    }
}

const mapDispatchToProps = (state, dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostExcerptComponent);
