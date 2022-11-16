import React from 'react';
import { useState, useEffect } from 'react';


export default function Account(props) {

    //first name
const [firstName, setFirstName] = useState("");


const handleChange = (e) => {
    setFirstName(e.target.value);
    localStorage.setItem("inputValue", e.target.value);
  };

  useEffect(() => {
    setFirstName(localStorage.getItem("inputValue"));
  }, []);

  //last name
const [lastName, setLastName] = useState("");


const handleChange2 = (e) => {
    setLastName(e.target.value);
    localStorage.setItem("inputValue2", e.target.value);
  };

  useEffect(() => {
    setLastName(localStorage.getItem("inputValue2"));
  }, []);

  //address line 1
  const [address1, setAddress1] = useState("");


  const handleChange3 = (e) => {
      setAddress1(e.target.value);
      localStorage.setItem("inputValue3", e.target.value);
    };
  
    useEffect(() => {
      setAddress1(localStorage.getItem("inputValue3"));
    }, []);

  //address line 2
  const [address2, setAddress2] = useState("");


  const handleChange4 = (e) => {
      setAddress2(e.target.value);
      localStorage.setItem("inputValue4", e.target.value);
    };
  
    useEffect(() => {
      setAddress2(localStorage.getItem("inputValue4"));
    }, []);

  //zip code
  const [zipcode, setZipcode] = useState("");


  const handleChange5 = (e) => {
      setZipcode(e.target.value);
      localStorage.setItem("inputValue5", e.target.value);
    };
  
    useEffect(() => {
      setZipcode(localStorage.getItem("inputValue5"));
    }, []);

  //State
  const [state, setState] = useState("");


  const handleChange6 = (e) => {
      setState(e.target.value);
      localStorage.setItem("inputValue6", e.target.value);
    };
  
    useEffect(() => {
      setState(localStorage.getItem("inputValue6"));
    }, []);

  //Email

  const [email, setEmail] = useState("");


  const handleChange7 = (e) => {
      setEmail(e.target.value);
      localStorage.setItem("inputValue7", e.target.value);
    };
  
    useEffect(() => {
      setEmail(localStorage.getItem("inputValue7"));
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
                    <div class="col-md-6"><label class="labels">First Name</label><input value={firstName} onChange={handleChange} type="text-1" class="form-control form-control-lg" placeholder="first name" /></div>
                    <div class="col-md-6"><label class="labels">Last Name</label><input value={lastName} onChange={handleChange2} type="text-2" class="form-control form-control-lg" placeholder="last name" /></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Address Line 1</label><input value={address1} onChange={handleChange3} type="text" class="form-control form-control-lg" placeholder="enter address line 1" /></div>
                    <div class="col-md-12"><label class="labels">Address Line 2</label><input value={address2} onChange={handleChange4} type="text" class="form-control form-control-lg" placeholder="enter address line 2"/></div>
                    <div class="col-md-12"><label class="labels">Zip Code</label><input value={zipcode} onChange={handleChange5} type="text" class="form-control form-control-lg" placeholder="enter address line 2"/></div>
                    <div class="col-md-12"><label class="labels">State</label><input value={state} onChange={handleChange6} type="text" class="form-control form-control-lg" placeholder="enter address line 2"  /></div>
                    <div class="col-md-12"><label class="labels">Email</label><input value={email} onChange={handleChange7} type="text" class="form-control form-control-lg" placeholder="enter email" /></div>
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
