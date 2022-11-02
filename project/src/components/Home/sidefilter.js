import React from 'react';
import { useState } from "react";
import { nanoid } from 'nanoid'

export default function JobSelectForm(props) {

  return (
    <section>
      <div className="search">
        <form className="form1">
          <label htmlFor="text-input" className="big">Item Search</label>
          <input className="text specificity" name="text" type="text" id="text-input" placeholder="Search company, job title..." />

          <fieldset>
            <legend>Product Filters</legend>
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
              <select className="type-option" id="role" name="role" />
                <option value="">-</option>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
