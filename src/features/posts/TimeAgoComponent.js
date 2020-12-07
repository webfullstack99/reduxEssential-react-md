import React from 'react';
import { formatDistanceToNow, parseISO } from 'date-fns'
import { connect } from 'react-redux'
class TimeAgoComponent extends React.Component {

    getTime() {
        let timeAgo = ''
        if (this.props.timestamp) {
            const date = parseISO(this.props.timestamp)
            const timePeriod = formatDistanceToNow(date)
            timeAgo = `${timePeriod} ago`
        }
        return timeAgo;
    }

    render() {
        return (
            <span>
                &nbsp; <i>{this.getTime()}</i>
            </span>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        users: state.users,
    }
}
export default connect(mapStateToProps)(TimeAgoComponent);