import React from 'react';
import { connect } from 'react-redux'
class PostAuthorComponent extends React.Component {

    render() {
        const user = this.props.users.find((user) => {
            return (user._id === this.props.userId);
        })
        return <span className="text-success">by {user ? user.username : 'Unknown author'}</span>
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users.users,
    }
}
export default connect(mapStateToProps)(PostAuthorComponent);