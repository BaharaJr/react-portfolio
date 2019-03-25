import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import proj from './img/proj';

const mine = {
  backgroundImage: `url( ${proj} )`,
  height: '90vh',
  backgroundSize: 'cover',
}

class Projects extends Component {

  render(){
    return(

      <div className= 'niggah' style={mine}>
        <Grid className="landing-grid">
        <Cell col={12}>
      <h1 className='nibe'>Projects In Execution</h1>

      <div className ='row'>
          <div>
              <span>
                  <i class="fas fa-utensils"></i>
              </span>
               <a href='https://github.com/BaharaJr/foodie-reviews'> <h2>Foodie Review App </h2></a>
          </div>
          <div>
              <span>
                      <i class="fas fa-address-card"></i>
              </span>
                <a href='https://github.com/BaharaJr/react-portfolio'><h2>Portfolio </h2></a>
          </div>
          <div>
              <span>
                    <i class="fas fa-book"></i>
              </span>
                <a href='https://github.com/BaharaJr/book-review'><h2>Book Review </h2></a>
         </div> 
          <div>
              <span>
                      <i class="fas fa-shopping-cart"></i>
                </span>
                  <a href='https://github.com/BaharaJr/riscan'><h2>E Commerce Site </h2></a>
          </div>   
      </div>
      </Cell>
      </Grid>
      </div>
    )
  }
}

export default Projects;
