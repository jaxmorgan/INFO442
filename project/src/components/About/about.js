import React from 'react';
import { useState } from 'react';

export default function About(props) {
return (
    <main>
    <div>
        <header className="column-container-about">
          <div class="text-block">
            <p className="shop-sustainably-2">Why Source?</p>
            </div>
            <iframe width="100%" height="700" src="https://www.youtube.com/embed/1vhYlNm241I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </header>

      <div class = "container-about-page">
        <div class = "row">
          <div class="about-container">
          <p className="small-font"><b>Source is on a mission to connect you with sustainable businesses for all of your home goods needs. We are committed to improving the current state of e-commerce through eliminating unsustainable consumer habits and mass production practices.</b></p>
          <p className="small-font">Our supplies are manually verified businesses who meet our minimum threshold requirements for sustainability. So, what do we look at specifically when it comes to our products and suppliers?:</p>
          <ul>
            <p><a className="about-categories" href="https://www.epa.gov/sustainability/sustainable-manufacturing#:~:text=Sustainable%20manufacturing%20is%20the%20creation,employee%2C%20community%20and%20product%20safety.">Manufacturing processes</a></p>
            <p><a className="about-categories" href="https://www.epa.gov/ghgemissions">Greenhouse gas emissions</a></p>
            <p><a className="about-categories" href="https://www.rts.com/blog/what-is-sustainable-waste-management/#:~:text=Sustainable%20waste%20management%20means%20reducing,currently%20stands%20at%20just%208.5%25.">Waste production</a></p>
            <p><a className="about-categories" href="https://lastobject.com/blogs/sustainability-101/sustainable-vs-high-quality#:~:text=Sustainably%20made%20is%20a%20very,resources%20in%20the%20process%2C%20etc.">Material quality</a></p>
            <p><a className="about-categories" href="https://en.wikipedia.org/wiki/Sustainable_packaging">Product packaging</a></p>
            <p><a className="about-categories" href="https://wedesigngreen.com/stories/__trashed">Overall climate risk</a></p>
          </ul>
          </div>
          <div class="about-container2">
          <p className="small-font"><b>Many of our companies are B Corp Certified. What does this mean?</b></p>
          <p className="small-font">A B Corp Certification is a designation that a business is meeting high standards of verified performance, accountability, and transparency on factors from employee benefits and charitable giving to supply chain practices and input materials. In order to achieve certification, a company must: </p>
          <ul>
            <li className="small-font"><span>Demonstrate high social and environmental performance by achieving a B Impact Assessment score of 80 or above and passing their risk review. Multinational corporations must also meet baseline requirement standards.</span></li>
            <li className="small-font"><span>Make a legal commitment by changing their corporate governance structure to be accountable to all stakeholders, not just shareholders, and achieve benefit corporation status if available in their jurisdiction.</span></li>
            <li className="small-font"><span>Exhibit transparency by allowing information about their performance measured against B Lab’s standards to be publicly available on their B Corp profile on B Lab’s website.</span></li>
          </ul>
          <p className="small-font"><b>When you shop on Source, you can be assured that you’re making purchases that are good for the planet.</b></p>
          <img className="leaf-image" src="..\..\..\img\leaf.png" />

          </div>
          </div>
    </div>
    </div>
    <footer>
        <div>
          <p>Source</p>
          <p>&copy; 2022 INFO442 Project</p>
        </div>
      </footer>
    </main>
  )
}