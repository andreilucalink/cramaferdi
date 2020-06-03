import React, {useEffect} from 'react';
import '../../css/singleProduct.css';
import Img from 'react-image';
import {Spinner} from 'react-bootstrap';
import {DotLoader} from 'react-spinners'
import { Link } from 'react-router-dom';

const BlauBurg = () => {
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
        <div className="single-product-container bg-blauburg">
           <div className="single-product-image">
            <Img        className="spimg"
                        src={require('../../img/bbrg.png')}
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
                <h1>Blau Burg 2018</h1>
                <div className="wine-comp-desc">
                    <Img className="grape-comp" src={require('../../img/dkg.svg')} loader={<Spinner className="grape-spinner" animation="border" />}/>
                    <span id="grp">{'(Blaufränkisch)'}</span>
                </div>

                <div className="text-desc">
                    Un vin mineral din soiul austriac Blaufränkisch, bine structurat cu arome intense de violete si culoare rubinie. Cele 6 luni petrecute la baric au rotunjit gustul într-un mix de ciocolată amaruie și piper negru.
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
                    Conţinut de alcool - 14,5%
                    </li>
                    <li>
                    <i className="fas fa-caret-right list-arrow"></i>
                    Culoare – Roșu
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

export default BlauBurg;
