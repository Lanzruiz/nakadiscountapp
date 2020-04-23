import React from 'react';

function product() {
    return (
        <div className="col-sm-4">
            <div className="deal-entry orange">
                <div className="image">
                    <a href="#" target="_blank" title="#">
                        <img src="http://placehold.it/700x420" alt="#" class="img-responsive"></img>
                    </a>
                    <span class="bought">
                        <i class="ti-tag">
                        </i>
                         169
                    </span>
                </div>
                <div class="title">
                    <a href="#" target="_blank" title="ATLETIKA 3 mēnešu abonements">
                      3-dnevni oddih za 2 v hotelu Ferienhotel Alber 4*
                    </a>
                </div>
                <div class="entry-content">
                    <div class="prices clearfix">
                      <div class="procent">
                        -65%
                      </div>
                      <div class="price">
                        <i class="ti-money">
                        </i>
                        
                        <b>
                          60,00
                        </b>
                      </div>
                      <div class="old-price">
                        <span>
                          <i class="ti-money">
                          </i>
                          171,00
                        </span>
                      </div>
                    </div>
                    <p>
                      Immerse Yourself in the Magic of Cambodia with a Luxurious Eight Day/Seven Night Escape at Two of the World’s Finest Hotels!
                    </p>
                </div>
                <footer class="info_bar clearfix">
                    <ul class="unstyled list-inline row">
                      <li class="time col-sm-7 col-xs-6 col-lg-8">
                        <i class="ti-timer">
                        </i>
                        <b>
                          8
                        </b>
                        d.
                        <b>
                          20
                        </b>
                        st.
                        <b>
                          58
                        </b>
                        min.
                      </li>
                      <li class="info_link col-sm-5 col-xs-6 col-lg-4">
                        <a href="#" class="btn btn-block btn-default btn-raised btn-sm">
                          View Deal
                        </a>
                      </li>
                    </ul>
                  </footer>
            </div>
        </div>
    );
}

export default product;