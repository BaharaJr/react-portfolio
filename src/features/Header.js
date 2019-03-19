import React from 'react';
import Background from './img/blove';
import './Header.css'

const blove = {
    backgroundImage: `url( ${Background} )`,
    height: '85vh',
    backgroundSize: 'cover'

}

class Header extends React.Component{
    
    render(){

        return(
            <section>
                <header style ={blove}>
                </header>
                <h1>{this.props.aboutme}</h1>
            </section>
        );
    }
}

export default Header;