import React, { Component } from 'react';
import {Grid, Cell} from 'react-mdl';
import about from './img/me';
import blov from './img/blove';

const bout={
  backgroundImage: `url( ${about} )`,
  height: '105vh',
  backgroundSize: 'cover',
}

class About extends Component {
  render() {
    return(
      <div style={bout}>
      <Grid className="landing-grid">
          <Cell col={12}>
      <div className='stalker'>
      <h1>Hey Stalker <span role="img" aria-label="crazy">🤪</span>!</h1>
      <p>
         My name is Bennett Benedict, I am a full stack developer and 
        I create awesome systems and applications for my customers who build world class brands and companies.
      </p>
      </div>

      <div className='stalk'>
      <p>
        I'm pretty sure I already told you this on the <a href='./'>homepage</a> but I figured it was worthy
        repeating. You know. Just in case nobody was paying attention or busy wondering my awesome design.
      </p>
      </div>
      <section>
        <p>Just in case you want to beat me up, that's me</p>
            <div style={{textAlign: 'center', marginTop: '40px', marginLeft: '80px'}}>
                <img
                  src={blov}
                  alt="avatar"
                  style={{height: '290px', borderRadius: '50%',
                  width: '330px'}}
                  />
              </div>
      </section>
      </Cell>
      </Grid>
      </div>
    )
  }
}

export default About;
