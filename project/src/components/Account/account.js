import React from 'react';
import { useState } from 'react';

export default function Account(props) {
    return (
    <div>
    <div class="container rounded bg-white mt-5 mb-5">
    <div class="row-about">
        <div>
            <div class="p-3 py-5">
                <div class="d-flex justify-content-between align-items-center">
                    <h4 className="profile-title">Profile</h4>
                </div>
                <div class="row mt-2">
                    <div class="col-md-6"><label class="labels">First Name</label><input type="text" class="form-control" placeholder="first name" value="" /></div>
                    <div class="col-md-6"><label class="labels">Last Name</label><input type="text" class="form-control" value="" placeholder="last name" /></div>
                </div>
                <div class="row mt-3">
                    <div class="col-md-12"><label class="labels">Address Line 1</label><input type="text" class="form-control" placeholder="enter address line 1" value="" /></div>
                    <div class="col-md-12"><label class="labels">Address Line 2</label><input type="text" class="form-control" placeholder="enter address line 2" value="" /></div>
                    <div class="col-md-12"><label class="labels">Zip Code</label><input type="text" class="form-control" placeholder="enter address line 2" value="" /></div>
                    <div class="col-md-12"><label class="labels">State</label><input type="text" class="form-control" placeholder="enter address line 2" value="" /></div>
                    <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id" value="" /></div>
                </div>
                <div class="button-text"><button class="btn btn-success" type="button">Save Profile</button></div>
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
    </div>
    )
}
