import React from 'react';
import { useState } from "react";
import { nanoid } from 'nanoid'

export default function JobSelectForm(props) {

  return (
    <section>
      <div className="search">
        <form className="form1">
          <label htmlFor="text-input" className="big">Job Search</label>
          <input className="text specificity" name="text" type="text" id="text-input" placeholder="Search company, job title..." />

          <fieldset>
            <legend>Job Type</legend>
            <div className="check-container">
              <label className="check" htmlFor="check-input-intern">Internship
                <input type="checkbox" name="checkbox" id="check-input-intern"/>
              </label>
              <label className="check" htmlFor="check-input-full">Full-time
                <input type="checkbox" name="checkbox" id="check-input-full" />
              </label>

              <label className="check" htmlFor="check-input-part">Part-time
                <input type="checkbox" name="checkbox" id="check-input-part" />
              </label>
            </div>
          </fieldset>
                    
          <div>
            <div>
              <label className="type" htmlFor="location">Location</label>
              <select className="type-option" id="location" name="location">
                <option value="">-</option>
              </select>
            </div>
            <div>
              <label className="type" htmlFor="role">Role</label>
              <select className="type-option" id="role" name="role" />
                <option value="">-</option>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
