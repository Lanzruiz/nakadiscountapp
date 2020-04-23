import React from 'react';

function uppermenu() {
    return (
        <div>
            <div className="top-bar bg-light hdden-xs">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 list-inline list-unstyled no-margin hidden-xs">
                            <p className="no-margin">
                                Have any questions?
                                <strong>
                                    +080 124 880
                                </strong>
                              or mail@codenpixel.com
                            </p>
                        </div>
                        <div className="pull-right col-sm-6">
                           <ul className="list-inline list-unstyled pull-right">
                               <li className="active">
                                    <a href="#">
                                        <i className="ti-cart"></i>
                                        Faq
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    Sign In
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    Sign Up
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                    <i className="ti-shopping-cart">
                                    </i>
                                    Cart
                                    </a>
                                </li>
                            </ul>
                      </div>
                  </div>
              </div>
          </div>
   
        </div>  
    
    );
}

export default uppermenu