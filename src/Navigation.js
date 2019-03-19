import React, {Component} from 'react';
import './Navigation.css';

class Navigation extends Component {
    render() {
        return ( 
            <nav>
                <h1 className='logo'>Bennett Benedict</h1>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </nav>

        )
    }
}

export default Navigation;
