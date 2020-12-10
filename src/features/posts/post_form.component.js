import React from 'react'
import { connect } from 'react-redux'
import { getPostById, addNewPost, editPost} from './postsSlice'
import { withRouter } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';

class PostFormComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            formType: 'add',
            title: '',
            description: '',
            userId: '',
        }
    }
    componentDidMount() {
        this.listPost();
    }

    componentDidUpdate = () => {
        this.listPost();
    }

    listPost = () => {
        if (this.props.post && this.props.match?.params.postId && this.state.formType === 'add') {
            const post = this.props.post;
            if (this.props.post) {
                this.setState({
                    formType: 'edit',
                    id: post.id,
                    title: post.title,
                    description: post.description,
                    userId: post.userId,
                    editingItem: post,
                })
            }
        }


    }

    onTitleChanged = e => this.setState({ title: e.target.value });

    onDescriptionChanged = e => this.setState({ description: e.target.value });

    onSubmitted = ($event) => {
        $event.preventDefault();
        if (this.isFormValid()) {
            if (this.state.formType === 'add') this.onAdd()
            else this.onEdit();
        }
    }

    onEdit = () => {
        const { title, description, userId } = this.state;
        this.props.editPost({ _id: this.props.match.params.postId, title, description, userId });
        NotificationManager.success('Item updated');
    }

    onAdd = () => {
        const { title, description, userId } = this.state;
        this.props.addPost({ title, description, userId });
        NotificationManager.success('Item inserted');
        this.resetForm();
    }

    resetForm = () => {
        this.setState({
            title: '',
            description: '',
            userId: '',
        })
    }

    onUserSelectChanged = ($event) => {
        let value = $event.target.value;
        this.setState({
            userId: value
        });
    }

    getUserSelectWidget() {
        let options = this.props.users.map((user) => {
            return (
                <option key={user._id} value={user._id}>{user.username}</option>
            )
        })
        let defaultValue = this.state.userId || 'default';
        return (
            <div className="form-group">
                <select className="custom-select" value={defaultValue} name="" id="" onChange={this.onUserSelectChanged}>
                    <option disabled value="default">Select user</option>
                    {options}
                </select>
            </div>
        )
    }

    isFormValid = () => {
        let { title, description, userId } = this.state;
        title = title.trim();
        description = description.trim();
        const editingItem = this.state.editingItem;
        return (
            (
                title !== '' &&
                description !== '' &&
                userId !== ''
            ) &&
            (
                title !== editingItem?.title ||
                description !== editingItem?.description ||
                userId !== editingItem?.userId
            )
        )
    }

    render() {
        return (
            <section>
                <h2>Add a New Post</h2>
                <form onSubmit={this.onSubmitted}>
                    <label htmlFor="postTitle">Post Title:</label>
                    <input
                        type="text"
                        id="postTitle"
                        name="postTitle"
                        value={this.state.title}
                        onChange={this.onTitleChanged}
                    />
                    <label htmlFor="postContent">Post Description:</label>
                    <textarea
                        id="postDescription"
                        name="postDescription"
                        value={this.state.description}
                        onChange={this.onDescriptionChanged}
                    />

                    {/* USER SELECT WIDGET */}
                    <label htmlFor="postTitle">Created user:</label>
                    {this.getUserSelectWidget()}

                    <button disabled={!this.isFormValid()} type="submit">Save Post</button>
                </form>
            </section>

        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        post: getPostById(state, ownProps.match?.params?.postId),
        users: state.users.users,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        addPost: (initialPost) => {
            dispatch(addNewPost(initialPost));
        },
        editPost: (post) => {
            dispatch(editPost(post));

        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostFormComponent))