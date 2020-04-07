import React, {useEffect} from 'react';
import '../../css/singleProduct.css';
import Img from 'react-image';
import {Spinner} from 'react-bootstrap';
import {DotLoader} from 'react-spinners'
import { Link } from 'react-router-dom';



const MisterS = () => {
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
        <div className="single-product-container bg-paulPort">
           <div className="single-product-image">
            <Img        className="spimg"
                        src={require('../../img/cpp.png')}
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
                <h1>Cuvée Paul Port 2016</h1>
                <div className="wine-comp-desc">
                    <Img className="grape-comp" src={require('../../img/dkg.svg')} loader={<Spinner className="grape-spinner" animation="border" />}/>
                    <Img className="grape-comp" src={require('../../img/dkg.svg')} loader={<Spinner className="grape-spinner" animation="border" />}/>
                    <span>{'(Fetească Neagră şi Cabernet Sauvignon)'}</span>

                </div>
                
                <div className="text-desc">
                Singurul vin demidulce al Cramei Ferdi, este un cupaj format din Fetească Neagră și Cabernet Sauvignon. Prin alăturarea celor două soiuri, bineînțeles că s-a obținut un vin premium, căruia nu îi lipsesc nici corpul si nici culoarea bine conturate de Cabernet, dar nici gustul desăvârșit de fructele de pădure specifice Feteștii Negre. Cele 24 de luni petrecute în baric încununează cu succes calitatea acestui vin. Albastrul regal este culoarea capisonului de ceara cu sigiliul cramei. Anul recoltei este 2016 iar gradul alcoolic este 14,9%.
                <ul className="swp-list">
                    <li>
                    <i className="fas fa-caret-right list-arrow"></i>
                    Tip Vin - Demidulce
                    </li>
                    <li>
                    <i className="fas fa-caret-right list-arrow"></i>
                    Maturare – 24 luni, baric din stejar românesc
                    </li>
                    <li>
                    <i className="fas fa-caret-right list-arrow"></i>
                    Volum - 0,75L
                    </li>
                    <li>
                    <i className="fas fa-caret-right list-arrow"></i>
                    Conţinut de alcool - 14,9%
                    </li>
                    <li>
                    <i className="fas fa-caret-right list-arrow"></i>
                    Culoare – Roşu
                    </li>
                </ul>
                </div>
            
                <Link to="/vinuri" className="desc-btn">Vinuri</Link>
                <Link to="/" className="desc-btn" >Acasă</Link>
            </div>
        </div>
    )
}

export default MisterS
