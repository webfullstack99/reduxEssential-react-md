import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: this.getCurrentPage(),
        }

    }

    getCurrentPage = () => {
        let page = '/';
        let pathName = this.props.history.location.pathname;
        if (page !== pathName) {
            let pattern = new RegExp('^\\/((?!\\/).)+', '');
            let matchResult = pathName.match(pattern);
            if (matchResult) page = matchResult[0];
        }
        return page;
   }

    getActivePageClassIfIsActive = (page) => {
        return (page === this.state.activePage) ? 'text-primary' : '';
    }

    render() {
        return (
            <div className="navbar navbar-expand navbar-light bg-light justify-content-center">
                <ul className="nav navbar-nav">
                    <li className="nav-item">
                        <Link className={`nav-link ${this.getActivePageClassIfIsActive('/')}`} to="/"><span>Home</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className={`nav-link ${this.getActivePageClassIfIsActive('/posts')} `} to="/posts"><span>Posts</span></Link>
                    </li>
                </ul>
            </div>

        )
    }
}

export default withRouter(Navbar);