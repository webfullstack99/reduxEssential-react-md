import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PostAuthorComponent from './post_author.component';
import TimeAgoComponent from './TimeAgoComponent';
import { getPostById } from './postsSlice';
class SinglePostPageComponent extends React.Component {

    render() {
        const post = this.props.post;
        if (post) {
            return (
                <section>
                    <article className="post">
                        <h2>{post.title}</h2>
                        <p className="post-content">{post.description}</p>
                        <p>
                            <PostAuthorComponent userId={post.userId}></PostAuthorComponent>
                            <TimeAgoComponent timestamp={post.created}></TimeAgoComponent>
                        </p>
                        <div>
                            <Link to={`/posts/form/${post._id}`}>Edit</Link>
                        </div>
                    </article>
                </section>
            )
        } else {
            if (!post) {
                return (
                    <section>
                        <h2>Post not found!</h2>
                    </section>
                )
            }
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        post: getPostById(state, ownProps.match.params.postId)
    }
}

export default connect(mapStateToProps)(SinglePostPageComponent);