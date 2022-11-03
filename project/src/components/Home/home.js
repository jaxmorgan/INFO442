import React from 'react';
import Items from '../Items/items';
import JobSelectForm from './sidefilter';


export default function Home(props) {

  return (
    <main>
      <header>
      </header>
      <div class="container">
   <div class="d-flex flex-row">
      <div class="d-flex flex-column">
         <img src="../../../img/callan-sofa-resized.jpg" class="img-fluid"/>
         <img src="../../../img/callan-sofa-resized.jpg" class="img-fluid"/>
      </div>
      <div class="d-flex flex-column">
         <img src="../../../img/callan-sofa-resized.jpg" class="img-fluid"/>
         <img src="../../../img/callan-sofa-resized.jpg" class="img-fluid"/>
      </div>
      <div class="d-flex flex-column">
         <img src="../../../img/callan-sofa-resized.jpg" class="img-fluid"/>
         <img src="../../../img/callan-sofa-resized.jpg" class="img-fluid"/>
      </div>
      <div class="d-flex flex-column">
         <img src="../../../img/callan-sofa-resized.jpg" class="img-fluid"/>
         <img src="../../../img/callan-sofa-resized.jpg" class="img-fluid"/>
      </div>
   </div>
</div>




      <script src="bootstrap/js/bootstrap.min.js"></script>

      <div id="carouselExampleControls" class="carousel slide" data-mdb-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../../../img/callan-sofa-resized.jpg" class="homeImage" alt="Wild Landscape"/>
    </div>
    <div class="carousel-item">
      <img src="../../../img/wood-coffee-table.webp" class="homeImage" alt="Camera"/>
    </div>
    <div class="carousel-item">
      <img src="../../../img/wood-stool.webp" class="homeImage" alt="Exotic Fruits"/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-mdb-target="#carouselExampleControls" data-mdb-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
      <Items />

      <div>
      <JobSelectForm />
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