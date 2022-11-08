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

  return (
    <section>
      <div className="search">
        <form className="form1" >
          <input className="text-specificity" name="text" type="text" id="text-input" placeholder="Search for a product..." />

          <fieldset>
            <legend class="product-filters">Filter By</legend>
            <div className="check-container">
              <label className="check" htmlFor="check-input-intern">Used
                <input type="checkbox" name="checkbox" id="check-input-intern"/>
              </label>
              <label className="check" htmlFor="check-input-full">New
                <input type="checkbox" name="checkbox" id="check-input-full" />
              </label>
            </div>
          </fieldset>
                    
          <div>
            <div>
              <label className="type" htmlFor="location">Company</label>
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
          </div>
        </form>
      </div>
    </section>
  );
}
