import React, {Component} from 'react';
import './Navigation.css';

class Navigation extends Component {
    render() {
        const navFeatures = ['Home', 'About', 'Projects', 'Contact'];
        const navLinks = navFeatures.map(navFeature=>{
            return(
                <li><a href={'/'}>{navFeature}</a></li>
            )
        });
        return ( 
            <nav>
                <h1 className='logo'><a href="/">Bennett Benedict</a></h1>
                <ul>
                    {navLinks}
                </ul>
            </nav>

        )
    }
}

export default Navigation;
