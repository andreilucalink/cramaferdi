import React from 'react';
import '../../css/singleProduct.css';
import Img from 'react-image';
import {Spinner} from 'react-bootstrap';
import {DotLoader, CircleLoader, RingLoader} from 'react-spinners';
import { Link } from 'react-router-dom';



const Wine1 = () => {
    const override = `
            position: absolute;
            top: 30%;
            left: 40%;
            height: 200px;
            width: 200px;
            `;
    return (
        <div className="single-product-container">
           <div className="single-product-image">
            <Img        className="spimg"
                        src={require('../../img/p1s.png')}
                        loader={ 
                        <DotLoader
                            css={override}
                            className="product-spinner"
                            size={200}
                            color={"#0f2027"}
                          />}
                />
               {/*  <DotLoader
                            css={override}
                            className="product-spinner"
                            size={200}
                            color={"#0f2027"}
                          /> */}
           </div>
           <div className="single-product-desc">
                <h1>Cuvee Paul</h1>
                <div className="wine-comp-desc">
                    <Img className="grape-comp" src={require('../../img/dkg.svg')} loader={<Spinner className="grape-spinner" animation="border" />}/>
                    <Img className="grape-comp" src={require('../../img/whg.svg')} loader={<Spinner className="grape-spinner" animation="border" />}/>
                    <span>{'(Merlot + Riesling)'}</span>
                </div>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est dolorum mollitia, unde laborum accusamus minima rem facere neque. Quam, enim perferendis vel rem aut aperiam consectetur quia nam fuga sint corporis dolorem sapiente deleniti inventore cumque, delectus asperiores ab consequuntur. Ex amet libero vitae omnis! Vitae numquam quasi inventore fugit.
                </p>
                <Link to="/products" className="desc-btn">Products</Link>
                <Link to="/" className="desc-btn" >Home</Link>
            </div>
        </div>
    )
}

export default Wine1
