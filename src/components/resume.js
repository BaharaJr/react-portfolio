import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import blov from './img/img';
import web from './img/edu';

const nib = {
  backgroundImage: `url( ${web} )`,
  height: '200vh',
  backgroundSize: 'cover',
}


class Resume extends Component {
  render() {
    return(
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={blov}
                alt="avatar"
                style={{height: '200px', borderRadius: '50%',
                width: '190px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Bennett Benedict</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p>To me coding has always been my passion and I have come a long way in search for green pastures in the tech world.</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>Dar es Salaam, Tanzania</p>
            <h5>Phone</h5>
            <p>(255) 786 237 003</p>
            <h5>Email</h5>
            <p>bennybenester@gmail.com</p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" style = {nib} col={8}>
            <h2>Education</h2>


            <Education
              startYear={2014}
              endYear={2017}
              schoolName="UDSM"
              schoolDescription="I was honoured to attend and earn a Bsc degree in Computer Science from the top oldest and most famous university in Tanzania."
               />

               <Education
                 startYear={2018}
                 endYear={2019}
                 schoolName="OpenClassrooms"
                 schoolDescription="I did an online training from the Andela Learning Community programme on OpenClassrooms sponsored by Google and all this knowledge I am using for my portfolio, I owe everything to them."
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2017}
              endYear={2019}
              jobName="Nutmeg Auctioneers & Property Managers Co.Ltd"
              jobDescription="Worked with Nutmeg Property Managers, a real estate company and had to quit because the job was not utilizing me up to my potential and I lost motivation since it was a different world from tech that I always wanted to work in."
              />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="javascript"
                progress={100}
                />
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    <Skills
                      skill="React"
                      progress={60}
                      />


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
