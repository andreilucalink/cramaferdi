import React, {useEffect} from 'react';
import '../../css/singleProduct.css';
import Img from 'react-image';
import {Spinner} from 'react-bootstrap';
import {DotLoader} from 'react-spinners'
import { Link } from 'react-router-dom';



const RoseCos = () => {

    useEffect(()=> {
        window.scrollTo(0,0);
        const age = window.sessionStorage.getItem('clientAge');
		if(!age || age === 'invalid'){
			window.location.href = "/";
		}
    },[]);

    const override = `
            position: absolute;
            top: 30%;
            left: 40%;
            height: 200px;
            width: 200px;
            `;
    return (
        <div className="single-product-container bg-cosmina">
           <div className="single-product-image">
            <Img        className="spimg"
                        src={require('../../img/rcos.png')}
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
                <h1>Rosé Cosmina Ediție Limitată 2019</h1>
                <div className="wine-comp-desc">
                    <Img className="grape-comp" src={require('../../img/dkg.svg')} loader={<Spinner className="grape-spinner" animation="border" />}/>
                    <Img className="grape-comp" src={require('../../img/dkg.svg')} loader={<Spinner className="grape-spinner" animation="border" />}/>
                    <Img className="grape-comp" src={require('../../img/dkg.svg')} loader={<Spinner className="grape-spinner" animation="border" />}/>

                </div>
                <span id="grp">{'(Shiraz, Blaufränkisch și Pinot Noir)'}</span>
                <div className="text-desc">    
                Un cupaj din trei soiuri deosebite: Pinot Noir, Shiraz și Blaufränkisch ne aduce în prezența unui rosé de culoarea somonului cu miros îmbătător de căpșuni proaspete. Secretului acestui rosé sec stă în combinația îndrăzneață a acestor soiuri, unde Shiraz-ul oferă corp vinului, Pinot Noir-ul este responsabil cu aciditatea ridicată și Blaufränkisch condimentează cu succes blend-ul. 
                <ul className="swp-list">
                    <li>
                    <i className="fas fa-caret-right list-arrow"></i>
                    Tip Vin - Sec
                    </li>
                    <li>
                    <i className="fas fa-caret-right list-arrow"></i>
                    Volum - 0,75 L
                    </li>
                    <li>
                    <i className="fas fa-caret-right list-arrow"></i>
                    Conţinut de alcool - 13,7%
                    </li>
                    <li>
                    <i className="fas fa-caret-right list-arrow"></i>
                    Culoare - Rosé
                    </li>
                    
                </ul>
                </div>
                <div className="desc-buttons">
                    <Link to="/vinuri" className="desc-btn desc-btn-left">Vinuri</Link>
                    <Link to="/" className="desc-btn btn-desc-right" >Acasă</Link>
                </div>       
            </div>
        </div>
    )
}

export default RoseCos