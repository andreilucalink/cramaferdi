import React, {useEffect} from 'react';
import '../../css/singleProduct.css';
import Img from 'react-image';
import {Spinner} from 'react-bootstrap';
import {DotLoader} from 'react-spinners'
import { Link } from 'react-router-dom';



const UnchiuPwyw = () => {
    useEffect(()=> {
        window.scrollTo(0,0);
    },[]);

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
                        src={require('../../img/unp.png')}
                        loader={ 
                        <DotLoader
                            css={override}
                            className="product-spinner"
                            size={200}
                            color={"#0f2027"}
                          />}
                />
              
           </div>
           <div className="single-product-desc">
                <h1>Madame S. Ediţie Limitată 2019</h1>
                <div className="wine-comp-desc">
                    <Img className="grape-comp" src={require('../../img/dkg.svg')} loader={<Spinner className="grape-spinner" animation="border" />}/>
                    <Img className="grape-comp" src={require('../../img/dkg.svg')} loader={<Spinner className="grape-spinner" animation="border" />}/>
                    <Img className="grape-comp" src={require('../../img/dkg.svg')} loader={<Spinner className="grape-spinner" animation="border" />}/>
                    <span>{'(Merlot, Shiraz și Blaufränkisch)'}</span>

                </div>
                <p>
               
                În acest cupaj am alăturat trei soiuri cu note diferite dar care împreună oferă o senzație unică: Merlot, Shiraz și Blaufränkisch ne aduc în prezența unui vin spectaculos de culoarea purpurei cu miros îmbătător de ierburi aromate. Shiraz-ul oferă corp vinului, Merlot-ul este responsabil cu aciditatea ridicată și Blaufränkisch condimentează cu succes blend-ul. Maturat 6 luni în butoaie de stejar românesc. 
               <ul className="swp-list">
                    <li>
                    <i class="fas fa-caret-right list-arrow"></i>
                    Tip Vin - Sec
                    </li>
                   
                    <li>
                    <i class="fas fa-caret-right list-arrow"></i>
                    Maturare – 6 luni, baric din stejar românesc
                    </li>
                    <li>
                    <i class="fas fa-caret-right list-arrow"></i>
                    Volum - 0,75L
                    </li>
                    <li>
                    <i class="fas fa-caret-right list-arrow"></i>
                    Conţinut de alcool - 14,5%
                    </li>
                    <li>
                    <i class="fas fa-caret-right list-arrow"></i>
                    Culoare – Roşu
                    </li>
                </ul>
                </p>
            
                <Link to="/vinuri" className="desc-btn">Vinuri</Link>
                <Link to="/" className="desc-btn" >Acasă</Link>
            </div>
        </div>
    )
}

export default UnchiuPwyw
