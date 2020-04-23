import React from 'react';
import Product from '../../../components/public/product'
function productList() {
    return (
        <div class="mTop-30">
            <div class="row">
                <div class="col-sm-12 clearfix">
                    <div class="hr-link">
                       <hr class="mBtm-50" data-symbol="FEATURED DEALS"></hr>
                       <div class="view-all">
                            <a href="index.html">
                            VIEW ALL
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
                <Product></Product>
            </div>
        </div>
    );
}

export default productList;