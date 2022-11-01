import React from 'react';
import Items from '../Items/items';

export default function Home(props) {

  return (
    <main>
      <header>
        <h1 className="abouthwelcome">Welcome to Source</h1>
      </header>
      <div className="flex-container">
      <Items />
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