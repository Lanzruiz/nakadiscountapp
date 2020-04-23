import React from 'react';

function navigation() {
    return (
        <div id="nav-wrap">
            <div classNameName="nav-wrap-holder">
                <div className="container" id="nav_wrapper">
                    <nav className="navbar navbar-static-top nav-white" id="main_navbar" role="navigation">
                       <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#Navbar">
                                    <span className="sr-only">
                                        Toggle navigation
                                    </span>
                                    <span className="icon-bar">
                                    </span>
                                    <span className="icon-bar">
                                    </span>
                                    <span className="icon-bar">
                                    </span>
                            </button>
                       </div>
                       <div className="collapse navbar-collapse" id="Navbar">
                            <ul className="nav navbar-nav navbar-left">
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                  <i class="ti-home">
                                  </i>
                                  Home
                                  <span class="caret">
                                  </span>
                                </a>
                                <ul class="dropdown-menu" role="menu">
                                  <li>
                                    <a href="http://pamukovic.com/demo/kupon">
                                      Second Design
                                    </a>
                                  </li>
                                 
                                </ul>
                              </li>
                              <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                     <i class=" ti-clipboard">
                                  </i>
                                  Pages 
                                  <span class="caret">
                                  </span>
                                </a>
                                <ul class="dropdown-menu" role="menu">
                                  <li>
                                    <a href="details_2.html">
                                      Deal Page 1
                                    </a>
                                  </li>
                                  <li>
                                    <a href="details.html">
                                      Deal Page 2
                                    </a>
                                  </li>
                                  <li>
                                    <a href="results.html">
                                      Search Results
                                    </a>
                                  </li>
                                  <li>
                                    <a href="contact.html">
                                      Contact
                                    </a>
                                  </li>
                                  <li>
                                    <a href="faq.html">
                                      FAQ page
                                    </a>
                                  </li>
                                  <li>
                                    <a href="sumbit.html">
                                      Sumbit deal
                                    </a>
                                  </li>
                                  <li>
                                    <a href="registration.html">
                                      Registration
                                    </a>
                                  </li>
                                  <li>
                                    <a href="cart.html">
                                      Cart Page
                                    </a>
                                  </li>
                                  <li>
                                    <a href="checkout.html">
                                      Checkout
                                    </a>
                                  </li>
                                  <li>
                                    <a href="features.html">
                                      Shortcodes
                                    </a>
                                  </li>
                                </ul>
                              </li>
                              <li>
                                <a href="results.html">
                                     <i class=" ti-list-ol">
                                  </i>
                                   
                                  Categories
                                </a>
                              </li>
                              <li>
                                <a href="sumbit.html">
                                   <i class="ti-settings">
                                  </i> 
                                  Sumbit
                                </a>
                              </li>
                              <li>
                                <a href="contact.html">
                                    <i class="ti-email">
                                  </i>
                                  Contact
                                </a>
                              </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default navigation;