import React, {useEffect} from 'react';
import '../../css/singleProduct.css';
import Img from 'react-image';
import {Spinner} from 'react-bootstrap';
import {DotLoader} from 'react-spinners'
import { Link } from 'react-router-dom';



const MadameS = () => {
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
        <div className="single-product-container bg-madameS">
           <div className="single-product-image">
            <Img        className="spimg"
                        src={require('../../img/mads.png')}
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
                    <Img className="grape-comp" src={require('../../img/whg.svg')} loader={<Spinner className="grape-spinner" animation="border" />}/>
                    <span>{'(Sauvignon Blanc)'}</span>

                </div>
                
                <div className="text-desc">
                Acest Sauvignon Blanc te transpune instantaneu într-o grădină cu piersici înfloriți. Aciditatea ridicată, gustul de citrice și plante ierboase date de pirazină și senzația crocantă conferă unicitate acestui vin. 
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
                    Conţinut de alcool - 12,9%
                    </li>
                    <li>
                    <i className="fas fa-caret-right list-arrow"></i>
                    Culoare – Alb
                    </li>
                </ul>
                </div>
            
                <Link to="/vinuri" className="desc-btn">Vinuri</Link>
                <Link to="/" className="desc-btn" >Acasă</Link>
            </div>
        </div>
    )
}

export default MadameS
