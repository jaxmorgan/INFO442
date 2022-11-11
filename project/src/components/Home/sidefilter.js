import React from 'react';
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { nanoid } from 'nanoid'

export default function SideFilter(props) {

  // let [searchParams, setSearchParams] = useSearchParams();

  function handleSubmit(event) {
    event.preventDefault();
    // The serialize function here would be responsible for
    // creating an object of { key: value } pairs from the
    // fields in the form that make up the query.
    // let params = serializeFormQuery(event.target);
    // setSearchParams(params);
  }

  const hookArrayCondition = useState('');
  const condition = hookArrayCondition[0];
  const setCondition = hookArrayCondition[1];

  const hookArrayType = useState('');
  const type = hookArrayType[0];
  const setType = hookArrayType[1];

  const hookArraySupplier = useState('');
  const supplier = hookArraySupplier[0];
  const setSupplier = hookArraySupplier[1];

  const hookArrayRange = useState('');
  const range = hookArrayRange[0];
  const setRange = hookArrayRange[1];


  const handleCondition = (event) => {
    setCondition(event.target.value);
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

  const handleClick = () => {
    props.applyFilterCallback(type,range);
  }

  return (
    <section className="search-template">
      <div className="search">
        <form className="form1" >
          <input className="text-specificity" name="text" type="text" id="text-input" placeholder="Search for a product..." />

          <fieldset>
            <legend class="product-filters">Filters</legend>
            <div className="check-container">
              <label className="check" htmlFor="check-input-intern">Used
                <input type="checkbox" name="checkbox" id="check-input-intern" />
              </label>
              <label className="check" htmlFor="check-input-full">New
                <input type="checkbox" name="checkbox" id="check-input-full" />
              </label>
            </div>
          </fieldset>

          <div>
            <div>
              <label className="type" htmlFor="location">Product Type</label>
              <select id="type" className="form-select dropdown1 btn btn-secondary" type="button" value={type} onChange={handleType}>
                <option value="">Show all items</option>
                <option value="table">Table</option>
                <option value="bed">Bed</option>
                <option value="sofa">Sofa</option>
                <option value="organization">Organization</option>
                <option value="dresser">Dresser</option>

              </select>
            </div>


            <div>
              <label className="type" htmlFor="location">Supplier</label>
              <select className="type-option" id="location" name="location">
                <option value="">-</option>
              </select>
            </div>



            <div>
              <label className="type" htmlFor="role">Price Range</label>
              <select className="type-option" id="role" name="role">
                <option value="">-</option>
              </select>
            </div>

            <div>
            <button className='btngo'>
                <form className="d-flex search-bar">
                    <div className="btn btn-outline-success " type="button" onClick={handleClick}>Apply</div>
                </form>
            </button>
            </div>


          </div>
        </form>
      </div>


      <div className="green-insight">        
          <div>
            <img className="light-bulb-image" src="..\..\..\img\light-bulbpng.png"/>
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
