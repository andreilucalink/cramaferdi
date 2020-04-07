import React, {useEffect} from 'react';
import '../../css/singleProduct.css';
import Img from 'react-image';
import {Spinner} from 'react-bootstrap';
import {DotLoader} from 'react-spinners'
import { Link } from 'react-router-dom';



const CuveeFrancisc = () => {
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
        <div className="single-product-container bg-francisc">
           <div className="single-product-image">
            <Img        className="spimg"
                        src={require('../../img/cuvf.png')}
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
                <h1>Cuvee Francisc 2017 </h1>
                <div className="wine-comp-desc">
                    <Img className="grape-comp" src={require('../../img/dkg.svg')} loader={<Spinner className="grape-spinner" animation="border" />}/>
                    <Img className="grape-comp" src={require('../../img/dkg.svg')} loader={<Spinner className="grape-spinner" animation="border" />}/>

                </div>
                    <span id="grp">{'(Cabernet Franc și Merlot)'}</span>
                
                <div className="text-desc">
                Cabernet Franc și Merlot, două soiuri de struguri care se completează perfect într-un blend ce oferă un caracter unic, un potențial bun de învechire și o comoară artizanală. Vinul este plăcut pentru aromele sale intense, aciditatea medie spre înaltă și gustul ierbos. Anul recoltei este 2017 iar maturarea a avut loc timp de 18 luni în butoaie de stejar. Gradul alcoolic este 14,9%.
                <br/>
                <b><i>Recomandare decantare: minim 1h.</i></b>
                <ul className="swp-list">
                    <li>
                    <i className="fas fa-caret-right list-arrow"></i>
                    Tip Vin - Sec
                    </li>
                    <li>
                    <i className="fas fa-caret-right list-arrow"></i>
                    Maturare – 18 luni, baric din stejar românesc
                    </li>
                    <li>
                    <i className="fas fa-caret-right list-arrow"></i>
                    Volum - 0,75L
                    </li>
                    <li>
                    <i className="fas fa-caret-right list-arrow"></i>
                    Conţinut de alcool - 14,9%
                    </li>
                    <li>
                    <i className="fas fa-caret-right list-arrow"></i>
                    Culoare – Roşu
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

export default CuveeFrancisc
