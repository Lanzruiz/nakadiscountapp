import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

function carousel() {
    return (
        <Carousel showThumbs={false} showStatus={false}>
            <div>
                <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1of6FDlr0gK0jSZFnXXbRRXXa.jpg_1200x1200.jpg" ></img>

            </div>
            <div>
                <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1JgrFDlr0gK0jSZFnXXbRRXXa.jpg_1200x1200Q100.jpg_.webp" ></img>
             
            </div>
            <div>
                <img src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1GxvFDlr0gK0jSZFnXXbRRXXa.jpg_1200x1200Q100.jpg_.webp" ></img>
               
            </div>
        </Carousel>
    );
}

export default carousel;