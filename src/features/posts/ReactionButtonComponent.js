import React from 'react';
import { connect } from 'react-redux';
import { addReactions } from './postsSlice';
class ReactionButtonComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            reactionEmoji: {
                thumbsUp: '👍',
                hooray: '🎉',
                heart: '❤️',
                rocket: '🚀',
                eyes: '👀'
            }
        };
    }
    onReactionClick = (reactionName) => {
        let params = { postId: this.props.post._id, reaction: reactionName };
       this.props.addReaction(params);

    }

    getReactionButtons() {
        const reactionButtons = Object.entries(this.state.reactionEmoji).map(([name, emoji]) => {
            let count = 0;
            if (this.props.post.reactions !== undefined) {
                count = (this.props.post.reactions[name] !== undefined) ? this.props.post.reactions[name] : 0;
            }
            return (
                <button
                    key={name}
                    type="button"
                    className="muted-button reaction-button"
                    onClick={() => { this.onReactionClick(name) }}
                >
                    {emoji} {count}
                </button>
            )
        })
        return reactionButtons;
    }

    render() {
        return (
            <div>{this.getReactionButtons()}</div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addReaction: (params) => {
            dispatch(addReactions(params));
        }
    }
}

export default connect(null, mapDispatchToProps)(ReactionButtonComponent);