import React from 'react';
import '../../css/singleProduct.css';
import Img from 'react-image';
import {Spinner} from 'react-bootstrap';

const Wine1 = () => {
    return (
        <div className="single-product-container">
           <div className="single-product-image">
            <Img
                        src={require('../../img/p1s.jpeg')}
                        loader={<Spinner className="product-spinner" animation="border" variant="primary" />}
                />
           </div>
        </div>
    )
}

export default Wine1
