import React, { Component } from 'react';
import Uppermenu from '../../../components/public/uppermenu/'
import MainHeader from '../../../components/public/mainheader'
import Navigation from '../../../components/public/navigation'
import Carousel from '../../../components/public/carousel'
import Highlighter from '../../../components/public/highlighter'
import ProductList from '../../../components/public/productlist'
import FooterLogo from '../../../components/public/footerlogo';
import FooterTags from '../../../components/public/footertags';
import FooterCategories from '../../../components/public/footercategories';
import FooterMenu from '../../../components/public/footermenu';
import FooterLower from '../../../components/public/footerlower';

class Home extends Component {
    state = {  }
    render() { 
        return (
            <div class="site-wrapper animsition" data-animsition-in="fade-in" data-animsition-out="fade-out">
                <header>
                   <Uppermenu></Uppermenu>
                   <MainHeader></MainHeader>
                   <Navigation></Navigation>
                </header>
                <div class="container">
                   <Carousel></Carousel>
                </div>
                <section id="page" class="container">
                   <Highlighter></Highlighter>
                   <ProductList></ProductList>
                </section>
                <div className="cta-box clearfix">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-3 col-xs-12 pull-right">
                                <a href="#" className="btn btn-raised btn-danger ripple-effect btn-lg" data-original-title="" title="">
                                    <i className="ti-shopping-cart">
                                    </i>
                                    &nbsp; Sumbit Deal
                                </a>
                            </div>
                            <div className="col-md-9 col-sm-9 col-xs-12">
                                <h3>
                                    Welcome to Kupon. Responsive Deal Template
                                </h3>
                                <p>
                                    Carefully designed to bring you the best performance, usage and customization experience!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <footer id="footer">
                    <div class="container">
                    
                       <FooterLogo></FooterLogo>
                       <FooterTags></FooterTags>
                       <FooterCategories></FooterCategories>
                       <FooterMenu></FooterMenu>
                    </div>
                    <FooterLower></FooterLower>
                </footer>
            </div>
        );
    }
}
 
export default Home;