import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Background from './img/be';

const blove = {
  background: `url( ${Background} )`,
  height: '90vh',
  backgroundSize: 'cover',
}


class Landing extends Component {
  render() {
    return(
      <div style={blove}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | Bootstrap | JavaScript | React | React Native | NodeJS | Express | MongoDB</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="http://linkedin.com/in/baharajr" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://github.com/BaharaJr" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* Freecodecamp */}
          <a href="http://twitter.com/BaharaJr" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-twitter" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
