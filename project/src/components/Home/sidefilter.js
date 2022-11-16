import React from 'react';
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { nanoid } from 'nanoid'

export default function SideFilter(props) {

  const url = new URL("http://localhost:3000/Home?query=&filter=&supplier=&range=");

  function handleSubmit(event) {
    event.preventDefault();
    // The serialize function here would be responsible for
    // creating an object of { key: value } pairs from the
    // fields in the form that make up the query.
    // let params = serializeFormQuery(event.target);
    // setSearchParams(params);
  }

  const hookArrayStatus = useState('');
  const status = hookArrayStatus[0];
  const setStatus = hookArrayStatus[1];

  const hookArrayType = useState('');
  const type = hookArrayType[0];
  const setType = hookArrayType[1];

  const hookArraySupplier = useState('');
  const supplier = hookArraySupplier[0];
  const setSupplier = hookArraySupplier[1];

  const hookArrayRange = useState('');
  const range = hookArrayRange[0];
  const setRange = hookArrayRange[1];


  const handleStatus = (event) => {
    setStatus(event.target.value);
  }

  const handleType = (event) => {
    setType(event.target.value);
  }

  const handleSupplier = (event) => {
    setSupplier(event.target.value);
  }

  const handleRange = (event) => {
    setRange(event.target.value);
  }

  const handleClick = (event) => {

    props.applyFilterCallback(type, supplier, status, range);
  }

  const ref = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      ref.current.click();
    }, 0); //miliseconds
  }, []);

  const ref2 = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      ref2.current.click();
    }, 0); //miliseconds
  }, []);


  const [query, setQuery] = useState('');


  const handleChange = (e) => {

    setQuery(e.target.value);
  }

  const handleSearch = (event) => {

    props.applySearchCallback(query);
  }




  return (
    <section className="search-template">
      <div className="search">
        {/* <form className="form1" > */}

        

        <input className="text-specificity" id="text-input" placeholder="Search for a product..." value={query} type="search" onChange={handleChange} />


        <fieldset>
        <legend class="product-filters"></legend>
          <button className='btngo'>
          <div className="btn btn-light" id="apply-search" ref={ref2} onClick={handleSearch}>Go</div>
        </button>

        </fieldset>

        <fieldset>
        <legend class="product-filters">Filters</legend>

        </fieldset>



        <div>
          <div>
            <label className="type" htmlFor="type">Product Type</label>
            <div className="side-filter-form">
              <select id="type" className="form-select dropdown1 btn btn-secondary" type="button" value={type} onChange={handleType}>
                <option value="">Show all types</option>
                <option value="table">Table</option>
                <option value="bed">Bed</option>
                <option value="sofa">Sofa</option>
                <option value="organization">Organization</option>
                <option value="dresser">Dresser</option>

              </select>
            </div>
          </div>


          <div>
            <label className="type" htmlFor="supplier">Supplier</label>
            <select id="supplier" className="form-select dropdown1 btn btn-secondary" type="button" value={supplier} onChange={handleSupplier}>
              <option value="">Show all suppliers</option>
              <option value="West Elm">West Elm</option>
              <option value="Sabai">Sabai</option>
              <option value="Oliver Space">Oliver Space</option>
              <option value="Medley Home">Medley Home</option>
              <option value="Haiku Designs">Haiku Designs</option>
              <option value="Inside Weather">Inside Weather</option>
              <option value="Avocado">Avocado</option>
              <option value="Thuma">Thuma</option>
              <option value="Room Board">Room Board</option>

            </select>
          </div>

          <div>
            <label className="type" htmlFor="status">Product status</label>
            <select id="status" className="form-select dropdown1 btn btn-secondary" type="button" value={status} onChange={handleStatus}>
              <option value="">Show all condition</option>
              <option value="new">New</option>
              <option value="used">used</option>


            </select>
          </div>



          <div>
            <label className="type" htmlFor="range">Price Range</label>
            <select id="range" className="form-select dropdown1 btn btn-secondary" type="button" value={range} onChange={handleRange}>
              <option value="">show all price range</option>
              <option value="low">$0 - $500</option>
              <option value="mid">$500 - $1000</option>
              <option value="high">$1000 UP</option>


            </select>
          </div>

          <div>
            <button className='btngo'>

              <div className="btn btn-light" id="apply-filters" ref={ref} onClick={handleClick}>Apply</div>
            </button>
          </div>
        </div>

      </div>


      <div className="green-insight">
        <div>
          <img className="light-bulb-image" src="..\..\..\img\light-bulbpng.png" />
          <h4 class="insight-header">Sustainability Insight</h4>
          <p class="insight-content">Furniture is a major cause of air pollution and waste around the
            globe every year. One of the major concerns is that the vast majority
            of furniture is not recycled, leading to over 9 million tons of wood, metal,
            glass, fabric, leather, and foam ending up in landfills anually.</p>
          <p class="insight-content-2">That's why we created Source: to ensure that you can have sustainable,
            affordable, environmentally-friendly furniture delivered to your door at
            the click of a button.
          </p>
        </div>
      </div>

    </section>
  );
}
