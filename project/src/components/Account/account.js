import React from 'react';
import { useState, useEffect } from 'react';


export default function Account(props) {

    const [value, setValue] = useState("");

const handleChange = (e) => {
    setValue(e.target.value);
    localStorage.setItem("inputValue", e.target.value);
  };

  useEffect(() => {
    setValue(localStorage.getItem("inputValue"));
  }, []);
  
    return (
    <div className="account-background">
          <header className="column-container-account">
          <div class="text-block">
            <p className="shop-sustainably-3">My Source Profile</p>
            </div>
      </header>
    <div class="row-about">
        <div>
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center">
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">First Name</label><input value={value} onChange={handleChange} type="text-1" class="form-control form-control-lg" placeholder="first name" /></div>
                    <div class="col-md-6"><label class="labels">Last Name</label><input value={value} onChange={handleChange} type="text-2" class="form-control form-control-lg" placeholder="last name" /></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Address Line 1</label><input value={value} onChange={handleChange} type="text" class="form-control form-control-lg" placeholder="enter address line 1" /></div>
                    <div class="col-md-12"><label class="labels">Address Line 2</label><input value={value} onChange={handleChange} type="text" class="form-control form-control-lg" placeholder="enter address line 2"/></div>
                    <div class="col-md-12"><label class="labels">Zip Code</label><input value={value} onChange={handleChange} type="text" class="form-control form-control-lg" placeholder="enter address line 2"/></div>
                    <div class="col-md-12"><label class="labels">State</label><input value={value} onChange={handleChange} type="text" class="form-control form-control-lg" placeholder="enter address line 2"  /></div>
                    <div class="col-md-12"><label class="labels">Email</label><input value={value} onChange={handleChange} type="text" class="form-control form-control-lg" placeholder="enter email" /></div>
                </div>
                <div class="button-text"><button class="account-btn" type="button">Save Profile</button></div>
            </div>
        </div>
    </div>
    <footer>
    <div>
      <p>Source</p>
      <p>&copy; 2022 INFO442 Project</p>
    </div>
    </footer>
    </div>
    )
}
