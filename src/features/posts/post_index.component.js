import React from 'react';
import PostListComponent from './post_list.component';
import PostFormComponent from './post_form.component';
class PostIndexComponent extends React.Component {

    render() {
        return (
            <div className="container my-3">
                <div className="row">
                    <div className="col-lg-8 order-2 order-lg-1">
                        <PostListComponent></PostListComponent>
                    </div>
                    <div className="col-lg-4 order-1 order-lg-2">
                        <PostFormComponent></PostFormComponent>
                    </div>
                </div>
            </div>

        )
    }
}
export default PostIndexComponent;