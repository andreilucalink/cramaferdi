import React, {useEffect} from 'react';
import '../../css/singleProduct.css';
import Img from 'react-image';
import {Spinner} from 'react-bootstrap';
import {DotLoader} from 'react-spinners'
import { Link } from 'react-router-dom';



const CuveeAlexandra = () => {
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
        <div className="single-product-container bg-alexandra">
           <div className="single-product-image">
            <Img        className="spimg"
                        src={require('../../img/cale.png')}
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
                <h1>Cuvée Alexandra Ediție Limitată 2019</h1>
                <div className="wine-comp-desc">
                    <Img className="grape-comp" src={require('../../img/whg.svg')} loader={<Spinner className="grape-spinner" animation="border" />}/>
                    <Img className="grape-comp" src={require('../../img/whg.svg')} loader={<Spinner className="grape-spinner" animation="border" />}/>
                    <Img className="grape-comp" src={require('../../img/whg.svg')} loader={<Spinner className="grape-spinner" animation="border" />}/>

                </div>
                    <span id="grp">{'(Tămâioasă Românească, Riesling Italian și Sauvignon Blanc)'}</span>
                
                <div className="text-desc">
                Cupajul alb bazat pe Tămâioasă Românească, Riesling Italian și Sauvignon Blanc ne oferă un curcubeu de arome unde Tămâioasa, după cum îi spune și numele vine cu accente de tămâie combinată cu fagure, busuioc și lămâie verde. Una dintre cele mai puternice arome de vin alb le dă acest soi, chiar dacă acest cupaj este sec, iar Riesling-ul Italian îl completează frumos cu note minerale și Sauvignon-ul Blanc cu note fructoase.
                <ul className="swp-list">
                    <li>
                    <i className="fas fa-caret-right list-arrow"></i>
                    Tip Vin - Sec
                    </li>
                
                    <li>
                    <i className="fas fa-caret-right list-arrow"></i>
                    Volum - 0,75L
                    </li>
                    <li>
                    <i className="fas fa-caret-right list-arrow"></i>
                    Conţinut de alcool - 13,9%
                    </li>
                    <li>
                    <i className="fas fa-caret-right list-arrow"></i>
                    Culoare – Alb
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

export default CuveeAlexandra