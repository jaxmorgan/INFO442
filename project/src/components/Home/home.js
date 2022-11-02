import React from 'react';
import Items from '../Items/items';
import JobSelectForm from './sidefilter';


export default function Home(props) {

  return (
    <main>
      <header>
        <img className="homeImage" src="../../../img/callan-sofa-resized.jpg"/>
      </header>
      <div className="flex-container">
      <Items />
      </div>

      <div>
      <JobSelectForm />
      </div>

      <footer>
        <div>
          <p>An E-Commerce Platform</p>
          <p><a href="mailto:informatics@uw.edu"><span>Email:</span> informatics@uw.edu</a></p>
          <p>&copy; 2022 INFO442 Project</p>
        </div>
      </footer>
    </main>



  )
}