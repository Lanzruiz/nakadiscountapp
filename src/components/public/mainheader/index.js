import React from 'react';

function MainHeader() {
    return (
        <div className="header">
            <div class="container">
                <div class="row">
                    <div class="col-sm-3">
                        <a href="index.html" class="navbar-brand logo">
                            <img src="images/logo.png" alt="" class="img-responsive"></img>
                        </a>
                    </div>
                    <div class="col-sm-9">
                        <div class="search-form">
                            <div class="col-sm-4">
                                <div class="row">
                                    <div class="col-md-12">
                                    <input class="form-control" placeholder="Search Deals &amp; Coupons" type="text"></input>
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-4">
                                <select class="form-control">
                                    <option value="0" selected="selected">
                                    Select your categorie
                                    </option>
                                    <option value="1">
                                    All
                                    </option>
                                    <option value="2">
                                    Travel
                                    </option>
                                    <option value="3">
                                    Beauty &amp; Spas
                                    </option>
                                    <option value="4">
                                    Career &amp; skills
                                    </option>
                                    <option value="5">
                                    Food &amp; Drinks
                                    </option>
                                    <option value="6">
                                    Health &amp; Beauty
                                    </option>
                                </select>
                            </div>
                            <div class="col-sm-4">
                                <a class="btn btn-raised ripple-effect btn-default btn-block" href="results.html">
                                    Search Deals
                                </a>
                            </div>
                        </div>
                    </div>      
                </div>
            </div>
        </div>
    )
}

export default MainHeader;