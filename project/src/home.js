import React from 'react';
import { useState } from 'react';
import { JobList } from './Jobcards.js';
import JobSelectForm from './Search.js';

export function Home(props) {

  return (
    <div>
      <header className="header-with-image">
        <div>
          <h1 className="big-font">Search. Track. Build.</h1>
          <p className="small-font">WorkCTRL is the number one platform to search for job opportunities and track jobs applied to while building community with others. This platform personalizes your career options to align with your interests so you can meet your goals.</p>
        </div>
      </header>

      <main>
        <section>
          <div className="job-help">
            <div className="item"><a href="https://careers.uw.edu/channels/resumes/" target="blank">Resume</a></div>
            <div className="item"><a href="https://careers.uw.edu/channels/cover-letters/" target="blank">Cover Letter</a></div>
            <div className="item"><a href="https://www.linkedin.com/" target="blank">LinkedIn</a></div>
          </div>
        </section>
      </main>
    </div>
  )
}